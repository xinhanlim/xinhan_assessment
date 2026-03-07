'use client'

import Image from "next/image"
import Link from "next/link"
import ClassLabels from "./ClassLabels"

export default function Hero() {
    return (
        <div className="relative flex justify-center px-[5%] w-full h-full">
            <div className=" flex flex-col sm:flex-row w-full xl:w-[1530px] h-[80vh] sm:h-screen flex py-[60px] md:py-[150px] justify-between ">
                <div className="flex flex-col md:flex-col tracking-tighter leading-none gap-4 max-w-[700px]">
                    <h2 className="z-10 text-[32px] md:text-[64px] tracking-tighter leading-none uppercase">
                        COPY TRADING WITH BACKWELL INVEST
                    </h2>
                </div>
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src="/images/hand.png"
                        alt="image of product"
                        fill
                        className="object-contain object-top scale-85 overflow-hidden pointer-events-none"
                        style={{ objectPosition: "40% 40%" }}
                    />
                </div>

                <div className="flex flex-col gap-20 justify-end">
                    <div className="z-10 flex flex-col md:flex-col tracking-tighter leading-none gap-4 max-w-[700px]">
                        <h2 className=" text-[32px] md:text-[64px] tracking-tighter leading-none uppercase ">
                            Choose & TradeReady-To-Go Strategies
                        </h2>
                        <div className="flex flex-col gap-8">
                            <p className="sm:text-[18px]">Browse and copy hundreds of investment strategies developed by master traders! Whether you are a pro or beginner, you can now trade quicker and more confidently.</p>
                            <div className="flex flex-row flex-wrap gap-2">
                                <ClassLabels name="Forex" color="#fefefe" />
                                <ClassLabels name="Precious Metal" color="#fefefe" />
                                <ClassLabels name="Oil" color="#fefefe" />
                                <ClassLabels name="Indices" color="#fefefe" />
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}