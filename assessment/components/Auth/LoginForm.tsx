import { useForm } from "react-hook-form";
import { useAuth } from "../../store/authStore"
import toast from "react-hot-toast";
import Image from "next/image";

interface loginFormProps {
    closeModal: () => void;
    closeOverlay: () => void
}

export default function LoginForm({ closeModal, closeOverlay }: loginFormProps) {
    const { login, toggleModal } = useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        try {
            await login(data.email, data.password)
            toast.success("Login Successfully")
            closeModal();
            closeOverlay();
        } catch (err: any) {
            toast.error(err.message)
        }
    }

    return (
        <>
            <div className="flex flex-row w-full justify-between items-center px-[4%]">
                <div className="relative w-[150px] h-[100px] sm:w-[200px] sm:h-[60px] ">
                    <Image src="/images/BWlogo.png" alt="logo image" fill className="object-cover w-full h-full" />
                </div>
                <button onClick={closeModal} className="closeBtn cursor-pointer"> x </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-[4%] h-full gap-8 justify-center items-center">
                <div className="flex flex-col w-full justify-between gap-8">
                    <div className="flex flex-col w-full gap-2 ">
                        <p>Email: </p>
                        <input {...register("email")}
                            placeholder="Enter Your Email"
                            className="loginInput"
                        />
                    </div>
                    <div className="flex flex-col w-full gap-2 ">
                        <p>Password: </p>
                        <input {...register("password")} type="password" placeholder="Password" className="loginInput" />

                    </div>
                    <button type="submit" className="py-4 rounded-sm bg-blue-200 cursor-pointer">Login</button>
                    <p>
                        Don't have an account? <span className="cursor-pointer" onClick={toggleModal}>Sign Up</span>
                    </p>
                </div>

            </form>
        </>
    )
}