import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | PIS Labs',
  description: 'Terms of Service for PIS Labs (Pelumi Insights Studio Ltd), an Applied AI Venture Studio based in Nigeria.',
};

export default function TermsPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">Last Updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-12 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <section>
            <p className="text-lg">
              Welcome to PIS Labs. These Terms of Service ("Terms") govern your access to and use of the website, products, and services provided by Pelumi Insights Studio Ltd ("PIS Labs," "we," "us," or "our"), an Applied AI Venture Studio based in Nigeria.
            </p>
            <p className="mt-4">
              By accessing our website (pis-labs.com), booking a consultation, or using any of our digital infrastructure products (such as CredTurn), you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">1. Description of Services</h2>
            <p>PIS Labs operates as an Applied AI Venture Studio. Our core services include, but are not limited to:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Digital Infrastructure & SaaS:</strong> Development and licensing of production-grade software and financial infrastructure (e.g., CredTurn).</li>
              <li><strong>Consulting Services:</strong> High-ticket "AI Discovery & Strategy Sessions," systems architecture design, and technical advising.</li>
              <li><strong>Research & Community:</strong> Publication of technical case studies, AI papers, and operation of community ecosystems (e.g., WhatsApp channels).</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">2. Bookings, Payments, and Consultations</h2>
            <div className="space-y-4">
              <p><strong>Accuracy:</strong> You agree to provide accurate, current, and complete information about your business and operational bottlenecks.</p>
              <p><strong>Fees & Deposits:</strong> Certain strategy sessions or project discoveries may require an upfront fee or deposit. Unless explicitly stated otherwise in writing, these discovery fees are non-refundable as they compensate for the dedicated time and preliminary research conducted by our team.</p>
              <p><strong>Rescheduling:</strong> You may reschedule a consultation up to 24 hours prior to the scheduled time. Failure to attend without prior notice may result in forfeiture of any paid fees.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">3. Intellectual Property Rights</h2>
            <div className="space-y-4">
              <p><strong>PIS Labs IP:</strong> All proprietary frameworks, methodologies, pre-existing codebases, website designs, system architectures, and AI engine prompts (the "PIS Labs Engine") remain the exclusive intellectual property of Pelumi Insights Studio Ltd.</p>
              <p><strong>Client Deliverables:</strong> Ownership of specific software deliverables or custom code built during a client engagement will be governed by a separate, signed Master Service Agreement (MSA) or Statement of Work (SOW).</p>
              <p><strong>Restrictions:</strong> You may not copy, modify, distribute, sell, or lease any part of our services or included software, nor may you reverse engineer or attempt to extract the source code of our systems, without our explicit written permission.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">4. User Conduct and Security</h2>
            <p>As a user of our ecosystem, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Use our systems (including our email capture endpoints or APIs) for any unlawful, malicious, or fraudulent purpose.</li>
              <li>Attempt to bypass our rate-limiting, security protocols, or Google Sheets infrastructure.</li>
              <li>Submit false, misleading, or spam data through our contact forms or booking engines.</li>
            </ul>
            <p>PIS Labs reserves the right to terminate or restrict your access to our services and community channels immediately if we suspect a violation of these rules.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">5. Disclaimer of Warranties</h2>
            <div className="space-y-4">
              <p className="italic">Our services are provided on an "AS IS" and "AS AVAILABLE" basis.</p>
              <p><strong>AI & Predictive Data:</strong> Any "AI Insights," credit scores, or risk tiers generated by our products (such as CredTurn) are predictive analytics based on alternative data models. They are for informational and operational purposes only. We do not guarantee the absolute accuracy of AI-generated insights.</p>
              <p><strong>Not Financial Advice:</strong> PIS Labs is a technology provider, not a registered financial institution, legal advisor, or accounting firm. You are solely responsible for the business and financial decisions you make using our software infrastructure.</p>
              <p>We disclaim all warranties, whether express or implied, including the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Pelumi Insights Studio Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Your access to or use of (or inability to access or use) our products or consulting services.</li>
              <li>Any conduct or content of any third party within our community ecosystems.</li>
              <li>Any decisions made by your business based on AI models or technical blueprints provided by PIS Labs.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">7. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions. Any dispute arising from or relating to the subject matter of these Terms shall be subject to the exclusive jurisdiction of the courts located in Nigeria.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">8. Changes to These Terms</h2>
            <p>We reserve the right to modify or replace these Terms at any time as our Venture Studio evolves. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 border-b border-black/5 dark:border-white/5 pb-4">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:<br />
              <strong>Email:</strong> <a href="mailto:contact@pis-labs.com" className="text-zinc-900 dark:text-zinc-100 underline decoration-black/10 dark:decoration-white/10 underline-offset-4">contact@pis-labs.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
