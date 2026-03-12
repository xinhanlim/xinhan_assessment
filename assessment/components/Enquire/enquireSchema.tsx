import { z } from "zod"

export const countries = ["Singapore", "Malaysia", "Indonesia"] as const;

export const enquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  mobile:z.string().min(8, "Phone Number is required"),
  country: z.enum(countries , { message: "Please select a country" }),
  message: z.string().min(5, "Message must be at least 5 characters")
})