import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import RightArrow from "../IconSVG/RightArrow";
import LeftArrow from "../IconSVG/LeftArrow";

export default function SlideSection() {

    const linkData = [
        { title: 'Install our app, “Blackwell Invest"', image: "/images/slideshow/step-1.png" },
        { title: 'Login OR create a new account', image: "/images/slideshow/step-2.png" },
        { title: 'Click “Account”', image: "/images/slideshow/step-3.png" },
        { title: 'Select “BlackwellGlobalAsia-Live” server', image: "/images/slideshow/step-4.png" },
        { title: 'Fill in your Blackwell Global trading account OR create a new account', image: "/images/slideshow/step-5.png" },
        { title: 'Click “Copy Trades” ', image: "/images/slideshow/step-6.png" },
        { title: 'Click “Done”', image: "/images/slideshow/step-7.png" },
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % linkData.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => prev === 0 ? linkData.length - 1 : prev - 1)
    }

    return (
        <section className="relative flex flex-col justify-center w-full h-full items-center px-[5%] pb-20 gap-[60px] installSection">
            <h1 className="text-[32px] md:text-[64px] tracking-tighter leading-none">HOW TO LINK A MT4 ACCOUNT</h1>
            <div className=" relative max-w-[1520px] w-full h-[60vh] lg:h-[70vh] cardGuide ">
                <div className="w-full h-fit">
                    <AnimatePresence>
                        {linkData.map((slide, index) => {
                            if (index !== currentSlide) {
                                return null
                            }
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 0 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="z-10 absolute inset-0 w-full h-full">
                                    <div>
                                        <div className="z-10 flex flex-col w-full px-8 py-8 justify-between sm:items-center">
                                            <p className="text-[16px] sm:text-[32px] h-full min-h-[48px] tracking-tighter leading-none">Step {currentSlide + 1}. {slide.title}</p>
                                            <div className="relative h-[300px] sm:h-[550px] w-full">
                                                <Image src={slide.image} alt="image of guide" loading="lazy" fill className="object-contain w-full h-full" />
                                            </div>

                                        </div>
                                    </div>

                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>
                <div className="z-20 absolute inset-0 flex flex justify-between  h-full">
                    <button onClick={prevSlide} className="px-4 py-4 rounded-sm"> <LeftArrow className="w-6 h-6 sm:w-12 sm:h-12" /> </button>
                    <button onClick={nextSlide} className=" px-4 py-4 rounded-sm"> <RightArrow className="w-6 h-6 sm:w-12 sm:h-12" /></button>

                </div>
            </div>
        </section>
    )
}