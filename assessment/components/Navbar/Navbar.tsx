'use client'

import Link from "next/link"
import RightArrow from "../IconSVG/Arrow"

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-999 flex justify-center px-[5%] justify-center items-center ">
            <div className="w-[1520px] flex flex-row justify-between py-8">
                <h2 className="flex justify-center items-center">BLACKELL GLOBAL</h2>
                <Link href="/" className="cta-register group flex flex-row items-center gap-2 text-[16px] ">
                    REGISTER
                    <RightArrow/>
                </Link>
            </div>
        </nav>
    )
}