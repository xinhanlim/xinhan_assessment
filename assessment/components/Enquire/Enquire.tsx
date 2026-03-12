'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema, countries } from "./enquireSchema";
import { z } from "zod";


type EnquiryFormData = z.infer<typeof enquirySchema>

export default function Enquire() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<EnquiryFormData>({
        resolver: zodResolver(enquirySchema)
    });

    const onSubmit = (data: EnquiryFormData) => {
        console.log("Submitted Data", data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full h-full items-center ">
            <div className="max-w-[1520px] w-full h-full">
                <div className="flex flex-col gap-8 py-20 w-full h-full px-[5%]">
                    <h1 className="text-[64px] uppercase tracking-tighter leading-none text-center">Enquire Now</h1>
                    <div className="flex flex-col md:flex-row gap-8 w-full h-fit">
                        <div className="flex flex-col w-full h-full gap-2">
                            <p>
                                *Name:
                                <span className="px-2 text-red-500 text-[14px] ">
                                    {errors.name?.message && `* ${errors.name?.message}`}
                                </span>
                            </p>
                            <input {...register("name")} placeholder="Name" className={`navigateFormPadd ${errors.name ? "border-red-500" : "border-black"}`} />
                        </div>
                        <div className="flex flex-col w-full h-full gap-2">
                            <p>
                                *Email:
                                <span className="px-2 text-red-500 text-[14px] ">
                                    {errors.email?.message && `* ${errors.email?.message}`}
                                </span>
                            </p>
                            <input {...register("email")} placeholder="Email" className={`navigateFormPadd ${errors.email ? "border-red-500" : "border-black"}`} />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 w-full h-fit">
                        <div className="flex flex-col w-full h-full gap-2">
                            <p>
                                *Mobile No.:
                                <span className="px-2 text-red-500 text-[14px] ">
                                    {errors.mobile?.message && `* ${errors.mobile?.message}`}
                                </span>
                            </p>
                            <input {...register("mobile")} placeholder="Mobile No." className={`navigateFormPadd ${errors.mobile ? "border-red-500" : "border-black"}`} />
                        </div>
                        <div className="flex flex-col w-full h-full gap-2">
                            <p>
                                *Country:
                                <span className="px-2 text-red-500 text-[14px] ">
                                    {errors.country?.message && `* ${errors.country?.message}`}
                                </span>
                            </p>
                            <select
                                {...register("country")}
                                className={`navigateFormPadd ${errors.country ? "border-red-500" : "border-black"}`}
                                defaultValue="">
                                <option className="text-grey-400" value="" disabled>
                                    Select a country
                                </option>
                                {countries.map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-full gap-2">
                        <p>
                            *Message:
                            <span className="px-2 text-red-500 text-[14px] ">
                                {errors.message && `* ${errors.message}`}
                            </span>
                        </p>
                        <textarea {...register("message")} placeholder="Message" className={`navigateFormPadd min-h-[200px] ${errors.message ? "border-red-500" : "border-black"}`} />
                    </div>
                    <button type="submit" className="rounded-sm bg-white py-6">
                        Send Enquiry
                    </button>
                </div>

            </div>
        </form>
    )
}