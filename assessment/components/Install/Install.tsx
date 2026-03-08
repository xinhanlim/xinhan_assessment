import Image from "next/image"
import { useState } from "react"
import Steps from "./Steps"
import Link from "next/link"

export default function Install() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const stepsData = [
        { title: 'Install our app, “Blackwell Invest"', image: "/images/guide/guide-1.png" },
        { title: 'Choose a signal Master and click “Copy”', image: "/images/guide/guide-2.png" },
        { title: 'Set your trade size preferences', image: "/images/guide/guide-3.png" },
        { title: 'Click “Agree and Copy”', image: "/images/guide/guide-4.png" },
    ]

    return (
        <section className="flex justify-center relative w-full h-full items-center">
            <div className="absolute inset-0 w-full h-screen installBgSection">
                <Image src="/images/bg/bg-1.png" alt="image of wave-1" loading="lazy" fill className="object-contain object-top" />
            </div>
            <div className="flex flex-col w-full h-full">
                <div className="block h-[100px] sm:h-[180px] md:h-[200px] lg:h-[250px] xl:h-[400px] " />
                <div className="relative z-10 installSection h-full flex justify-center px-[5%]">
                    <div className="max-w-[1520px] flex flex-col w-full h-fit px-[5%] sm:px-0 ">
                        <div className="flex justify-center text-center">
                            <h1 className="text-[32px] md:text-[64px] tracking-tighter leading-none">TRADE LIKE A PRO IN MINUTES</h1>
                        </div>
                        <div className="w-full h-full py-[60px] sm:py-20 flex flex-row gap-20">
                            
                            <div className="hidden xl:flex relative w-full h-[500px] guideBg">
                                <Image
                                    src={stepsData[currentIndex].image}
                                    alt={`Step ${currentIndex + 1}`}
                                    fill
                                    className="w-full h-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex flex-col w-full ">
                                {stepsData.map((steps, index) => (
                                    <Steps
                                        key={index}
                                        steps={`${index + 1} : ${steps.title}`}
                                        open={currentIndex === index}
                                        image={steps.image}
                                        toggleOpen={() => setCurrentIndex(index)}
                                    />
                                ))}
                                <div className="flex flex-col py-8 gap-4 px-[5%] sm:px-0">
                                    <h2 className="text-[24px] tracking-tighter leading-none">GET IT ON APP STORES / GOOGLE PLAY STORES</h2>
                                    <div className="flex flex-row gap-4">
                                        <Link href="https://apps.apple.com/au/app/blackwell-invest/id1666036351" target="_blank" rel="noopener noreferrer" className="relative cta-register group flex flex-row items-center gap-2 w-fit">
                                            <Image src="/images/appstore/app-store.jpg" alt="image of apple" width={100} height={100} className="object-cover" />
                                        </Link>
                                        <Link href="https://play.google.com/store/apps/details?id=com.BlackwellGlobalInvestmentsUKLimited.pelican&hl=en_SG" target="_blank" rel="noopener noreferrer" className="relative cta-register group flex flex-row items-center gap-2 w-fit">
                                            <Image src="/images/appstore/google-play.jpg" alt="image of apple" width={100} height={100} className="object-cover" />
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}