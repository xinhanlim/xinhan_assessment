'use client'

import Image from "next/image"
import Link from "next/link"
import ClassLabels from "./ClassLabels"

export default function Hero() {
    return (
        <div id="hero" className="flex justify-center px-[3%]">
            <div className="flex flex-col sm:flex-row w-[1530px] h-svh flex py-[124px] justify-between overflow-hidden ">
                <div className="relative w-[800px] h-full">
                    <Image src="/images/hand.png" alt="image of product" fill className="object-cover" style={{ objectPosition: "-100px -2px" }} />
                </div>
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col md:flex-col tracking-tighter leading-none gap-4 max-w-[700px]">
                        <div className="flex flex-col md:flex-col tracking-tighter leading-none gap-4 max-w-[700px]">
                            <h2 className="text-[32px] md:text-[64px] tracking-tighter leading-none uppercase">
                                COPY TRADING WITH BACKWELL INVEST
                            </h2>
                        </div>
                        <h2 className="text-[32px] md:text-[64px] tracking-tighter leading-none uppercase">
                            Choose & TradeReady-To-Go Strategies
                        </h2>
                        <p className="sm:text-[18px]">Browse and copy hundreds of investment strategies developed by master traders! Whether you are a pro or beginner, you can now trade quicker and more confidently.</p>
                        <div className="flex flex-row gap-8">
                            <ClassLabels name="Forex" color="#fefefe" />
                            <ClassLabels name="Precious Metal" color="#fefefe" />
                            <ClassLabels name="Oil" color="#fefefe" />
                            <ClassLabels name="Indices" color="#fefefe" />
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}