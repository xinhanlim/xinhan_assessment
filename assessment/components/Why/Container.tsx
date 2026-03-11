'use client'
import { useState } from "react"
import Image from "next/image";
import Arrow from "../IconSVG/Arrow";

interface ContainerProps {
    title: string;
    description: string;
    open: boolean;
    onToggle: () => void;
}

export default function Container({ title, description, open, onToggle, }: ContainerProps) {

    return (
        <div className="w-full h-full">
            <button onClick={onToggle} className="w-full h-full cursor-pointer flex flex-col py-8 border-b">
                <div className=" group flex flex-row w-full h-full items-center justify-between">
                    <h1 className="text-[32px] md:text-[64px] tracking-tighter leading-none">{title}</h1>
                    <p className="px-2 items-center">{open ? "-" : "+"} </p>
                </div>
                {open && (
                    <div className="pt-16">
                        <p className="text-left">
                            {description}
                        </p>

                    </div>
                )}
            </button>

        </div>
    )
}