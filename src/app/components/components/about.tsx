import { ArrowBigUpDash, BadgeCheck, CalendarDays, Code2, ThumbsUp } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const About = () => {

    const t = useTranslations('HomePage');

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Intersection Observer to trigger counting
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Start counting and reveal section when in view
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current; // Save ref to a local variable to avoid issues with cleanup

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef); // Use local variable in cleanup
            }
        };
    }, []);

    // Counter function
const useCounter = (target: number, duration: number, trigger: boolean) => { // Use "trigger" as a parameter
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (trigger) { // Start counting only when triggered
            let start = 0;
            const increment = target / (duration / 10);

            const counter = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setCount(target); // Set final count
                    clearInterval(counter); // Stop counter
                } else {
                    setCount(Math.ceil(start)); // Update count
                }
            }, 10);

            return () => clearInterval(counter); // Cleanup interval
        }
    }, [target, duration, trigger]); // Use "trigger" instead of "isVisible"

    return count;
};

    // Using counters for each stat
const yearsInBusiness = useCounter(2, 1000, isVisible);
const deliveredWebsites = useCounter(10, 1000, isVisible);
const fasterWebsites = useCounter(100, 1000, isVisible);
const customerSatisfaction = useCounter(100, 1000, isVisible);


    return (
        <>
            <section
            id="about"
             className={`${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transform transition duration-700 py-10 sm:py-16 lg:py-24`}            
            >
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                        <div className="relative mb-12">
                        <Image
                        src="/images/website.png" // The image path starts with "/" as it's in the public directory
                        alt="Website Image"
                        width={500} // specify width in pixels or as needed
                        height={300} // specify height in pixels or as needed
                        />
                            <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                                <div className="overflow-hidden bg-slate-900 rounded">
                                    <div className="px-10 py-6">
                                        <div className="flex items-center">
                                            <p className="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">100%</p>
                                            <p className="pl-6 text-sm font-medium text-white sm:text-lg">{t('title')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full">
                                <BadgeCheck className="text-blue-500" size={46} />
                            </div>
                            <h2 className="mt-10 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Our Studio</h2>
                            <p className="mt-6 text-lg leading-relaxed text-white">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conse duis enim velit mollit. Exercitation veniam.
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conse duis enim velit mollit. Exercitation veniam.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                ref={sectionRef}
                className={`${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } transform transition duration-700`}
            >
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h4 className="text-4xl font-bold text-white">So far we have</h4>
                    </div>

                    <div className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
                        {/* Card 1 */}
                        <div className="overflow-hidden bg-slate-900 border border-slate-700 rounded-lg">
                            <div className="px-4 py-6">
                                <div className="flex items-start">
                                    <CalendarDays className="text-blue-500" size={46} />
                                    <div className="ml-4">
                                        <h4 className="text-4xl font-bold text-white">{yearsInBusiness}+</h4>
                                        <p className="mt-1.5 text-lg font-medium leading-tight text-white">Years in business</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="overflow-hidden bg-slate-900 border border-slate-700 rounded-lg">
                            <div className="px-4 py-6">
                                <div className="flex items-start">
                                    <Code2 className="text-blue-500" size={46} />
                                    <div className="ml-4">
                                        <h4 className="text-4xl font-bold text-white">{deliveredWebsites}+</h4>
                                        <p className="mt-1.5 text-lg font-medium leading-tight text-white">Delivered websites</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="overflow-hidden bg-slate-900 border border-slate-700 rounded-lg">
                            <div className="px-4 py-6">
                                <div className="flex items-start">
                                    <ArrowBigUpDash className="text-blue-500" size={46} />
                                    <div className="ml-4">
                                        <h4 className="text-4xl font-bold text-white">{fasterWebsites}x</h4>
                                        <p className="mt-1.5 text-lg font-medium leading-tight text-white">Faster websites</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="overflow-hidden bg-slate-900 border border-slate-700 rounded-lg">
                            <div className="px-4 py-6">
                                <div className="flex items-start">
                                    <ThumbsUp className="text-blue-500" size={46} />
                                    <div className="ml-4">
                                        <h4 className="text-4xl font-bold text-white">{customerSatisfaction}%</h4>
                                        <p className="mt-1.5 text-lg font-medium leading-tight text-white">Customer satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;