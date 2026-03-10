'use client'

import Image from "next/image"


export default function ChooseUs() {
    return (

        <div className="relative w-full h-screen px-[5%] flex justify-center">
            <Image src="/images/bg/bg-3.png" alt="background" fill className="z-0 absolute inset-0 w-full h-full object-cover object-top" />

            <div className="z-20 w-[1520px]">
                <div className="relative flex flex-col w-full h-fit justify-center pt-[90px] sm:pt-[170px] md:pt-[200px] lg:pt-[250px] ">
                    <h1 className="text-[32px] md:text-[64px] leading-none tracking-tighter">WHY CHOOSE US</h1>
                </div>
                <ul>
                    <li>
                        
                    </li>
                </ul>

            </div>
        </div>
    )
}