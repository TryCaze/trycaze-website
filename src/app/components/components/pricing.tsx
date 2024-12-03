import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Pricing = () => {

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
                <h2 className="text-2xl font-bold text-white lg:text-3xl">Simple, transparent pricing</h2>
                <p className="mt-4 text-white">No Contracts. No surorise fees.</p>
            </div>

            <div className="overflow-hidden p-0.5 mt-6">
            <Link href="/contact" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700" role="button" />
                    Get a quota
                    <ArrowRight className="text-white" />
            </div>
        </div>

        <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="px-6 py-4 overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <p className="text-lg font-medium text-white">Intro</p>

                <h4 className="mt-2 text-3xl font-semibold text-white">$19 <span className="text-base font-normal text-white">/ Month</span></h4>
                
                <p className="mt-4 text-white">For most businesses that want to optimaize web queries.</p>

                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">All limited links</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Own analytics platform</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Chat support</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Optimize hashtags</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Unlimited users</span>
                    </div>
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Choose plan
                </button>
            </div>

            <div className="px-6 py-4 overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <p className="text-lg font-medium text-white">Base</p>
                
                <h4 className="mt-2 text-3xl font-semibold text-white">$39 <span className="text-base font-normal text-white">/ Month</span></h4>
                
                <p className="mt-4 text-white">For most businesses that want to optimaize web queries.</p>

                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">All limited links</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Own analytics platform</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Chat support</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Optimize hashtags</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Unlimited users</span>
                    </div>
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Choose plan
                </button>
            </div>

            <div className="px-6 py-4 overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <p className="text-lg font-medium text-gray-100">Popular</p>
                
                <h4 className="mt-2 text-3xl font-semibold text-gray-100">$99 <span className="text-base font-normal text-white">/ Month</span></h4>
                
                <p className="mt-4 text-white">For most businesses that want to optimaize web queries.</p>

                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">All limited links</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Own analytics platform</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Chat support</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Optimize hashtags</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Unlimited users</span>
                    </div>
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Choose plan
                </button>
            </div>

            <div className="px-6 py-4 overflow-hidden bg-slate-900 rounded shadow border border-transparent hover:border-sky-500 hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition transform duration-300">
                <p className="text-lg font-medium text-white">Exterprise</p>
                
                <h4 className="mt-2 text-3xl font-semibold text-white">$199 <span className="text-base font-normal text-white">/ Month</span></h4>
                
                <p className="mt-4 text-white">For most businesses that want to optimaize web queries.</p>

                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">All limited links</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Own analytics platform</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Chat support</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Optimize hashtags</span>
                    </div>

                    <div className="flex items-center">
                        <CheckCircle2 className="text-blue-500 font-bold" />

                        <span className="mx-4 text-white">Unlimited users</span>
                    </div>
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Choose plan
                </button>
            </div>
        </div>
    </div>
</section>
     );
}
 
export default Pricing;