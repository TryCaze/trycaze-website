"use client"

import { FloatingDockDemo } from "@/app/components/ui/footer";
import { NavbarDemo } from "@/app/components/ui/nav";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
        <>
        <NavbarDemo />
        
        <section ref={sectionRef} className="py-10 sm:py-16 lg:py-24 opacity-0 transform translate-y-10 transition duration-700">
    <div className="container px-6 py-8 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
            <div>
                <h2 className="text-2xl font-bold text-white lg:text-3xl">Simple, transparent pricing</h2>
                <p className="mt-4 text-white">No Contracts. No surorise fees.</p>
            </div>

            <div className="overflow-hidden p-0.5 mt-6">
            <a href="/contact" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700" role="button">
                    Get a quota
                    <ArrowRight className="text-white" />
                </a>
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

<section className="py-10 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Pricing & Plans</h2>
            <p className="mt-4 text-lg leading-relaxed text-white">Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>

        <div className="hidden mt-16 lg:block">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="py-8 pr-4"></th>

                        <th className="px-4 py-8 text-center">
                            <span className="text-base font-medium text-blue-600"> Free </span>
                            <p className="mt-6 text-4xl font-bold text-white">$0</p>
                            <p className="mt-2 text-base font-normal text-white">Per month</p>
                        </th>

                        <th className="px-4 py-8 text-center">
                            <span className="text-base font-medium text-blue-600"> Team </span>
                            <p className="mt-6 text-4xl font-bold text-white">$99</p>
                            <p className="mt-2 text-base font-normal text-white">Per month</p>
                        </th>

                        <th className="px-4 py-8 text-center rounded-t-xl">
                            <span className="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-full"> Popular </span>
                            <p className="mt-6 text-4xl font-bold text-white">$150</p>
                            <p className="mt-2 text-base font-normal text-gray-200">Per month</p>
                        </th>

                        <th className="px-4 py-8 text-center">
                            <span className="text-base font-medium text-blue-600"> Enterprise </span>
                            <p className="mt-6 text-4xl font-bold text-white">$490</p>
                            <p className="mt-2 text-base font-normal text-white">Per month</p>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="py-4 pr-4 font-medium text-white border-b border-gray-200">Website number</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">01</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">10</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">50</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">Unlimited</td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium text-white border-b border-gray-200">Server storage</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">100 GB</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">500 GB</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">1 TB</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">Unlimited</td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium text-white border-b border-gray-200">Database</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">15</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">Unlimited</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">Unlimited</td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium text-white border-b border-gray-200">Unmetered Bandwidth</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium text-white border-b border-gray-200">SSD Disk</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium text-white border-b border-gray-200">VCPUS Fontworld</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium text-white border-b border-gray-200">WordPress install</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td className="py-4 pr-4 font-medium text-white border-b border-gray-200">Server speed</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">-</td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </td>

                        <td className="px-4 py-4 text-center text-white border-b border-gray-200">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </td>
                    </tr>

                    <tr>
                        <td className="py-6 pr-4"></td>

                        <td className="px-4 py-6 text-center">
                            <a href="#" title="" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                Get Started
                                <ArrowRight />
                            </a>
                        </td>

                        <td className="px-4 py-6 text-center">
                            <a href="#" title="" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                Get Started
                                <ArrowRight />
                            </a>
                        </td>

                        <td className="px-4 py-6 text-center">
                            <a href="#" title="" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                Get Started
                                <ArrowRight />
                            </a>
                        </td>

                        <td className="px-4 py-6 text-center">
                            <a href="#" title="" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                                Get Started
                                <ArrowRight />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


    <div className="block mt-12 border-t text-white border-b border-gray-200 divide-y divide-gray-200 lg:hidden">
        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">
                <span className="text-sm font-medium text-blue-600"> Free </span>
                <p className="mt-2 text-xl font-bold">$0</p>
                <span className="mt-1 text-sm font-normal text-white"> Per month </span>
            </div>

            <div className="px-2 py-2">
                <span className="text-sm font-medium text-blue-600"> Team </span>
                <p className="mt-2 text-xl font-bold">$99</p>
                <span className="mt-1 text-sm font-normal text-white"> Per month </span>
            </div>

            <div className="px-2 py-2">
                <span className="text-sm font-medium text-blue-600"> Popular </span>
                <p className="mt-2 text-xl font-bold">$150</p>
                <span className="mt-1 text-sm font-normal text-white"> Per month </span>
            </div>

            <div className="px-2 py-2">
                <span className="text-sm font-medium text-blue-600"> Enterprise </span>
                <p className="mt-2 text-xl font-bold">$490</p>
                <span className="mt-1 text-sm font-normal text-white"> Per month </span>
            </div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Website number</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">01</div>

            <div className="px-2 py-2">10</div>

            <div className="px-2 py-2">100</div>

            <div className="px-2 py-2">Unlimited</div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Server storage</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">100 GB</div>

            <div className="px-2 py-2">500 GB</div>

            <div className="px-2 py-2">1 TB</div>

            <div className="px-2 py-2">Unlimited</div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Database</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">15</div>

            <div className="px-2 py-2">Unlimited</div>

            <div className="px-2 py-2">Unlimited</div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">Unmetered bandwidth</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">SSD Disk</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">VCPUS Fontworld</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>

        <div className="px-2 py-4 sm:px-4">
            <p className="font-semibold">WordPress install</p>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-2 py-2">-</div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>

            <div className="px-2 py-2">
                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>

        <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div className="px-1 py-2 sm:px-4">
                <span className="text-sm font-medium text-blue-600"> Free </span>
                <p className="mt-2 text-xl font-bold">$0</p>
                <span className="mt-1 text-sm font-normal text-white"> Per month </span>
                <a href="#" title="" className="flex items-center justify-center w-full px-1 py-2 mt-5 text-xs text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started </a>
            </div>

            <div className="px-1 py-2 sm:px-4">
                <span className="text-sm font-medium text-blue-600"> Team </span>
                <p className="mt-2 text-xl font-bold">$99</p>
                <span className="mt-1 text-sm font-normal text-white"> Per month </span>
                <a href="#" title="" className="flex items-center justify-center w-full px-1 py-2 mt-5 text-xs text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started </a>
            </div>

            <div className="px-1 py-2 sm:px-4">
                <span className="text-sm font-medium text-blue-600"> Popular </span>
                <p className="mt-2 text-xl font-bold">$150</p>
                <span className="mt-1 text-sm font-normal text-white"> Per month </span>
                <a href="#" title="" className="flex items-center justify-center w-full px-1 py-2 mt-5 text-xs text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started </a>
            </div>

            <div className="px-1 pt-2 pb-4 sm:px-4">
                <span className="text-sm font-medium text-blue-600"> Enterprise </span>
                <p className="mt-2 text-xl font-bold">$490</p>
                <span className="mt-1 text-sm font-normal text-white"> Per month </span>
                <a href="#" title="" className="flex items-center justify-center w-full px-1 py-2 mt-5 text-xs text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" role="button"> Get Started </a>
            </div>
        </div>
    </div>
</section>


<FloatingDockDemo />
</>
     );
}
 
export default Pricing;