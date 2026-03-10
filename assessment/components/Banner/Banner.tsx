'use client'

export default function Banner() {
    return (
        <div className="overflow-hidden  ">
            <div className="flex bannerCarousel gap-10 whitespace-nowrap tracking-tighter leading-none text-[64px] py-4">
                {Array(20).fill("BLACKWELL INVESTMENT").map((text, i) => (
                    <span key={i} className="">
                        {text}
                    </span>
                ))}
            </div>
        </div>

    )
}