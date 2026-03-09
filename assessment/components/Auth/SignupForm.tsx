import { useForm } from "react-hook-form";
import { useAuth } from "../../store/authStore"
import toast from "react-hot-toast";
import { SignupData, signupSchema } from "./dataSchema";
import { zodResolver } from "@hookform/resolvers/zod";

interface signupProps {
    closeModal: () => void;
    closeOverlay: () => void;
}

export default function SignupForm({ closeModal, closeOverlay }: signupProps) {
    const { signup, toggleModal } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm<SignupData>({
        resolver: zodResolver(signupSchema)
    })

    const onSubmit = async (data: any) => {
        try {
            await signup(data)
            toast.success(
                <div>
                    <p className="toastText">Hi {data.firstName}, welcome to Blackwell!</p>
                    <p className="toastText">Please verify your email immediately.</p>
                </div>
            );
            closeModal();
            closeOverlay();

        } catch (err: any) {
            toast.error(err.message);
        }
    }

    return (
        <div className=" relative w-full flex flex-col h-full overflow-hidden">
            <div className="flex flex-row justify-between items-center px-[4%]">
                <p className="text-[32px]">SIGN UP FORM</p>
                <button onClick={closeModal} className="closeBtn cursor-pointer"> x </button>
            </div>
            <div className="overflow-y-auto flex-1">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 px-[4%] py-8 formText">
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div className="flex flex-col w-full gap-2 h-fit">
                            <p>
                                *First Name:
                                <span className="px-2 text-red-500 text-[14px] ">
                                    {errors.firstName?.message && `* ${errors.firstName?.message}`}
                                </span>
                            </p>
                            <input {...register("firstName")} placeholder="First Name" className={`rounded-sm border p-2 ${errors.firstName ? "border-red-500" : "border-black"}`} />

                        </div>
                        <div className="flex flex-col w-full gap-2 h-fit">
                            <p>
                                *Last Name:
                                <span className="px-2 text-red-500 text-[14px]">
                                    {errors.lastName?.message && `* ${errors.lastName?.message}`}
                                </span>
                            </p>
                            <input {...register("lastName")} placeholder="Last Name" className={`rounded-sm border p-2 ${errors.lastName ? "border-red-500" : "border-black"}`} />

                        </div>
                    </div>

                    <div className="flex flex-col w-full gap-2 h-fit">
                        <p>
                            *Email:
                            <span className="px-2 text-red-500 text-[14px]">
                                {errors.email?.message && `* ${errors.email?.message}`}
                            </span>
                        </p>
                        <input {...register("email")} placeholder="Email" className={`rounded-sm border p-2 ${errors.email ? "border-red-500" : "border-black"}`} />

                    </div>

                    <div className="flex flex-col w-full gap-2 h-fit">
                        <p>
                            *Mobile:
                            <span className="px-2 text-red-500 text-[14px]">
                                {errors.mobile?.message && `* ${errors.mobile?.message}`}
                            </span>
                        </p>
                        <input {...register("mobile")} placeholder="Mobile Number" className={`rounded-sm border p-2 ${errors.mobile ? "border-red-500" : "border-black"}`} />

                    </div>

                    <div className="flex flex-col w-full gap-2 h-fit">
                        <p>Country: </p>
                        <input {...register("country")} placeholder="Country" className="border p-2" />
                    </div>

                    <div className="flex flex-col w-full gap-2 h-fit">
                        <p>
                            Password:
                            <span className="px-2 text-red-500 text-[14px]">
                                {errors.password?.message && `* ${errors.password?.message}`}
                            </span>
                        </p>
                        <input {...register("password")} placeholder="Password" className={`rounded-sm border p-2 ${errors.password ? "border-red-500" : "border-black"}`} />

                    </div>

                    <div className="flex flex-col w-full gap-2 h-fit">
                        <p>
                            *Confirm Password:
                            <span className="px-2 text-red-500 text-[14px] ">
                                {errors.confirmPassword?.message && `* ${errors.confirmPassword.message}`}
                            </span>
                        </p>
                        <input {...register("confirmPassword")} placeholder="Password" className={`rounded-sm border p-2 ${errors.confirmPassword ? "border-red-500" : "border-black"}`} />

                    </div>
                    <button type="submit" className="bg-black-200 px-4 py-4 ">Sign Up</button>
                    <p className="h-full text-black">
                        Already have an account?
                        <span className="cursor-pointer text-black" onClick={toggleModal}>Login</span>
                    </p>
                </form>
            </div>


        </div>


    )
}
