'use client'
import Image from "next/image";
import RightArrow from "../IconSVG/Arrow";

interface StepsProps {
    steps: string;
    open: boolean;
    image: string;
    toggleOpen: () => void;
}

export default function Steps({ steps, image, open, toggleOpen }: StepsProps) {

    return (
        <div className="sm:px-0">
            <div className="group flex flex-col xl:flex-row w-full justify-between pb-8 border-b cursor-pointer text-white guide" onClick={toggleOpen}>
                <div className="flex flex-row items-center justify-between w-full">
                    <h2 className="leading-none tracking-tighter text-[24px] md:text-[32px]">
                        {steps}
                    </h2>
                    <RightArrow />
                </div>
                {open && (
                    <div className="xl:hidden guideBg relative w-full h-[500px] items-center">
                        <Image src={image} alt="image of steps" fill loading="lazy" className="object-contain object-center w-full h-full" />
                    </div>
                )}
            </div>
        </div>
    )
}