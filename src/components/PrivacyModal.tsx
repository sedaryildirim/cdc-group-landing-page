import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-matte-ink/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-matte-ink/5 p-6">
              <h3 className="font-serif text-2xl text-matte-ink">Privacy Policy</h3>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-matte-ink/40 transition-colors hover:bg-matte-ink/5 hover:text-matte-ink"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            <div className="overflow-y-auto p-8 text-matte-ink/70">
              <div className="space-y-6 text-sm leading-relaxed">
                <section>
                  <h4 className="font-bold text-matte-ink uppercase tracking-wider text-xs mb-2">Introduction</h4>
                  <p>
                    CDC Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                  </p>
                </section>
                <section>
                  <h4 className="font-bold text-matte-ink uppercase tracking-wider text-xs mb-2">Information We Collect</h4>
                  <p>
                    We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, or otherwise when you contact us.
                  </p>
                </section>
                <section>
                  <h4 className="font-bold text-matte-ink uppercase tracking-wider text-xs mb-2">How We Use Your Information</h4>
                  <p>
                    We use the information we collect or receive to provide and facilitate delivery of services to the user, to respond to user inquiries, and to send administrative information to you.
                  </p>
                </section>
                <section>
                  <h4 className="font-bold text-matte-ink uppercase tracking-wider text-xs mb-2">Data Security</h4>
                  <p>
                    We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                  </p>
                </section>
                <section>
                  <h4 className="font-bold text-matte-ink uppercase tracking-wider text-xs mb-2">Contact Us</h4>
                  <p>
                    If you have questions or comments about this policy, you may contact us at our office in Bangkok, Thailand.
                  </p>
                </section>
                <p className="pt-4 text-[10px] uppercase tracking-widest opacity-50">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
