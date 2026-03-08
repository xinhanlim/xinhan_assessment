import Image from "next/image"


export default function Features() {
    return (
        <section id="features" className="flex justify-center px-[5%] w-full h-full flex-col items-center py-20  gap-20 ">
            <div className="flex flex-col xl:flex-row w-full xl:max-w-[1520px] sm:h-full sm:py-20 justify-between ">
                <div className="flex flex-col gap-[60px] w-full h-full">
                    <h1 className=" text-[24px] md:text-[64px] tracking-tighter leading-none">FEATURES - FAST MATCHING</h1>
                    <div className="flex flex-col sm:flex-row justify-between gap-8 md:gap-[120px]">
                        <div className="relative w-full h-[500px] overflow-hidden border-1 border-white py-8 px-8 videoBg ">
                            <video
                                src="/videos/mobile-video.mov"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-contain"
                            ></video>
                        </div>
                        <div className="w-full h-full">
                            <ul className="flex flex-col gap-3 h-full tracking-tighter leading-none">
                                <li className="pb-6 flex flex-row gap-2 ">
                                    <Image src="/images/list-icon.png" alt="image of list icon" width={24} height={24} className="object-contain" />
                                    <p>
                                        Spotlight
                                    </p>
                                </li>
                                <li className="py-6 flex flex-row gap-2">
                                    <Image src="/images/list-icon.png" alt="image of list icon" width={24} height={24} className="object-contain" />
                                    <p>
                                        Top Strategies
                                    </p>
                                </li>
                                <li className="py-6  flex flex-row gap-2">
                                    <Image src="/images/list-icon.png" alt="image of list icon" width={24} height={24} className="object-contain" />
                                    <p>
                                        Low Drawdown
                                    </p>
                                </li>
                                <li className="py-6 flex flex-row gap-2">
                                    <Image src="/images/list-icon.png" alt="image of list icon" width={24} height={24} className="object-contain" />
                                    <p>
                                        Medium Drawdown
                                    </p>
                                </li>
                                <li className="py-6 flex flex-row gap-2">
                                    <Image src="/images/list-icon.png" alt="image of list icon" width={24} height={24} className="object-contain" />
                                    <p>
                                        High Drawdown
                                    </p>
                                </li>
                                <li className="py-6  flex flex-row gap-2">
                                    <Image src="/images/list-icon.png" alt="image of list icon" width={24} height={24} className="object-contain" />
                                    <p>
                                        New Strategie
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full xl:w-[1520px] sm:h-full flex justify-between ">
                <div className="flex flex-col  gap-[60px]  w-full h-full">
                    <h1 className=" text-[24px] md:text-[64px] tracking-tighter leading-none ">FEATURES - EASY ANALYSIS</h1>
                    <div className="flex flex-col-reverse sm:flex-row justify-between gap-[60px]">
                        <div className="w-full h-full">
                            <p>Instant clarity on the Masters’ profile. Get a snapshot of their trade history, profitability, risk, and portfolio all in one place. </p>
                        </div>
                        <div className="relative w-full h-[500px] overflow-hidden border-1 border-white py-8 px-8 videoBg ">
                            <Image src="/images/features/mobile-2-new.png" alt="mobile-2-new" loading="lazy" fill className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}