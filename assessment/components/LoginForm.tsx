import { useForm } from "react-hook-form";
import { useAuth } from "../store/authStore"

export default function LoginForm() {
    const { login, toggleModal } = useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        try {
            await login(data.email, data.password)
            alert("Login successful!")
        } catch (err) {
            alert(err)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <input {...register("email")} placeholder="Email" className="border " />
            <input {...register("password")} type="password" placeholder="Password" className="border" />
            <button type="submit" className="text-white">Login</button>
            <p>
                Don't have an account? <span className="cursor-pointer text-black" onClick={toggleModal}>Sign Up</span>
            </p>
        </form>
    )
}