'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useToast } from '@/components/ToastProvider';

type Step1Option = 'Development speed' | 'Internal operations' | 'Customer acquisition' | 'Custom integrations';
type Step2Option = 'Pre-revenue' | 'Early stage' | 'Scaling' | 'Enterprise';

export const ConsultingForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    bottleneck: '' as Step1Option | '',
    stage: '' as Step2Option | '',
    fullName: '',
    workEmail: '',
    company: '',
  });

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.workEmail) {
      showToast('Error: Please fill in required fields.');
      return;
    }
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'Consulting Audit', ...formData }),
      });
      
      if (!response.ok) throw new Error('Submission failed');
      
      showToast('Success: Your audit request has been sent! Redirecting...');
      setTimeout(() => {
        window.location.href = '/booking';
      }, 1500);
    } catch (error) {
      showToast('Error: Failed to submit form. Try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const OptionCard = ({ title, description, selected, onClick }: { title: string; description: string; selected: boolean; onClick: () => void }) => (
    <div 
      onClick={onClick}
      className={`p-10 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
        selected 
          ? 'border-[#6600ff] bg-[#6600ff]/[0.02] shadow-[0_10px_30px_rgba(102,0,255,0.05)]' 
          : 'border-black/5 hover:border-[#6600ff]/30 hover:bg-black/[0.01]'
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-bold font-heading text-lg tracking-tight text-[#111827]">{title}</h4>
        <div className={`w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${selected ? 'border-[#6600ff]' : 'border-black/10'}`}>
          {selected && <div className="w-2.5 h-2.5 rounded-full bg-[#6600ff]" />}
        </div>
      </div>
      <p className="text-sm text-[#4D4D4D] font-medium leading-relaxed">{description}</p>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.03)] border border-black/5 overflow-hidden">
      <div className="p-10 md:p-16">
        {/* Progress Bar */}
        <div className="mb-16">
          <div className="flex justify-between text-[10px] font-bold text-[#111827] uppercase tracking-[0.2em] mb-4">
            <span className="text-[#6600ff]">STEP {step} OF 3 — {step === 1 ? 'BOTTLENECK' : step === 2 ? 'STAGE' : 'CONTACT'}</span>
            <span>{Math.round((step / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-black/5 h-1 rounded-full overflow-hidden">
            <div 
              className="bg-[#6600ff] h-full transition-all duration-500 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] font-heading tracking-tight mb-4">What is your primary operational bottleneck?</h2>
              <p className="text-[#4D4D4D] text-sm font-medium">Select the area most visibly breaking your growth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OptionCard 
                title="Development speed" 
                description="Slow shipping, fragile builds, no CI/CD."
                selected={formData.bottleneck === 'Development speed'}
                onClick={() => setFormData({ ...formData, bottleneck: 'Development speed' })}
              />
              <OptionCard 
                title="Internal operations" 
                description="Disconnected workflows, manual handoffs."
                selected={formData.bottleneck === 'Internal operations'}
                onClick={() => setFormData({ ...formData, bottleneck: 'Internal operations' })}
              />
              <OptionCard 
                title="Customer acquisition" 
                description="Broken funnels, no attribution."
                selected={formData.bottleneck === 'Customer acquisition'}
                onClick={() => setFormData({ ...formData, bottleneck: 'Customer acquisition' })}
              />
              <OptionCard 
                title="Custom integrations" 
                description="Duct-taped systems that break at scale."
                selected={formData.bottleneck === 'Custom integrations'}
                onClick={() => setFormData({ ...formData, bottleneck: 'Custom integrations' })}
              />
            </div>
            <div className="flex justify-end pt-8">
              <button 
                onClick={handleNext}
                disabled={!formData.bottleneck}
                className="bg-[#6600ff] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-[#3D0099] transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_10px_25px_rgba(102,0,255,0.2)]"
              >
                Next step <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] font-heading tracking-tight mb-4">What stage is your company at?</h2>
              <p className="text-[#4D4D4D] text-sm font-medium">This calibrates the right systems architecture.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OptionCard 
                title="Pre-revenue" 
                description="Building MVP, validating market."
                selected={formData.stage === 'Pre-revenue'}
                onClick={() => setFormData({ ...formData, stage: 'Pre-revenue' })}
              />
              <OptionCard 
                title="Early stage" 
                description="$0-$500K ARR. Early customers."
                selected={formData.stage === 'Early stage'}
                onClick={() => setFormData({ ...formData, stage: 'Early stage' })}
              />
              <OptionCard 
                title="Scaling" 
                description="$500K-$5M ARR. Systems straining."
                selected={formData.stage === 'Scaling'}
                onClick={() => setFormData({ ...formData, stage: 'Scaling' })}
              />
              <OptionCard 
                title="Enterprise" 
                description="$5M+ ARR or large org."
                selected={formData.stage === 'Enterprise'}
                onClick={() => setFormData({ ...formData, stage: 'Enterprise' })}
              />
            </div>
            <div className="flex justify-between pt-8">
              <button 
                onClick={handleBack}
                className="text-[#111827] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-black/5 transition-all border border-black/5"
              >
                <ArrowLeft className="w-4 h-4 inline mr-2" /> Back
              </button>
              <button 
                onClick={handleNext}
                disabled={!formData.stage}
                className="bg-[#6600ff] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-[#3D0099] transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_10px_25px_rgba(102,0,255,0.2)]"
              >
                Next step <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] font-heading tracking-tight mb-4">Where should we send the audit?</h2>
              <p className="text-[#4D4D4D] text-sm font-medium">You'll be redirected to book a 30-min strategy call immediately after.</p>
            </div>
            <div className="space-y-8">
              <div>
                <label className="block text-[10px] font-bold text-[#6600ff] uppercase tracking-[0.2em] mb-3">FULL NAME *</label>
                <input 
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl border border-black/5 bg-black/[0.01] focus:outline-none focus:border-[#6600ff] transition-all text-[#111827] font-medium"
                  placeholder="Alex Johnson"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[#6600ff] uppercase tracking-[0.2em] mb-3">WORK EMAIL *</label>
                <input 
                  type="email" 
                  value={formData.workEmail}
                  onChange={(e) => setFormData({...formData, workEmail: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl border border-black/5 bg-black/[0.01] focus:outline-none focus:border-[#6600ff] transition-all text-[#111827] font-medium"
                  placeholder="alex@company.com"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[#6600ff] uppercase tracking-[0.2em] mb-3">COMPANY <span className="text-[#4D4D4D] lowercase font-normal">(optional)</span></label>
                <input 
                  type="text" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl border border-black/5 bg-black/[0.01] focus:outline-none focus:border-[#6600ff] transition-all text-[#111827] font-medium"
                  placeholder="Acme Inc."
                />
              </div>
            </div>
            <div className="flex justify-between pt-8">
              <button 
                onClick={handleBack}
                className="text-[#111827] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-black/5 transition-all border border-black/5"
              >
                <ArrowLeft className="w-4 h-4 inline mr-2" /> Back
              </button>
              <button 
                onClick={handleSubmit}
                disabled={!formData.fullName || !formData.workEmail || isSubmitting}
                className="bg-[#6600ff] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-[#3D0099] transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_10px_25px_rgba(102,0,255,0.2)]"
              >
                {isSubmitting ? 'Sending...' : 'Request audit'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
