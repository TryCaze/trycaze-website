import { Figma } from "lucide-react";
import { useEffect, useRef } from "react";
import { BsGoogle } from "react-icons/bs";
import { CgVercel } from "react-icons/cg";
import { DiMongodb } from "react-icons/di";
import { RiAngularjsLine, RiFirebaseLine, RiNextjsLine, RiReactjsLine, RiSupabaseLine, RiTailwindCssLine } from "react-icons/ri";
import { SiAdobeillustrator, SiNamecheap } from "react-icons/si";


const Technology = () => {

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
        <section id="technology" ref={sectionRef} className="py-10 sm:py-16 lg:py-24 opacity-0 transform translate-y-10 transition duration-700">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
            <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                    Our choice<br />
                    of tools<br />
                </h2>
                <p className="mt-6 text-base text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>

            <div className="lg:col-span-3 xl:col-span-4">
                <div className="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                       <RiReactjsLine className="text-white" size={64} />
                    </div>

                    <div className="w-16 h-16 flex items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <RiNextjsLine className="text-white" size={64} />
                    </div>

                    <div className="w-16 h-16 flex items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                       <RiTailwindCssLine className="text-white" size={64} />
                    </div>

                    <div className="w-16 h-16 flex items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <DiMongodb className="text-white" size={64} />
                    </div>

                    <div className="hidden lg:block w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <RiSupabaseLine className="text-white" size={64} />
                    </div>

                    <div className="hidden lg:block w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                       <Figma className="text-white" size={64} />
                    </div>

                    <div className="hidden lg:flex w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <SiAdobeillustrator className="text-white" size={32} />
                    </div>

                    <div className="hidden lg:flex w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <BsGoogle className="text-white" size={32} />
                    </div>

                    <div className="hidden lg:block w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <SiNamecheap className="text-white" size={64} />
                    </div>

                    <div className="hidden lg:block w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <RiFirebaseLine className="text-white" size={64} />
                    </div>

                    <div className="hidden lg:block w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <CgVercel className="text-white" size={64} />
                    </div>

                    <div className="hidden lg:block w-16 h-16 items-center justify-center rounded-full border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300 overflow-hidden">
                        <RiAngularjsLine className="text-white" size={64} />
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