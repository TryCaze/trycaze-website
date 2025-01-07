import { FileStack, MessageCircle, Palette, Presentation } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

const Test = () => {

  const t = useTranslations('Process');

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
        <section className="mt-16 flex justify-center flex-col mx-auto mb-10 py-12 sm:py-16 lg:py-24 opacity-0 transform translate-y-10 transition duration-700" id="timeline" ref={sectionRef}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-10 leading-tight text-white sm:text-4xl lg:text-5xl">{t('title')}</h2>
        </div>
        <div className="mx-auto w-full max-w-screen-xl px-6 lg:px-20"><div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white dark:bg-puple-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500">{t('step-1')}</time>
              <div className="flex items-center gap-2">
                <MessageCircle className="text-white" />
                <h3 className="text-lg font-semibold text-white">{t('s1-title')}</h3>
              </div>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">{t('s1-description')}</p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500">{t('step-2')}</time>
              <div className="flex items-center gap-2">
                <Palette className="text-white" />
                <h3 className="text-lg font-semibold text-white">{t('s2-title')}</h3>
              </div>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">{t('s2-description')}</p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500">{t('step-3')}</time>
              <div className="flex items-center gap-2">
                <Presentation className="text-white" />
                <h3 className="text-lg font-semibold text-white">{t('s3-title')}</h3>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-white">{t('s3-description')}</p>
            </li>
            <li className="ms-4 mb-10">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500">{t('step-4')}</time>
              <div className="flex items-center gap-2">
                <FileStack className="text-white" />
                <h3 className="text-lg font-semibold text-white">{t('s4-title')}</h3>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-white">{t('s4-description')}</p>
            </li>
          </ol>
        </div>
      </div>
      </section>
     );
}
 
export default Test;