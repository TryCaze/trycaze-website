import { Link } from "@/src/i18n/routing";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

const Pricing = () => {

    const t = useTranslations('Pricing');

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
        <section ref={sectionRef} className="py-10 sm:py-16 lg:py-24 opacity-0 transform translate-y-10 transition duration-700">
    <div className="container px-6 py-8 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
            <div>
                <h2 className="text-2xl font-bold text-white lg:text-3xl">{t('title')}</h2>
                <p className="mt-4 text-white">{t('subtitle')}</p>
            </div>

            <div className="overflow-hidden p-0.5 mt-6">
                <Link 
                href="/pricing" 
                title="" 
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700" 
                role="button"
                >
                    <span>{t('button')}</span>
                    <ArrowRight className="ml-2 text-white" />
                </Link>
            </div>
        </div>


        <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="px-6 py-4 overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <p className="text-lg font-medium text-white">{t('Interface-design')}</p>

                <h4 className="mt-2 text-3xl font-semibold text-white">50€</h4>
                
                <p className="mt-4 text-white">{t('ID-description')}</p>

                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('ID-I')}</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('ID-II')}</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('ID-III')}</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('ID-IV')}</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('ID-V')}</span>
                    </div>
                </div>

            </div>

            <div className="px-6 py-4 overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <p className="text-lg font-medium text-white">{t('Hosting')}</p>
                
                <h4 className="mt-2 text-3xl font-semibold text-white">5€ <span className="text-base font-normal text-white">/ Month</span></h4>
                
                <p className="mt-4 text-white">{t('HO-description')}</p>

                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('HO-I')}</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('HO-II')}</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('HO-III')}</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('HO-IV')}</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('HO-V')}</span>
                    </div>
                </div>
            </div>

            <div className="px-6 py-4 overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <p className="text-lg font-medium text-gray-100">{t('Website-maintenance')}</p>
                
                <h4 className="mt-2 text-3xl font-semibold text-gray-100">30€ <span className="text-base font-normal text-white">/ Month</span></h4>
                
                <p className="mt-4 text-white">{t('WM-description')}</p>

                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('WM-I')}</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('WM-II')}</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('WM-III')}</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('WM-IV')}</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('WM-V')}</span>
                    </div>
                </div>
            </div>

            <div className="px-6 py-4 overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <p className="text-lg font-medium text-white">{t('Website-development')}</p>
                
                <h4 className="mt-2 text-3xl font-semibold text-white">100€</h4>
                
                <p className="mt-4 text-white">{t('WD-description')}</p>

                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('WD-I')}</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('WD-II')}</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('WD-III')}</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('WD-IV')}</span>
                    </div>

                    <div className="flex items-center my-20">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">{t('WD-V')}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
     );
}
 
export default Pricing;