'use client'

import Image from "next/image"
import Link from "next/link"
import ClassLabels from "./ClassLabels"
import RightArrow from "../IconSVG/Arrow"

export default function Hero() {
    return (
        <section id="hero" className="relative flex justify-center px-[5%] w-full h-full">
            <div className=" flex flex-col sm:flex-row w-full xl:w-[1530px] h-[800px] sm:h-screen flex pt-[60px] md:pt-[150px] justify-between ">
                <div className="relative flex flex-col md:flex-col tracking-tighter leading-none gap-4 max-w-[700px]">
                    <h1 className="z-10 text-[32px] md:text-[64px] tracking-tighter leading-none uppercase">
                        COPY TRADING WITH BACKWELL INVEST
                    </h1>
                </div>
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src="/images/hand.png"
                        alt="image of product"
                        fill
                        className="object-contain object-top scale-85 overflow-hidden pointer-events-none"
                        style={{ objectPosition: "40% 20%" }}
                    />
                </div>

                <div className="flex flex-col gap-20 justify-end">
                    <div className="z-10 flex flex-col md:flex-col tracking-tighter leading-none gap-4 max-w-[700px]">

                        <h1 className=" text-[32px] md:text-[64px] tracking-tighter leading-none uppercase ">
                            Choose & Trade 
                            <span className="z-20 relative inline-block gap-2  ">
                                Ready-To-Go Strategies
                                <Image
                                    src="/images/regular.png"
                                    alt="photo of regular"
                                    width={80}
                                    height={80}
                                    className="z-10 absolute right-0 top-6 md:-right-20 md:top-10 -translate-y-1/2 rotate-[-25deg] pointer-events-none"
                                />
                            </span>
                        </h1>
                        <div className="flex flex-col gap-8">
                            <p className="sm:text-[18px]">Browse and copy hundreds of investment strategies developed by master traders! Whether you are a pro or beginner, you can now trade quicker and more confidently.</p>
                            <div className="flex flex-row flex-wrap gap-2">
                                <ClassLabels name="Forex" color="#fefefe" />
                                <ClassLabels name="Precious Metal" color="#fefefe" />
                                <ClassLabels name="Oil" color="#fefefe" />
                                <ClassLabels name="Indices" color="#fefefe" />
                            </div>
                            <Link href="/" className="cta-register group flex flex-row items-center gap-2 w-fit">
                                REGISTER
                                <RightArrow />
                            </Link>
                            <p className="information">When you invest, your capital is at risk. Be prudent.</p>
                        </div>


                    </div>
                </div>


            </div>
        </section>
    )
}