'use client'

import Image from "next/image"
import Link from "next/link"
import ClassLabels from "./ClassLabels"
import RightArrow from "../IconSVG/Arrow"

export default function Hero() {
    return (
        <section id="hero" className="relative flex justify-center px-[5%] w-full h-full">
            <div className=" flex flex-col xl:flex-row w-full xl:w-[1520px] h-[900px] lg:h-[1000px] flex py-[60px] xl:pt-[150px] justify-between ">
                <div className="relative flex flex-col md:flex-col tracking-tighter leading-none gap-4 max-w-[700px]">
                    <h1 className="z-10 text-[32px] sm:text-[50px] md:text-[64px] tracking-tighter leading-none uppercase">
                        COPY TRADING WITH BACKWELL INVEST
                    </h1>
                </div>
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src="/images/hand.png"
                        alt="image of product"
                        loading="lazy"
                        fill
                        className="object-contain object-top scale-85 overflow-hidden pointer-events-none"
                        style={{ objectPosition: "40% 20%" }}
                    />
                </div>
                <div className="flex flex-col gap-20 justify-end">
                    <div className="z-10 flex flex-col xl:flex-col tracking-tighter leading-none gap-4 2xl:max-w-[700px] ">
                        <h2 className=" text-[32px] sm:text-[50px] md:text-[64px] tracking-tighter leading-none uppercase flex flex-col">
                            Choose & Trade
                            <span className="z-20 relative inline-block gap-2 w-fit ">
                                Ready-To-Go Strategies
                                <Image
                                    src="/images/regular.png"
                                    alt="photo of regular"
                                    loading="lazy"
                                    width={80}
                                    height={80}
                                    className="z-10 absolute -right-0 -top-8 sm:-right-20 sm:top-7 -translate-y-1/2 rotate-[-25deg] pointer-events-none"
                                />
                            </span>
                        </h2>
                        <div className="flex flex-col gap-8">
                            <p className="sm:text-[18px]">Browse and copy hundreds of investment strategies developed by master traders! Whether you are a pro or beginner, you can now trade quicker and more confidently.</p>
                            <div className="flex flex-row flex-wrap gap-2">
                                <ClassLabels name="Forex" color="#fefefe" />
                                <ClassLabels name="Precious Metal" color="#fefefe" />
                                <ClassLabels name="Oil" color="#fefefe" />
                                <ClassLabels name="Indices" color="#fefefe" />
                            </div>
                            <div className="flex flex-row gap-2 ">
                                <Link href="/" className="cta-register group flex flex-row items-center gap-2 w-fit">
                                    REGISTER
                                    <RightArrow />
                                </Link>
                                <Link href="https://apps.apple.com/au/app/blackwell-invest/id1666036351" target="_blank" rel="noopener noreferrer" className="relative cta-register group flex flex-row items-center gap-2 w-fit">
                                    <Image src="/images/appstore/app-store.jpg" alt="image of apple" width={100} height={100} className="object-cover"/>
                                </Link>
                                <Link href="https://play.google.com/store/apps/details?id=com.BlackwellGlobalInvestmentsUKLimited.pelican&hl=en_SG" target="_blank" rel="noopener noreferrer" className="relative cta-register group flex flex-row items-center gap-2 w-fit">
                                     <Image src="/images/appstore/google-play.jpg" alt="image of apple" width={100} height={100} className="object-cover"/>
                                </Link>
                            </div>

                            <p className="information">When you invest, your capital is at risk. Be prudent.</p>
                        </div>


                    </div>
                </div>


            </div>
        </section>
    )
}