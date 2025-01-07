import { Figma } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { CgVercel } from "react-icons/cg";
import { DiMongodb } from "react-icons/di";
import { FaWeebly } from "react-icons/fa";
import { RiAngularjsLine, RiFirebaseLine, RiNextjsLine, RiReactjsLine, RiSupabaseLine, RiTailwindCssLine } from "react-icons/ri";
import { SiHostinger, SiNamecheap } from "react-icons/si";

const Technology = () => {

    const t = useTranslations('Technology');

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
        <section id="technology" ref={sectionRef} className="py-10 sm:py-16 lg:py-24 opacity-0 transform translate-y-10 transition duration-700">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
            <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                    {t('title')}<br />
                    {t('title2')}<br />
                </h2>
                <p className="mt-6 text-base text-white">{t('description')}</p>
            </div>

            <div className="lg:col-span-3 xl:col-span-4">
                <div className="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <a href="https://react.dev/">
                            <RiReactjsLine className="text-white" size={64}/>
                        </a>
                    </div>

                        <div className="w-16 h-16 flex items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <a href="https://nextjs.org/">
                            <RiNextjsLine className="text-white" size={64}/>
                        </a>
                    </div>

                    <div className="w-16 h-16 flex items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                       <a href="https://tailwindcss.com/">
                            <RiTailwindCssLine className="text-white" size={64}/>
                       </a>
                    </div>

                    <div className="w-16 h-16 flex items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <a href="https://www.mongodb.com/">
                            <DiMongodb className="text-white" size={64}/>
                        </a>
                    </div>

                    <div className="hidden lg:block w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <a href="https://supabase.com/">
                            <RiSupabaseLine className="text-white" size={64}/>
                        </a>
                    </div>

                    <div className="hidden lg:block w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                       <a href="https://www.figma.com/">
                            <Figma className="text-white" size={64}/>
                       </a>
                    </div>

                    <div className="hidden lg:flex w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <a href="https://www.weebly.com">
                            <FaWeebly className="text-white" size={32} />
                        </a>
                    </div>

                    <div className="hidden lg:flex w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <a href="https://www.hostinger.com/">
                            <SiHostinger className="text-white" size={32} />
                        </a>
                    </div>

                    <div className="hidden lg:block w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <a href="https://www.namecheap.com/">
                            <SiNamecheap className="text-white" size={64}/>
                        </a>
                    </div>

                    <div className="hidden lg:block w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <a href="https://firebase.google.com/">
                            <RiFirebaseLine className="text-white" size={64}/>
                        </a>
                    </div>

                    <div className="hidden lg:block w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <a href="https://vercel.com/">
                            <CgVercel className="text-white" size={64}/>
                        </a>
                    </div>

                    <div className="hidden lg:block w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <a href="https://angular.dev/">
                            <RiAngularjsLine className="text-white" size={64}/>
                        </a>
                    </div>
                </div>
                

                <div className="flex items-center justify-start mt-10 space-x-3 lg:hidden">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                </div>
            </div>
        </div>
    </div>
</section>
     );
}
 
export default Technology;