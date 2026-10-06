import React, { useState, useEffect } from 'react';
import { MessageCircle, Instagram, Upload, CheckCircle2, FileText, X } from 'lucide-react';
import {
  DEFAULT_WHATSAPP_MESSAGE,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  buildWhatsAppUrl,
} from '../data/campusWearData';

interface ContactSectionProps {
  prefilledMerchType?: string;
  prefilledNote?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledMerchType,
  prefilledNote,
}) => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [merchType, setMerchType] = useState('Custom T-Shirts');
  const [quantity, setQuantity] = useState('');
  const [designFileName, setDesignFileName] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledMerchType) {
      setMerchType(prefilledMerchType);
    }
  }, [prefilledMerchType]);

  useEffect(() => {
    if (prefilledNote) {
      setMessage(prefilledNote);
    }
  }, [prefilledNote]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDesignFileName(file.name);
    } else {
      setDesignFileName(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim() || !college.trim() || !whatsapp.trim()) {
      setErrorMessage('Please fill in your Name, College / Organization, and WhatsApp Number.');
      return;
    }

    const cleanPhone = whatsapp.replace(/[^\d+]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit WhatsApp phone number.');
      return;
    }

    const lines = [
      'Hi CampusWear! I want to request a FREE digital mockup.',
      '',
      `• Name: ${name.trim()}`,
      `• College / Organization: ${college.trim()}`,
      `• WhatsApp: ${whatsapp.trim()}`,
      `• Merchandise Type: ${merchType}`,
      `• Estimated Quantity: ${quantity.trim() || 'To be decided'}`,
      designFileName ? `• Design File Attached: ${designFileName} (sharing in chat)` : '',
      message.trim() ? `• Brief / Notes: ${message.trim()}` : '',
    ].filter(Boolean);

    const whatsappUrl = buildWhatsAppUrl(lines.join('\n'));
    setSubmittedWhatsappUrl(whatsappUrl);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#070A11] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Channel Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#FF5500] mb-2 tracking-wide">
                Free Digital Mockup Request
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
                Let&apos;s Create Your Campus Gear.
              </h2>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">
                Fill in your campus team details to request a digital preview, or reach out
                directly on WhatsApp or Instagram.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#111726] border border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Fastest Response for Mockups</p>
                  <h3 className="font-display text-lg font-bold text-white">WhatsApp</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Share vector files, logos &amp; get your 3D digital mockup
                  </p>
                </div>
                <a
                  href={buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl transition-colors whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-[#111726] border border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Campus Drops &amp; Behind-The-Scenes</p>
                  <h3 className="font-display text-lg font-bold text-white">Instagram</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{INSTAGRAM_HANDLE}</p>
                </div>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors whitespace-nowrap shrink-0 border border-slate-700"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Mockup Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111726] rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl">
              {submittedWhatsappUrl ? (
                <div className="py-6 space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Your Mockup Brief is Ready!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    We&apos;ve formatted your details for{' '}
                    <span className="font-semibold text-white">{college}</span> ({merchType}).
                    Click below to send your request on WhatsApp—if you selected a logo file, you
                    can drop it directly into the chat.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <a
                      href={submittedWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Send Mockup Request on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedWhatsappUrl(null)}
                      className="px-5 py-4 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {errorMessage && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-xl bg-red-950/70 border border-red-800/80 text-xs sm:text-sm text-red-300 font-medium"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-slate-300 mb-1.5"
                      >
                        Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-700 bg-[#0A0D14] text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-college"
                        className="block text-xs font-semibold text-slate-300 mb-1.5"
                      >
                        College / Organization *
                      </label>
                      <input
                        id="contact-college"
                        type="text"
                        required
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                        placeholder="e.g. Robotics Club, IIT Delhi"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-700 bg-[#0A0D14] text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="sm:col-span-1">
                      <label
                        htmlFor="contact-whatsapp"
                        className="block text-xs font-semibold text-slate-300 mb-1.5"
                      >
                        WhatsApp Number *
                      </label>
                      <input
                        id="contact-whatsapp"
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 text-sm font-mono-num rounded-xl border border-slate-700 bg-[#0A0D14] text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500]"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label
                        htmlFor="contact-merch-type"
                        className="block text-xs font-semibold text-slate-300 mb-1.5"
                      >
                        Merchandise Type
                      </label>
                      <select
                        id="contact-merch-type"
                        value={merchType}
                        onChange={(e) => setMerchType(e.target.value)}
                        className="w-full px-3.5 py-3 text-sm rounded-xl border border-slate-700 bg-[#0A0D14] text-white focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500]"
                      >
                        <option value="Custom T-Shirts">Custom T-Shirts</option>
                        <option value="Custom Hoodies">Custom Hoodies</option>
                        <option value="Custom Mugs">Custom Mugs</option>
                        <option value="Event Merchandise">Event Merchandise</option>
                        <option value="Club & Society Combo">Club &amp; Society Combo</option>
                      </select>
                    </div>

                    <div className="sm:col-span-1">
                      <label
                        htmlFor="contact-quantity"
                        className="block text-xs font-semibold text-slate-300 mb-1.5"
                      >
                        Quantity
                      </label>
                      <input
                        id="contact-quantity"
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="e.g. 50 pieces"
                        className="w-full px-4 py-3 text-sm font-mono-num rounded-xl border border-slate-700 bg-[#0A0D14] text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500]"
                      />
                    </div>
                  </div>

                  {/* Upload Design/Logo */}
                  <div>
                    <label
                      htmlFor="contact-upload"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Upload Design/Logo (Optional)
                    </label>
                    <div className="relative flex items-center justify-between px-4 py-3 rounded-xl border border-dashed border-slate-700 bg-[#0A0D14] hover:bg-slate-900 transition-colors">
                      <div className="flex items-center gap-3 min-w-0">
                        {designFileName ? (
                          <FileText className="w-5 h-5 text-[#FF5500] shrink-0" />
                        ) : (
                          <Upload className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                        <span className="text-xs sm:text-sm text-slate-300 truncate">
                          {designFileName
                            ? `Selected: ${designFileName}`
                            : 'Attach club logo, sketch, or vector (PNG, SVG, PDF)'}
                        </span>
                      </div>
                      {designFileName ? (
                        <button
                          type="button"
                          onClick={() => setDesignFileName(null)}
                          aria-label="Remove selected file"
                          className="p-1 text-slate-400 hover:text-white z-10 cursor-pointer"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      ) : (
                        <span className="text-xs font-bold text-[#FF5500] shrink-0 ml-2">
                          Browse
                        </span>
                      )}
                      <input
                        id="contact-upload"
                        type="file"
                        accept=".png,.jpg,.jpeg,.svg,.pdf"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about preferred colors, placements (front/back/sleeve), or fest deadlines..."
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-700 bg-[#0A0D14] text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500]"
                    />
                  </div>

                  {/* Primary Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 text-sm sm:text-base font-bold text-white bg-[#FF5500] hover:bg-[#E04800] active:translate-y-[1px] rounded-xl transition-all duration-150 shadow-sm cursor-pointer"
                  >
                    Request Free Mockup
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
