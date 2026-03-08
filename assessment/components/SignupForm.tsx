import { useForm } from "react-hook-form";
import { useAuth } from "../store/authStore"

export default function SignupForm() {
    const { signup, toggleModal } = useAuth()
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data: any) => {
        try {
            await signup(data)
            alert("Signup successful!")
        } catch (err: any) {
            alert(err.message)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
            <input {...register("firstName")} placeholder="First Name" className="border p-2" />
            <input {...register("lastName")} placeholder="Last Name" className="border p-2" />
            <input {...register("email")} placeholder="Email" className="border p-2" />
            <input {...register("password")} type="password" placeholder="Password" className="border p-2" />
            <input {...register("confirmPassword")} type="password" placeholder="Confirm Password" className="border p-2" />
            <button type="submit" className="bg-green-600 text-white p-2 mt-2">Sign Up</button>
            <p>
                Already have an account? <span className="text-blue-500 cursor-pointer" onClick={toggleModal}>Login</span>
            </p>
        </form>
    )
}
