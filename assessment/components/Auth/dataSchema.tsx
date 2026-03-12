import { z } from "zod";


export const countries = ["Singapore", "Malaysia", "Indonesia"] as const;

export const signupSchema = z.object({
    firstName: z.string().nonempty("First Name is Required"),
    lastName: z.string().nonempty("Last Name is Required"),
    email: z.string().email("Invalid Email").nonempty("Email is Required"),
    mobile: z.string().nonempty("Mobile Number is Required").regex(/^\d{8,15}$/, "Mobile number must be 8-15 digits"),
    country: z.enum(countries, { message: "Please select a country" }),
    password: z.string().min(8, "Password must be 8 characters long"),
    confirmPassword: z.string().min(8, "Password must matched"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"]
})

export const loginSchema = z.object({
    email: z.string().nonempty("Email is required"),
    password: z.string().nonempty("Password is required")
})

export type SignupData = z.infer<typeof signupSchema>;
export type LoginData = z.infer<typeof loginSchema>;