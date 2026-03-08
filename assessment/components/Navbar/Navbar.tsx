'use client'

import RightArrow from "../IconSVG/Arrow"
import { useState, useEffect } from "react"
import { useAuth } from "@/store/authStore"
import AuthModal from "@/store/authModal"

export default function Navbar() {
    const { open, openModal, closeModal, user } = useAuth()

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto"
    }, [open])

    return (
        <>
            <nav className="sticky top-0 z-998 flex justify-center px-[5%] justify-center items-center ">
                <div className="w-[1520px] flex flex-row justify-between py-8">
                    <h2 className="flex justify-center items-center">BLACKELL GLOBAL</h2>

                    {user ? (
                        <button
                            onClick={() => useAuth.getState().logout()}
                            className="cta-register group flex flex-row items-center gap-2 text-[16px] cursor-pointer"
                        >
                            LOGOUT
                            <RightArrow />
                        </button>
                    ) : (
                        <button
                            onClick={() => openModal("login")}
                            className="cta-register group flex flex-row items-center gap-2 text-[16px] cursor-pointer"
                        >
                            LOGIN
                            <RightArrow />
                        </button>
                    )}
                </div>
            </nav>
            {open && <AuthModal />}
        </>
    )
}