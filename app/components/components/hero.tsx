import { FlipWords } from "@/components/ui/flip-words";
import { ArrowRightIcon, CalendarDays, Code2, Laptop2 } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  
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
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);

  return ( 
    <>
<div ref={sectionRef} className="opacity-0 transform translate-y-10 transition duration-700">
    <section className="relative lg:min-h-[750px] pt-24 sm:pt-32">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-xl mx-auto text-center">
                <h1 className="text-4xl font-bold sm:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                      The ultimate development studio
                    </span>
                </h1>
              <div className="mt-5 text-2xl text-white sm:text-x">
                <div className="text-white">
                  We build
                  <FlipWords className="text-white" words={words} /> <br />
                  products with the latest technologies and frameworks.
                  </div>
                </div>
                <a href="/contact" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700" role="button">
                    Get a quota
                    <ArrowRightIcon className="text-white" />
                </a>

                <div className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
                    <div className="flex items-center">
                    <Code2 className="text-white" size={64} />
                        <p className="ml-3 text-sm text-white">Over 1M lines of code written</p>
                    </div>

                    <div className="flex items-center">
                    <CalendarDays className="text-white" size={64} />
                        <p className="ml-3 text-sm text-white">2 years of creating websites</p>
                    </div>
              <div className="flex items-center">
            <Laptop2 className="text-white" size={64} />
          <p className="ml-3 text-sm text-white">10+ successfully built websites</p>
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