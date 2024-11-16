import { BookOpenCheck, FileSearch, Library, PersonStanding, Phone, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";

const Importance = () => {

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
    <section ref={sectionRef} className="opacity-0 transform translate-y-10 transition duration-700">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Why is a website important to us?</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-200">A key to a successful business is a professional website that impresses every customer.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <div className="p-8">
                    <div className="flex items-center">
                       <ShieldCheck className="text-white text-4xl" />
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-white">Security</p>
                            <p className="mt-px text-sm text-white">Lore Ipsum</p>
                        </div>
                    </div>
                    <p className="text-base leading-relaxed text-white mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>

            <div className="overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <div className="p-8">
                    <div className="flex items-center">
                        <BookOpenCheck className="text-white text-4xl" />
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-white">Readability</p>
                            <p className="mt-px text-sm text-white">Lorem Ipsum</p>
                        </div>
                    </div>
                    <p className="text-base leading-relaxed text-white mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>

            <div className="overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <div className="p-8">
                    <div className="flex items-center">
                        <PersonStanding className="text-white text-4xl" />
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-white">Accessibility</p>
                            <p className="mt-px text-sm text-white">Lorem Ipsum</p>
                        </div>
                    </div>
                    <p className="text-base leading-relaxed text-white mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>

            <div className="overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <div className="p-8">
                    <div className="flex items-center">
                        <Library className="text-white text-4xl" />
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-white">Information</p>
                            <p className="mt-px text-sm text-white">Lorem Ipsum</p>
                        </div>
                    </div>
                    <p className="text-base leading-relaxed text-white mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>

            <div className="overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <div className="p-8">
                    <div className="flex items-center">
                        <Phone className="text-white text-4xl" />
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-white">Contact</p>
                            <p className="mt-px text-sm text-white">Lorem Ipsum</p>
                        </div>
                    </div>
                    <p className="text-base leading-relaxed text-white mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>

            <div className="overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <div className="p-8">
                    <div className="flex items-center">
                        <FileSearch className="text-white text-4lg" />
                        <div className="ml-5 mr-auto">
                            <p className="text-xl font-semibold text-white">Search Optimization</p>
                            <p className="mt-px text-sm text-white">Lore Ipsum</p>
                        </div>
                    </div>
                    <p className="text-base leading-relaxed text-white mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>
        </div>
    </div>
</section>

   );
}
 
export default Importance;