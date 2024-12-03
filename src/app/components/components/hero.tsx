import { FlipWords } from "@/components/ui/flip-words";
import { ArrowRightIcon, CalendarDays, Code2, Laptop2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const Hero = () => {

  const t = useTranslations('HomePage');
  
  const words = [
    "better", "cute", "beautiful", "modern"
  ];

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
    <>
<div ref={sectionRef} className="opacity-0 transform translate-y-10 transition duration-700">
    <section className="relative lg:min-h-[750px] pt-24 sm:pt-32">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-xl mx-auto text-center">
                <h1 className="text-4xl font-bold sm:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                    {t('title')}
                    </span>
                </h1>
              <div className="mt-5 text-2xl text-white sm:text-x">
                <div className="text-white">
                  {t('about')}
                  <FlipWords className="text-white" words={words} /> <br />
                  {t('about1')}
                  </div>
                </div>
                <Link href="/contact" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700" role="button">
                    {t('quota')}
                    <ArrowRightIcon className="text-white" />
                </Link>

                <div className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
                    <div className="flex items-center">
                    <Code2 className="text-white" size={64} />
                        <p className="ml-3 text-sm text-white">{t('subsection1')}</p>
                    </div>

                    <div className="flex items-center">
                    <CalendarDays className="text-white" size={64} />
                        <p className="ml-3 text-sm text-white">{t('subsection2')}</p>
                    </div>
              <div className="flex items-center">
            <Laptop2 className="text-white" size={64} />
          <p className="ml-3 text-sm text-white">{t('subsection3')}</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</>
   );
}
 
export default Hero;