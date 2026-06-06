'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useToast } from '@/components/ToastProvider';

type TrackOption = 'Fullstack' | 'AI Engine' | 'Product';

export const WorkshopForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    track: '' as TrackOption | '',
    portfolioUrl: '',
    fullName: '',
    email: '',
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
        body: JSON.stringify({ formType: 'Workshop Application', ...formData }),
      });
      
      if (!response.ok) throw new Error('Submission failed');
      
      showToast('Success: Your application has been submitted!');
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
            <span className="text-[#6600ff]">STEP {step} OF 3 — {step === 1 ? 'TRACK' : step === 2 ? 'WORK' : 'CONTACT'}</span>
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
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] font-heading tracking-tight mb-4">Which track are you applying for?</h2>
              <p className="text-[#4D4D4D] text-sm font-medium">Select the discipline you'll be building in during the sprint.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <OptionCard 
                title="Fullstack" 
                description="Next.js, FastAPI, systems arch."
                selected={formData.track === 'Fullstack'}
                onClick={() => setFormData({ ...formData, track: 'Fullstack' })}
              />
              <OptionCard 
                title="AI Engine" 
                description="LLMs, RAG, custom agents."
                selected={formData.track === 'AI Engine'}
                onClick={() => setFormData({ ...formData, track: 'AI Engine' })}
              />
              <OptionCard 
                title="Product" 
                description="UX/UI, strategy, go-to-market."
                selected={formData.track === 'Product'}
                onClick={() => setFormData({ ...formData, track: 'Product' })}
              />
            </div>
            <div className="flex justify-end pt-8">
              <button 
                onClick={handleNext}
                disabled={!formData.track}
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
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] font-heading tracking-tight mb-4">Show us what you've built.</h2>
              <p className="text-[#4D4D4D] text-sm font-medium">Link to a GitHub repo, portfolio, or live product.</p>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[#6600ff] uppercase tracking-[0.2em] mb-3">PORTFOLIO / GITHUB URL *</label>
              <input 
                type="url" 
                value={formData.portfolioUrl}
                onChange={(e) => setFormData({...formData, portfolioUrl: e.target.value})}
                className="w-full px-6 py-4 rounded-xl border border-black/5 bg-black/[0.01] focus:outline-none focus:border-[#6600ff] transition-all text-[#111827] font-medium"
                placeholder="https://github.com/alexjohnson"
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
                disabled={!formData.portfolioUrl}
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
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] font-heading tracking-tight mb-4">Almost there.</h2>
              <p className="text-[#4D4D4D] text-sm font-medium">We'll review your application and get back to you within 48 hours.</p>
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
                <label className="block text-[10px] font-bold text-[#6600ff] uppercase tracking-[0.2em] mb-3">EMAIL ADDRESS *</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl border border-black/5 bg-black/[0.01] focus:outline-none focus:border-[#6600ff] transition-all text-[#111827] font-medium"
                  placeholder="alex@example.com"
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
                disabled={!formData.fullName || !formData.email || isSubmitting}
                className="bg-[#6600ff] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-[#3D0099] transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_10px_25px_rgba(102,0,255,0.2)]"
              >
                {isSubmitting ? 'Sending...' : 'Submit application'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
