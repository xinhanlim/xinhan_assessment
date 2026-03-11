'use client'

import Image from "next/image"
import Container from "./Container"
import { useState } from "react"


export default function ChooseUs() {

    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const chooseData = [
        {
            title: "Regulated",
            description: "The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance because your trust and peace of mind are everything."
        },
        {
            title: "0 Commissions",
            description: "When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app."
        },
        {
            title: "User-friendly",
            description: "With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder!"
        },
        {
            title: "Tier 1 liquidity",
            description: "Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing."
        }

    ]

    return (

        <div className="relative w-full min-h-[800px] md:min-h-[1000px] xl:min-h-[1200px] px-[5%] flex justify-center">
            <Image src="/images/bg/bg-2.png" alt="background" fill className="w-full h-full object-contain object-top" />
            <div className="z-20 w-[1520px]">
                <div className="relative flex flex-col w-full h-fit justify-center pt-[120px] sm:pt-[160px] md:pt-[180px] xl:pt-[320px] gap-8 md:gap-16 ">
                    <h1 className="text-[32px] md:text-[64px] leading-none tracking-tighter">WHY CHOOSE US</h1>
                    <div className="flex flex-col ">
                        {chooseData.map((choose, idx) => (
                            <Container
                                key={idx}
                                title={choose.title}
                                description={choose.description}
                                open={openIndex === idx}
                                onToggle={() => {
                                    setOpenIndex(openIndex === idx ? null : idx)
                                }}
                            />
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}