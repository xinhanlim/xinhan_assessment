'use client'
import Image from "next/image";

interface SlideShowProps {
    title: string;
    image: string;
}


export default function Card({ title, image }: SlideShowProps) {
    return (
        <div className="flex flex-col h-full w-full cardGuide px-8 py-8">
            
            <p>{title}</p>
            <div className="relative h-full w-full">
                <Image src={image} alt="image of guide" loading="lazy" fill className="object-contain w-full h-full" />
            </div>
            
        </div>
    )
}