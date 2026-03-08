'use client'

import Navbar from "@/components/Navbar/Navbar";
import Counter from "@/ultis/PromotionCounter/Countdown"
import Hero from "@/components/Hero/Hero";
import Banner from "@/components/Banner/Banner";

export default function LandingPage() {
    return (
        <main className="flex flex-col">
            <Navbar />
            <Counter endDate="14 Mar, 2026" />
            <Hero/>
            <Banner/>
        </main>
    )
}