import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
          <div className="max-w-md space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-5xl tracking-tight text-matte-ink">Let's connect<span className="text-matte-accent">.</span></h2>
              <p className="text-lg text-matte-ink/60">
                Interested in partnership or have a general inquiry? We'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6 pt-8">
              <div>
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-matte-ink/30">Email</h4>
                <p className="text-lg font-medium text-matte-ink">hello@cdcgroup.th</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-matte-ink/30">Location</h4>
                <p className="text-lg font-medium text-matte-ink">Bangkok, Thailand</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 shadow-xl md:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="group relative">
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your Name"
                      className="w-full border-b border-matte-ink/10 py-4 text-sm outline-none transition-colors focus:border-matte-accent"
                    />
                  </div>
                  <div className="group relative">
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Email Address"
                      className="w-full border-b border-matte-ink/10 py-4 text-sm outline-none transition-colors focus:border-matte-accent"
                    />
                  </div>
                  <div className="group relative">
                    <textarea 
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="How can we help?"
                      className="w-full resize-none border-b border-matte-ink/10 py-4 text-sm outline-none transition-colors focus:border-matte-accent"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={status !== 'idle'}
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-matte-ink py-5 text-xs font-bold tracking-widest uppercase text-white transition-all hover:bg-matte-accent disabled:opacity-50"
                >
                  {status === 'idle' && (
                    <>
                      Send Message
                      <Send size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                  {status === 'sending' && 'Sending...'}
                  {status === 'sent' && 'Message Sent!'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
