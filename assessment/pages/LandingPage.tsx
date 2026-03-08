'use client'

import Navbar from "@/components/Navbar/Navbar";
import Counter from "@/ultis/PromotionCounter/Countdown"
import Hero from "@/components/Hero/Hero";
import Banner from "@/components/Banner/Banner";
import Features from "@/components/Features/Features";
import Install from "@/components/Install/Install";
import SlideSection from "@/components/Install/SlideSection";

export default function LandingPage() {
    return (
        <main className="flex flex-col">
            <Navbar />
            <Counter endDate="14 Mar, 2026" />
            <Hero/>
            <Banner/>
            <Features/>
            <Install/>
            <SlideSection/>
        </main>
    )
}