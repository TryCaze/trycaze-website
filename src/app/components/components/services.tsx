import { Brush, Laptop2, Server, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

const Services = () => {

    const t = useTranslations('Services');

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
    <section id="services"  ref={sectionRef} className="py-10 sm:py-16 lg:py-24 opacity-0 transform translate-y-10 transition duration-700">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{t('title')}</h2>
        </div>

        <div className="px-5 py-8 mt-12 lg:mt-20 lg:p-16">
            <div className="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
            <div className="overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <div className="p-8">
                    <div className="flex items-center">
                       <Laptop2 className="text-white text-4xl" />
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-white">{t('web-dev')}</p>
                            <p className="mt-px text-sm text-white">{t('web-dev-subtitle')}</p>
                        </div>
                    </div>
                    <p className="text-base leading-relaxed text-white mt-7">{t('web-dev-description')}</p>
                </div>
            </div>
            <div className="overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <div className="p-8">
                    <div className="flex items-center">
                       <Brush className="text-white text-4xl" />
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-white">{t('interface-design')}</p>
                            <p className="mt-px text-sm text-white">{t('interface-design-subtitle')}</p>
                        </div>
                    </div>
                    <p className="text-base leading-relaxed text-white mt-7">{t('interface-design-description')}</p>
                </div>
            </div>
            <div className="overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <div className="p-8">
                    <div className="flex items-center">
                       <TrendingUp className="text-white text-4xl" />
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-white">{t('website-maintenance')}</p>
                            <p className="mt-px text-sm text-white">{t('website-maintenance-subtitle')}</p>
                        </div>
                    </div>
                    <p className="text-base leading-relaxed text-white mt-7">{t('website-maintenance-description')}</p>
                </div>
            </div>
            <div className="overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <div className="p-8">
                    <div className="flex items-center">
                       <Server className="text-white text-4xl" />
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-white">{t('hosting')}</p>
                            <p className="mt-px text-sm text-white">{t('hosting-subtitle')}</p>
                        </div>
                    </div>
                    <p className="text-base leading-relaxed text-white mt-7">{t('hosting-description')}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
</section>

  );
}
 
export default Services;