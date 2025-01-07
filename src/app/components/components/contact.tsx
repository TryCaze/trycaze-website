import { Clock, Mail, Phone, SendHorizonal } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const Contact = () => {

    // Translation
    const t = useTranslations('Contact')

    // Form handling
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        company: '',
        phone:'',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      
        const result = await response.json();
        if (response.ok) {
          alert('Email sent successfully!');
        } else {
          alert(`Failed to send email: ${result.error}`);
        }
      };      

      // Animation

          const sectionRef = useRef(null);
      
          useEffect(() => {
              const observer = new IntersectionObserver(
                  ([entry]) => {
                      if (entry.isIntersecting) {
                          entry.target.classList.add("fade-in");
                          observer.unobserve(entry.target); // Stop observing after it fades in
                      }
                  },
                  { threshold: 0.1 }
              );
      
              const currentRef = sectionRef.current; // Copy ref value to a local variable
      
              if (currentRef) {
                  observer.observe(currentRef);
              }
      
              return () => {
                  if (currentRef) {
                      observer.unobserve(currentRef); // Use local variable for cleanup
                  }
              };
          }, []); // No dependencies needed as we're only setting up the observer once

    return ( 
      <section ref={sectionRef} className="py-10 sm:py-16 lg:py-24 opacity-0 transform translate-y-10 transition duration-700" id="contact">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{t('title')}</h2>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
              <div className="overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <div className="p-6 flex flex-col items-center">
                  <Phone className="text-white" />
                    <p className="mt-6 text-lg font-medium text-white">-</p>
                </div>
              </div>

              <div className="overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <div className="p-6 flex flex-col items-center">
                  <Mail className="text-white" />
                    <p className="mt-6 text-lg font-medium text-white">trycaze@gmail.com</p>
                </div>
              </div>

              <div className="overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <div className="p-6 flex flex-col items-center">
                  <Clock className="text-white" />
                    <p className="mt-6 text-lg font-medium leading-relaxed text-white">{t('work-hours')}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden bg-slate-900 rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-white">{t('subtitle')}</h3>
                  <form onSubmit={handleSubmit} className="mt-14">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                      <div>
                        <label className="text-base font-medium text-white mt-2 block">{t('name')}</label>
                          <label className="text-base font-normal text-white">{t('name-tag')}</label>
                            <div className="mt-2.5 relative">
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={t('placeholder-name')}
                                className="block w-full px-4 py-4 text-white placeholder-gray-100 transition-all duration-200 bg-slate-900 border border-gray-200 hover:border-sky-500 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                required
                              />
                            </div>
                        </div>

                      <div>
                        <label className="text-base font-medium text-white mt-2 block">{t('email')}</label>
                        <label className="text-base font-normal text-white">{t('email-tag')}</label>
                          <div className="mt-2.5 relative">
                            <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t('placeholder-email')}
                            className="block w-full px-4 py-4 text-white placeholder-gray-100 transition-all duration-200 bg-slate-900 border border-gray-200 hover:border-sky-500 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                            required
                            />
                          </div>
                      </div>

                      <div>
                        <label className="text-base font-medium text-white mt-2 block">{t('phone')}</label>
                        <label className="text-base font-normal text-white">{t('phone-tag')}</label>
                          <div className="mt-2.5 relative">
                            <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t('placeholder-phone')}
                            className="block w-full px-4 py-4 text-white placeholder-gray-100 transition-all duration-200 bg-slate-900 border border-gray-200 hover:border-sky-500 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                            />
                          </div>
                        </div>

                      <div>
                        <label className="text-base font-medium text-white mt-2 block">{t('company')}</label>
                        <label className="text-base font-normal text-white">{t('company-tag')}</label>
                          <div className="mt-2.5 relative">
                            <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder={t('placeholder-company')}
                            className="block w-full px-4 py-4 text-white placeholder-gray-100 transition-all duration-200 bg-slate-900 border border-gray-200 hover:border-sky-500 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                            />
                          </div>
                        </div>

                      <div className="sm:col-span-2">
                        <label className="text-base font-medium text-white"> {t('message')} </label>
                          <div className="mt-2.5 relative">
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="" required className="block w-full px-4 py-4 text-white placeholder-gray-100 transition-all duration-200 bg-slate-900 border border-gray-200 hover:border-sky-500 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"></textarea>
                          </div>
                        </div>

                      <div className="sm:col-span-2">
                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700 gap-1 cursor-pointer tracking-widest hover:gap-2 hover:translate-x-3">
                          {t('button')}
                          <SendHorizonal />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
     );
}
 
export default Contact;