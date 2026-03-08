'use client'
import LoginForm from "@/components/LoginForm";
import { useAuth } from "./authStore"
import SignupForm from "@/components/SignupForm";


export default function AuthModal() {
    const { open, mode, closeModal } = useAuth();
    if (!open) {
        return null
    }

    return (
        <div className="fixed inset-0 bg-black/95 z-999 cursor-pointer flex justify-center items-center">
            <div className="relative w-[1520px] h-screen flex flex-col">
                <div className="flex justify-center w-full h-full items-center cursor-default px-[5%] sm:px-[20%] py-[5%] sm:py-[8%]">
                    <div className="w-full h-full bg-white rounded-md px-8 py-8">
                        <button onClick={closeModal} className="py-2 px-4 closeBtn cursor-pointer flex justify-end"> X </button>
                        {mode === "login" ? <LoginForm/> : <SignupForm/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

