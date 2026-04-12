import { NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';

// Basic in-memory rate limiting fallback
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

// Initialize Upstash Ratelimit only if KV config exists
const ratelimit = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
  ? new Ratelimit({
      redis: kv,
      limiter: Ratelimit.slidingWindow(5, '1 m'),
      analytics: true,
    })
  : null;

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting Logic
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    
    if (ratelimit) {
      // Use Upstash global rate limiting
      const { success } = await ratelimit.limit(`ratelimit-subscribe_${ip}`);
      if (!success) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
    } else {
      // Fallback: In-memory mapping
      const now = Date.now();
      const userRateData = rateLimitMap.get(ip) || { count: 0, lastReset: now };
      
      if (now - userRateData.lastReset > RATE_LIMIT_WINDOW_MS) {
        userRateData.count = 0;
        userRateData.lastReset = now;
      }
      
      userRateData.count += 1;
      rateLimitMap.set(ip, userRateData);
    
      if (userRateData.count > MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
    }

    // 2. Body Parsing & Validation
    const body = await request.json();
    const { email, bot_field } = body;

    // Honeypot Bot Trap: If the hidden 'bot_field' is filled, immediately return a fake success.
    if (bot_field) {
      return NextResponse.json({
        message: 'Successfully authenticated into the PIS Labs ecosystem.',
        status: 'success'
      }, { status: 201 });
    }

    // Basic server-side validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address provided.' }, 
        { status: 400 }
      );
    }

    // ==========================================
    // DATA LAYER: Send to Google Sheets via Apps Script
    // Set GOOGLE_SCRIPT_URL in your .env.local file
    // ==========================================
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    
    if (GOOGLE_SCRIPT_URL) {
      const googleResponse = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!googleResponse.ok) {
        console.error('[PIS Labs System]: Google Apps Script returned status', googleResponse.status);
      }
    } else {
      console.warn('[PIS Labs System]: GOOGLE_SCRIPT_URL is missing from environment variables.');
    }

    // Server log for monitoring (PII masked for NDPR/GDPR compliance)
    const maskedEmail = email.replace(/^(.)(.*)(@.*)$/, (m: string, first: string, middle: string, domain: string) => `${first}${'*'.repeat(Math.min(middle.length, 5))}${domain}`);
    console.log(`[PIS Labs System] New ecosystem adoption: ${maskedEmail}`);

    // Return strict JSON payload
    return NextResponse.json({
      message: 'Successfully authenticated into the PIS Labs ecosystem.',
      status: 'success'
    }, { status: 201 });

  } catch (error) {
    console.error('[PIS Labs System Error]:', error);
    return NextResponse.json(
      { error: 'System error. Please try again later.' }, 
      { status: 500 }
    );
  }
}
