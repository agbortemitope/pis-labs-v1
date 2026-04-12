import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | PIS Labs',
  description: 'Privacy Policy for PIS Labs (Pelumi Insights Studio Ltd). Learn how we collect, use, and protect your data under NDPR and GDPR.',
};

export default function PrivacyPage() {
  const lastUpdated = "April 11, 2026";
  
  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-24 sm:py-32">
        {/* Header */}
        <div className="mb-16">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">Last Updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-12 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <section>
            <p className="text-lg">
              Welcome to PIS Labs. Pelumi Insights Studio Ltd ("PIS Labs," "we," "us," or "our") respects your privacy and is committed to protecting the personal and business data you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (pis-labs.com), engage with our community channels, book our consulting services, or use our digital infrastructure products (such as CredTurn).
            </p>
            <p className="mt-4">
              This policy is designed to comply with applicable data protection frameworks, including the Nigeria Data Protection Regulation (NDPR) and global standards like the GDPR.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">1. Information We Collect</h2>
            <p>We collect information that you voluntarily provide to us, as well as data gathered automatically when you interact with our systems.</p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">A. Information You Provide to Us</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Contact Data:</strong> When you join our ecosystem or subscribe to updates, we collect your email address.</li>
                <li><strong>Booking & Consultation Data:</strong> When you schedule an "AI Discovery & Strategy Session" via our third-party scheduling partner (e.g., Calendly), we collect your name, company name, website URL, email address, and specific details about your business bottlenecks.</li>
                <li><strong>Financial & SME Data:</strong> If you are a client using our fintech infrastructure (CredTurn), we collect specific business, transactional, and alternative data required to generate credit scoring models and AI insights. This is governed by specific B2B Master Service Agreements (MSAs).</li>
              </ul>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">B. Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Usage Data & Analytics:</strong> We may use privacy-first analytics tools to collect non-identifiable information about how you navigate our site (e.g., clicks, time spent on pages, referral sources) to improve our UI/UX and conversion rates.</li>
                <li><strong>Device Data:</strong> Information such as your IP address, browser type, and operating system.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">2. How We Use Your Information</h2>
            <p>PIS Labs uses the collected data to operate our venture studio efficiently and provide high-value services:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our digital infrastructure and software products.</li>
              <li><strong>Consulting Preparations:</strong> To analyze your business context prior to scheduled strategy sessions to ensure maximum ROI during our calls.</li>
              <li><strong>Communication:</strong> To send you applied AI research, case studies, product updates, and ecosystem announcements.</li>
              <li><strong>Security:</strong> To monitor for unauthorized access, prevent spam, and enforce our API rate-limiting protocols.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">3. How We Share Your Information</h2>
            <p>As a solo-founder venture studio, we do not sell, rent, or trade your personal data. We only share information with trusted third-party infrastructure providers necessary to run our operations:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Backend Infrastructure:</strong> We use secure services like Google Workspace (Google Sheets) acting as our Headless CMS and data repository.</li>
              <li><strong>Scheduling & Payments:</strong> We use Calendly (and associated payment gateways like Paystack or Stripe) to process consultation bookings.</li>
              <li><strong>Community Platforms:</strong> We use WhatsApp to manage our early-adopter communities. By joining, your profile name/number may be subject to WhatsApp's native privacy policies.</li>
            </ul>
            <p>All third-party integrations are strictly vetted to ensure they align with our data security standards.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">4. Data Security</h2>
            <p>
              We implement robust, production-grade security measures to protect your data. Our Next.js architecture utilizes server-side API routes to ensure that sensitive environment variables, script URLs, and backend logic are never exposed to the client browser.
            </p>
            <p>
              However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute absolute security.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">5. Your Privacy Rights</h2>
            <p>Depending on your location (including under the NDPR and GDPR), you have specific rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Access:</strong> You can request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> You can request that we erase your personal data from our systems ("Right to be Forgotten").</li>
              <li><strong>Opt-Out:</strong> You can unsubscribe from our ecosystem communications at any time.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">6. Cookies</h2>
            <p>
              We use minimal cookies necessary for the core functionality of our website and integrated widgets (such as the Calendly booking popup). We prioritize privacy-first tracking and avoid invasive cross-site tracking pixels wherever possible.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">7. Changes to This Policy</h2>
            <p>
              PIS Labs may update this Privacy Policy periodically as we launch new ventures or adjust our infrastructure. We will notify you of any significant changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">8. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us at:<br />
              <strong>Pelumi Insights Studio Ltd (PIS Labs)</strong><br />
              <strong>Email:</strong> <a href="mailto:contact@pis-labs.com" className="text-zinc-900 dark:text-zinc-100 underline decoration-black/10 dark:decoration-white/10 underline-offset-4">contact@pis-labs.com</a><br />
              <strong>Location:</strong> Nigeria
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
