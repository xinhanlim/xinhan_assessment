import Navbar from "@/components/Navbar/Navbar";
import Counter from "@/ultis/PromotionCounter/Countdown"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Counter endDate="14 Mar, 2026"/>
    </main>
  )
}
