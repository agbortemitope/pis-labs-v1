import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.error('GOOGLE_SHEETS_WEBHOOK_URL is not defined in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script responded with status: ${response.status}`);
    }

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error submitting form to Google Sheets:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}
