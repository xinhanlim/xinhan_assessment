'use client'

import Navbar from "@/components/Navbar/Navbar";
import Counter from "@/ultis/PromotionCounter/Countdown"
import Hero from "@/components/Hero/Hero";
import Banner from "@/components/Banner/Banner";
import Features from "@/components/Features/Features";
import Install from "@/components/Install/Install";
import SlideSection from "@/components/Install/SlideSection";
import RevBanner from "@/components/Banner/RevBanner";
import ChooseUs from "@/components/Why/ChooseUs";
import Navigate from "@/components/Navigate/Navigate";
import Enquire from "@/components/Enquire/Enquire";

export default function LandingPage() {
    return (
        <main className="flex flex-col">
            <Navbar />
            <Counter endDate="14 Mar, 2028" />
            <Hero/>
            <Banner/>
            <Features/>
            <Install/>
            <SlideSection/>
            <ChooseUs/>
            <Navigate/>
            <RevBanner/>
            <Enquire/>
        </main>
    )
}