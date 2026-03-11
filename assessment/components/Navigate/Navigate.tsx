'use client'

import { useState } from "react"
import Image from "next/image"

const tabsData = [
    {
        icons: "/images/navigate/icon1-blue.png",
        iconsActive: "/images/navigate/icon1.png",
        title: "Discover",
        description: "Explore all the investment Masters available on Blackwell Invest. Dive into their profiles and analyse their profitability at a glance.",
        image: "/images/reason/reason-1.png"
    },
    {
        icons: "/images/navigate/icon2-blue.png",
        iconsActive: "/images/navigate/icon2.png",
        title: "Activity",
        description: "See the past trades made by the signals you are copying from the last 30 days or track their open positions. Monitor their strategy, and make informed decisions with timely updates of the trades shaping your portfolio.",
        image: "/images/reason/reason-2.png"
    },
    {
        icons: "/images/navigate/icon3-blue.png",
        iconsActive: "/images/navigate/icon3.png",
        title: "Trade",
        description: "Seamlessly trade oil CFDs, indices, and currency pairs with ease.",
        image: "/images/reason/reason-3.png"
    },
    {
        icons: "/images/navigate/icon4-blue.png",
        iconsActive: "/images/navigate/icon4.png",
        title: "Positions",
        description: "Easily track the status of all your trades and monitor your account metrics in real-time. ",
        image: "/images/reason/reason-4.png"
    },
    {
        icons: "/images/navigate/icon5-blue.png",
        iconsActive: "/images/navigate/icon5.png",
        title: "Account",
        description: "Access detailed information about your trading account, monitor copier drawdown levels, assess your profitability, and keep track of your  trade performance – all in one place!",
        image: "/images/reason/reason-5.png"
    },


]

export default function Navigate() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section className="flex justify-center relative w-full h-[1100px] px-[5%] ">
            <div className="absolute inset-0 w-full h-[1100px]">
                <Image src="/images/bg/bg-3.png" alt="image of wave-1" loading="lazy" fill className="object-cover w-full h-full object-top" />
            </div>
            <div className="relative z-10 w-[1520px] pt-[200px] flex flex-col items-start h-screen">
                <h1 className="pb-30 text-[64px] leading-none tracking-tighter text-center w-full uppercase">Navigate Our App in 5 Mins</h1>
                <div className="flex flex-row w-fit">
                    {tabsData.map((tabs, index) => (
                        <div key={index} className="flex-row flex w-full">
                            <div className="flex flex-row">
                                <button
                                    onClick={() => { setActiveTab(index) }}
                                    className={`relative w-16 h-16 rounded-t-lg ${activeTab === index ? "bg-yellow-500" : "bg-black"}`}
                                >
                                    <Image src={activeTab === index ? tabs.iconsActive : tabs.icons}
                                        alt={tabs.title} fill className="object-contain" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                    <div className="flex flex-col md:flex-row  items-center justify-between w-full bg-yellow-500 px-8 py-8 rounded-b-sm rounded-r-sm">
                        <div className="flex flex-col justify-center ">
                            <p className="">{tabsData[activeTab].title}</p>
                            <p className="">{tabsData[activeTab].description}</p>
                        </div>
                        <div className="relative w-[300px] h-[300px] md:w-[500px] ">
                            <Image
                                src={tabsData[activeTab].image}
                                alt={tabsData[activeTab].title}
                                fill
                                className="object-contain object-center"
                            />
                        </div>
                    </div>
            </div>
        </section>
    )

}