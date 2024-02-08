import React from "react";
import { RiStarSFill } from "react-icons/ri";

const ServicesDiagram = () => {
    return (
        <div className="py-16 px-5 lg:px-[8%] bg-slate-100 drop-shadow-lg">
            <div className="md:grid md:grid-cols-5 xl:mx-[10%] text-white">
                <div className="md:col-span-2 rounded-xl p-10 my-5 md:my-0 bg-custom-navy drop-shadow-xl">
                    <h2 className="text-2xl text-center pb-4">Quotes and Drawings</h2>
                    <p className="py-2">
                        Our team provides detailed quotes and drawings based on yard visits
                        or information provided, ensuring you have a clear understanding of
                        the work to be performed and the costs involved.
                    </p>
                    <a href="/contact#form" className="flex w-full">
                        <button className="animate-bounce uppercase py-2 px-6 mt-4 mx-auto ease-in-out duration-300">
                            get a quote
                        </button>
                    </a>
                </div>
                <div className="relative hidden md:block">
                    <span className="absolute top-[50%] left-[50%] h-[50%] w-[1px] border-l-[1px] border-zinc-600"></span>
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full border border-zinc-600 bg-white h-[30px] w-[30px]"></div>
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-zinc-600 h-[15px] w-[15px]">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-600 opacity-75"></span>
                    </div>
                </div>
                <div className="col-span-2 hidden md:block"></div>
                <div className="col-span-2 hidden md:block"></div>
                <div className="relative hidden md:block">
                    <span className="absolute top-0 left-[50%] h-[100%] w-[1px] border-l-[1px] border-zinc-600"></span>
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full border border-zinc-600 bg-white h-[30px] w-[30px]"></div>
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-zinc-600 h-[15px] w-[15px]">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-600 opacity-75"></span>
                    </div>
                </div>
                <div className="md:col-span-2 rounded-xl p-10 my-5 md:my-0 bg-custom-navy drop-shadow-xl">
                    <h2 className="text-2xl text-center pb-4">Shot Blasting</h2>
                    <ul className="list-disc">
                        <li className="py-2">
                            We use the latest shot blasting techniques to prepare surfaces for
                            painting and coating, ensuring maximum adhesion and longevity.
                        </li>
                        <li className="py-2">
                            We have SA 2.5' grit blasting cleaner on site
                        </li>
                        <li className="py-2">
                            Chemical cleaning for items that can't be blasted (perhaps
                            threaded pieces).
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-2 rounded-xl p-10 my-5 md:my-0 bg-custom-navy drop-shadow-xl">
                    <h2 className="text-2xl text-center pb-4">Paint Coatings</h2>
                    <ul className="list-disc">
                        <li className="py-2">
                            Our experienced team is trained in the application of a wide range
                            of paint coatings, including epoxy, polyurethane, non-slip,
                            subsea, topside, splash zone, and anti-fouling. We use only the
                            finest products from leading manufacturers to ensure maximum
                            protection and performance.
                        </li>
                        <li className="py-2">
                            Our range of paint coatings includes: Epoxy, Polyurethane,
                            non-slip, Subsea, Top side, Splash Zone, and Anti-fouling.
                        </li>
                        <li className="py-2">
                            We use whatever specific protective paint that is required
                        </li>
                    </ul>
                </div>
                <div className="relative hidden md:block">
                    <span className="absolute top-0 left-[50%] h-[100%] w-[1px] border-l-[1px] border-zinc-600"></span>
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full border border-zinc-600 bg-white h-[30px] w-[30px]"></div>
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-zinc-600 h-[15px] w-[15px]">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-600 opacity-75"></span>
                    </div>
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-2 hidden md:block"></div>
                <div className="relative hidden md:block">
                    <span className="absolute top-0 left-[50%] h-[50%] w-[1px] border-l-[1px] border-zinc-600"></span>
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full border border-zinc-600 bg-white h-[30px] w-[30px]"></div>
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-zinc-600 h-[15px] w-[15px]">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-600 opacity-75"></span>
                    </div>
                </div>
                <div className="md:col-span-2 rounded-xl p-10 my-5 md:my-0 bg-custom-navy drop-shadow-xl">
                    <h2 className="text-2xl text-center pb-4">Customised Solution</h2>
                    <div className="flex py-2 w-full justify-center text-yellow-600 ">
                        <RiStarSFill size={30} />
                        <RiStarSFill size={30} />
                        <RiStarSFill size={30} />
                        <RiStarSFill size={30} />
                        <RiStarSFill size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDiagram;
