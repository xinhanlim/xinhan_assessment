'use client'

import RightArrow from "../IconSVG/Arrow"
import { useState, useEffect } from "react"
import { useAuth } from "@/store/authStore"
import AuthModal from "@/store/authModal"
import toast from "react-hot-toast"

export default function Navbar() {
    const { open, openModal, user } = useAuth()
    const [mobileOpen, setMobileOpen] = useState(false)

    const toggleMobileOpen = () => {
        setMobileOpen(!mobileOpen)
    }


    const handleLogout = () => {
        useAuth.getState().logout()
        toast.success("You have been logged out successfully")
        setMobileOpen(false)
    }

    useEffect(() => {
        document.body.style.overflow = open || mobileOpen ? "hidden" : "auto"
    }, [open, mobileOpen])



    return (
        <>
            <nav className="sticky top-0 z-998 flex justify-center px-[5%] justify-center items-center ">
                <div className="w-[1520px] flex flex-row justify-between py-8">
                    <h2>BLACKELL GLOBAL</h2>
                
                {/* MOBILE */}
                <button type="button"
                    aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
                    aria-expanded={mobileOpen}
                    aria-controls="MENU"
                    onClick={toggleMobileOpen}
                    className=" relative overflow-hidden flex items-center justify-center md:hidden"
                >
                    <span className="relative z-10 flex items-center uppercase cta-register justify-center font-medium min-w-[90px] cursor-pointer">
                        <span className={`${mobileOpen ? "absolute translate-y-20 opacity-100" : "translate-y-0 opacity-100"}`}>
                            menu
                        </span>
                        <span className={`${mobileOpen ? "translate-y-0 opacity-100" : "absolute translate-y-8 opacity-0"}`}>
                            close
                        </span>
                    </span>
                </button>
                </div>
                <div className={`absolute top-full left-0 md:hidden px-[5%]  w-screen min-h-screen transition-all  ease-in duration-200 mobileOverlay
                                                 ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}>
                    <div className="flex flex-col justify-end h-[80vh] overflow-hidden ">
                        {user ? (
                            <div className="flex flex-col md:flex-row items-center justify-between h-full gap-8 pb-20">
                                <p className="text-[80px] w-full tracking-tighter leading-none ">Welcome, {user.firstName} {user.lastName}</p>
                                <button
                                    onClick={handleLogout}
                                    className="cta-register w-full group flex flex-row items-center gap-2 text-[16px] cursor-pointer"
                                >
                                    LOGOUT
                                    <RightArrow width="16" height="16"/>
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col py-[5%] ">
                                <button
                                    onClick={() => openModal("login")}
                                    className="group flex py-12 flex-row justify-between items-center gap-2 cursor-pointer border-b"
                                >
                                    LOGIN
                                    <RightArrow  width="32" height="32"/>
                                </button>
                                <button
                                    onClick={() => openModal("signup")}
                                    className="group flex py-12 flex-row justify-between items-center gap-2 cursor-pointer border-b"
                                >
                                    REGISTER
                                    <RightArrow  width="32" height="32"/>
                                </button>
                            </div>
                        )}
                    </div>
                </div>


                {/* DESKTOP */}
                        {user ? (
                            <div className="md:flex flex-col md:flex-row items-center justify-between h-full gap-8 hidden">
                                <p className="text-[24px] min-w-fit tracking-tighter leading-none ">Welcome, {user.firstName} {user.lastName}</p>
                                <button
                                    onClick={handleLogout}
                                    className="cta-register group flex flex-row items-center gap-2 text-[16px] cursor-pointer"
                                >
                                    LOGOUT
                                    <RightArrow width="16" height="16"/>
                                </button>
                            </div>
                        ) : (
                            <div className="md:flex flex-row hidden">
                                <button
                                    onClick={() => openModal("login")}
                                    className="group cta-register flex flex-row justify-between items-center gap-2 cursor-pointer border-b"
                                >
                                    REGISTER
                                    <RightArrow  width="16" height="16"/>
                                </button>
                            </div>
                        )}
            </nav>
            {open && <AuthModal closeOverlay={() => setMobileOpen(false)}/>}
        </>
    )
}

// <div className="flex flex-col justify-end h-[80vh] overflow-hidden">
//                                 <button
//                                     onClick={() => openModal("login")}
//                                     className="cta-register group flex-row items-center gap-2 text-[16px] cursor-pointer"
//                                 >
//                                     LOGIN
//                                     <RightArrow />
//                                 </button>
//                             </div>