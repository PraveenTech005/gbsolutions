import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  AlertCircle,
  FileCheck,
  Building,
  HelpCircle
} from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import { companyInfo } from '../data/company';
import { servicesData } from '../data/services';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'pre-engineered-buildings',
    projectLocation: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid contact number (8-15 digits)';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of your project requirements';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Description must be at least 10 characters long';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
    setSubmittedData({ ...formData });
  };

  const getMailtoLink = () => {
    const selectedServiceObj = servicesData.find(s => s.slug === formData.service);
    const serviceName = selectedServiceObj ? selectedServiceObj.title : formData.service;
    const subject = encodeURIComponent(`Project Inquiry: ${serviceName} - ${formData.fullName || 'New Client'}`);
    const body = encodeURIComponent(
      `Dear G.B SOLUTIONS PEB Engineering Team,\n\n` +
      `I would like to discuss an industrial engineering project:\n\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Service: ${serviceName}\n` +
      `Project Location: ${formData.projectLocation || 'To be specified'}\n\n` +
      `Requirements:\n${formData.message}\n\n` +
      `Best regards,\n${formData.fullName}`
    );
    return `mailto:${companyInfo.contact.email}?subject=${subject}&body=${body}`;
  };

  const getWhatsAppLink = () => {
    const selectedServiceObj = servicesData.find(s => s.slug === formData.service);
    const serviceName = selectedServiceObj ? selectedServiceObj.title : formData.service;
    const text = encodeURIComponent(
      `Hello G.B SOLUTIONS PEB,\nI am interested in ${serviceName}.\n` +
      `Name: ${formData.fullName || 'Client'}\n` +
      `Location: ${formData.projectLocation || 'Hyderabad'}\n` +
      `Note: ${formData.message || 'I would like to discuss a project.'}`
    );
    return `https://wa.me/919505552025?text=${text}`;
  };

  return (
    <>
      <SEO
        title="Contact Us | Project Inquiries & Quotations"
        description="Contact G.B SOLUTIONS PEB at IDA Nacharam, Hyderabad. Call +91 95055 52025 or email gbsolutions4@gmail.com for industrial shed and civil contracting quotations."
      />

      {/* PageHero strictly using /images/og/shed_inner0.png */}
      <PageHero
        title="Contact & Enquiries"
        eyebrow="Direct Engagement"
        subtitle="Speak with our engineering team regarding your industrial shed requirements, structural steel calculations, or civil contracting works."
        breadcrumbs={[{ label: "Contact" }]}
        image="/images/og/shed_inner0.png"
        badgeText="Hyderabad Office • Prompt Technical Response"
      />

      {/* Main Contact Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Direct Contact Info (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-2 text-xs font-bold tracking-widest text-orange-600 uppercase">
                  <span>Registered Office</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Reach Our Hyderabad Engineering Team
                </h2>
                <div className="mt-4 h-0.5 w-16 bg-orange-600"></div>

                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  Whether you are planning an industrial shed, warehouse expansion, precast panels, or turnkey civil foundations, our team is ready to assist.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Address Card */}
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xs flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-600/10 border border-orange-500/30 rounded-xs flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-400">Office Location</h4>
                    <p className="text-sm font-bold text-slate-900 mt-1">{companyInfo.name}</p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {companyInfo.contact.address.full}
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xs flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-600/10 border border-orange-500/30 rounded-xs flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-400">Direct Phone / Mobile</h4>
                    <p className="text-sm font-bold text-slate-900 mt-1">
                      <a 
                        href={`tel:${companyInfo.contact.phoneRaw}`}
                        className="text-orange-600 hover:text-orange-700 font-mono"
                      >
                        {companyInfo.contact.phone}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Promoter: {companyInfo.promoter.name} ({companyInfo.promoter.phone})
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xs flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-600/10 border border-orange-500/30 rounded-xs flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-400">Electronic Mail</h4>
                    <p className="text-sm font-bold text-slate-900 mt-1">
                      <a 
                        href={`mailto:${companyInfo.contact.email}`}
                        className="text-orange-600 hover:text-orange-700 underline truncate block font-mono"
                      >
                        {companyInfo.contact.email}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Send drawings, PDFs, or architectural specifications
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xs flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-200/80 rounded-xs flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-400">Working Hours</h4>
                    <p className="text-sm font-bold text-slate-900 mt-1">
                      {companyInfo.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant Channels */}
              <div className="p-5 bg-slate-900 text-white rounded-xs border border-slate-800">
                <p className="text-xs font-mono uppercase text-orange-400 font-bold">Direct Channels</p>
                <p className="text-sm text-slate-200 mt-1">Connect instantly via WhatsApp or direct phone call</p>
                
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={companyInfo.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                  >
                    <span>WhatsApp Inquiry</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`tel:${companyInfo.contact.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange-400" />
                    <span>Call Directly</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-xs shadow-xs">
                <div className="border-b border-slate-200 pb-6 mb-8">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Project Quotation & Technical Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Please provide your building requirements. This interactive form validates your input and provides instant mailto / WhatsApp forwarding actions.
                  </p>
                </div>

                {submitted ? (
                  <div className="space-y-6">
                    <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xs">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-base font-bold text-emerald-900">
                            Inquiry Prepared Successfully!
                          </h4>
                          <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                            Thank you, <strong className="font-semibold">{submittedData.fullName}</strong>. Your project details have been validated.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-xs text-xs text-amber-900 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold">Portfolio Demonstration Notice:</strong>
                        <p className="mt-0.5 text-amber-800 leading-relaxed">
                          This is a frontend-only corporate portfolio demo (no backend database connected). To transmit your entered inquiry directly to G.B SOLUTIONS PEB, please use one of the direct action buttons below:
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs text-xs space-y-2">
                      <p><strong className="text-slate-800">Interested Service:</strong> {servicesData.find(s => s.slug === submittedData.service)?.title || submittedData.service}</p>
                      <p><strong className="text-slate-800">Client Contact:</strong> {submittedData.phone} | {submittedData.email}</p>
                      {submittedData.projectLocation && <p><strong className="text-slate-800">Location:</strong> {submittedData.projectLocation}</p>}
                      <p><strong className="text-slate-800">Requirements:</strong> {submittedData.message}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={getMailtoLink()}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send via Email Client</span>
                      </a>

                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Send to WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xs transition-colors"
                      >
                        Edit Details
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g., Rajesh Kumar"
                        className={`w-full px-4 py-3 text-sm bg-slate-50 border rounded-xs focus:bg-white focus:outline-none focus:ring-1 transition-colors ${
                          errors.fullName
                            ? "border-red-500 focus:ring-red-500"
                            : "border-slate-300 focus:border-orange-600 focus:ring-orange-600"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Email Address <span className="text-orange-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="client@company.com"
                          className={`w-full px-4 py-3 text-sm bg-slate-50 border rounded-xs focus:bg-white focus:outline-none focus:ring-1 transition-colors ${
                            errors.email
                              ? "border-red-500 focus:ring-red-500"
                              : "border-slate-300 focus:border-orange-600 focus:ring-orange-600"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Phone Number <span className="text-orange-600">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 95055 52025"
                          className={`w-full px-4 py-3 text-sm bg-slate-50 border rounded-xs focus:bg-white focus:outline-none focus:ring-1 transition-colors ${
                            errors.phone
                              ? "border-red-500 focus:ring-red-500"
                              : "border-slate-300 focus:border-orange-600 focus:ring-orange-600"
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-xs focus:bg-white focus:outline-none focus:ring-1 focus:border-orange-600 focus:ring-orange-600"
                        >
                          {servicesData.map(s => (
                            <option key={s.id} value={s.slug}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="projectLocation" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Project Site Location / Area
                        </label>
                        <input
                          type="text"
                          id="projectLocation"
                          name="projectLocation"
                          value={formData.projectLocation}
                          onChange={handleChange}
                          placeholder="e.g., IDA Nacharam / 25,000 sq.ft"
                          className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-xs focus:bg-white focus:outline-none focus:ring-1 focus:border-orange-600 focus:ring-orange-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Project Description / Scope <span className="text-orange-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe clear-span requirements, eave height, crane capacity, foundation readiness, or timeline..."
                        className={`w-full px-4 py-3 text-sm bg-slate-50 border rounded-xs focus:bg-white focus:outline-none focus:ring-1 transition-colors ${
                          errors.message
                            ? "border-red-500 focus:ring-red-500"
                            : "border-slate-300 focus:border-orange-600 focus:ring-orange-600"
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider rounded-xs transition-colors shadow-md"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Project Inquiry</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400">
                      * Required fields. All specifications treated with client confidentiality.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Location & Map Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Location & Industrial Zone Access
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Registered Office: {companyInfo.contact.address.full}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-xs overflow-hidden">
            <div className="lg:col-span-8 h-80 sm:h-96 w-full bg-slate-200 relative">
              <iframe
                title="G.B SOLUTIONS PEB Location - IDA Nacharam Hyderabad"
                src="https://maps.google.com/maps?q=Below+TSIIC+Complex+Road+No+1+IDA+Nacharam+Hyderabad+500076&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>

            <div className="lg:col-span-4 p-6 sm:p-8 space-y-4">
              <h4 className="text-base font-bold text-slate-900">
                Registered Office
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Located below the TSIIC Complex on Road No. 1 in IDA Nacharam, providing direct proximity to Hyderabad's major industrial fabrication corridors and transport freight networks.
              </p>

              <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-2">
                <p><strong>Address:</strong> Below TSIIC Complex, Road No. 1</p>
                <p><strong>Industrial Area:</strong> IDA Nacharam</p>
                <p><strong>City / Pin:</strong> Hyderabad - 500076, Telangana</p>
                <p><strong>Phone:</strong> {companyInfo.contact.phone}</p>
                <p><strong>Email:</strong> {companyInfo.contact.email}</p>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Below+TSIIC+Complex,+Road+No.+1,+IDA+Nacharam,+Hyderabad+-+500076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
