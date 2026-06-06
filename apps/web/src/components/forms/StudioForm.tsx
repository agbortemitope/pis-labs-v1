'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useToast } from '@/components/ToastProvider';

type ExpertiseOption = 'Fintech / SaaS' | 'Logistics / Ops' | 'Healthcare / Biotech' | 'Deep Tech / AI';

export const StudioForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    expertise: '' as ExpertiseOption | '',
    projectDescription: '',
    fullName: '',
    email: '',
    linkedin: '',
  });

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email) {
      showToast('Error: Please fill in required fields.');
      return;
    }
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'Studio Partnership', ...formData }),
      });
      
      if (!response.ok) throw new Error('Submission failed');
      
      showToast('Success: Your venture pitch has been submitted!');
      setTimeout(() => {
        window.location.href = '/';
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
            <span className="text-[#6600ff]">STEP {step} OF 3 — {step === 1 ? 'EXPERTISE' : step === 2 ? 'VENTURE' : 'FOUNDER'}</span>
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
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] font-heading tracking-tight mb-4">What is your domain expertise?</h2>
              <p className="text-[#4D4D4D] text-sm font-medium">We look for partners with deep insight into specific industries.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OptionCard 
                title="Fintech / SaaS" 
                description="Complex systems, compliance, high-scale."
                selected={formData.expertise === 'Fintech / SaaS'}
                onClick={() => setFormData({ ...formData, expertise: 'Fintech / SaaS' })}
              />
              <OptionCard 
                title="Logistics / Ops" 
                description="Physical systems, supply chain, automation."
                selected={formData.expertise === 'Logistics / Ops'}
                onClick={() => setFormData({ ...formData, expertise: 'Logistics / Ops' })}
              />
              <OptionCard 
                title="Healthcare / Biotech" 
                description="Regulatory hurdles, data privacy, R&D."
                selected={formData.expertise === 'Healthcare / Biotech'}
                onClick={() => setFormData({ ...formData, expertise: 'Healthcare / Biotech' })}
              />
              <OptionCard 
                title="Deep Tech / AI" 
                description="Proprietary tech, hardware, algorithms."
                selected={formData.expertise === 'Deep Tech / AI'}
                onClick={() => setFormData({ ...formData, expertise: 'Deep Tech / AI' })}
              />
            </div>
            <div className="flex justify-end pt-8">
              <button 
                onClick={handleNext}
                disabled={!formData.expertise}
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
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] font-heading tracking-tight mb-4">What problem are you solving?</h2>
              <p className="text-[#4D4D4D] text-sm font-medium">Keep it brief. We're looking for clarity on the pain point.</p>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[#6600ff] uppercase tracking-[0.2em] mb-3">PROBLEM DESCRIPTION *</label>
              <textarea 
                rows={5}
                value={formData.projectDescription}
                onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
                className="w-full px-6 py-4 rounded-xl border border-black/5 bg-black/[0.01] focus:outline-none focus:border-[#6600ff] transition-all text-[#111827] font-medium resize-none"
                placeholder="Industry X has a problem where Y happens every time Z..."
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
                disabled={!formData.projectDescription}
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
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] font-heading tracking-tight mb-4">Founder details.</h2>
              <p className="text-[#4D4D4D] text-sm font-medium">We'll review your pitch and reach out if there's an alignment.</p>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-[#6600ff] uppercase tracking-[0.2em] mb-3">EMAIL ADDRESS *</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 rounded-xl border border-black/5 bg-black/[0.01] focus:outline-none focus:border-[#6600ff] transition-all text-[#111827] font-medium"
                    placeholder="alex@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#6600ff] uppercase tracking-[0.2em] mb-3">LINKEDIN URL</label>
                  <input 
                    type="url" 
                    value={formData.linkedin}
                    onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                    className="w-full px-6 py-4 rounded-xl border border-black/5 bg-black/[0.01] focus:outline-none focus:border-[#6600ff] transition-all text-[#111827] font-medium"
                    placeholder="linkedin.com/in/alexjohnson"
                  />
                </div>
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
                disabled={!formData.fullName || !formData.email || isSubmitting}
                className="bg-[#6600ff] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-[#3D0099] transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_10px_25px_rgba(102,0,255,0.2)]"
              >
                {isSubmitting ? 'Sending...' : 'Submit pitch'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
