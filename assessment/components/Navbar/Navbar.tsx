'use client'

import Link from "next/link"
import RightArrow from "../IconSVG/Arrow"

export default function Navbar() {
    return (
        <nav className="flex justify-center ">
            <div className="w-[1530px] flex flex-row justify-between py-8">
                <h2>BLACKELL GLOBAL</h2>
                <Link href="/" className="cta-register group flex flex-row items-center gap-2">
                    REGISTER
                    <RightArrow/>
                </Link>
            </div>
        </nav>
    )
}