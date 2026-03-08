import Image from "next/image"

export default function Install() {
    return (
        <div className="flex justify-center px-[5%] w-full h-full flex-col items-center">
            <div className="z-20 relative w-screen h-[400px] installBgSection">
                <Image src="/images/bg/bg-1.png" alt="image of wave-1" fill className="absolute inset-0 w-full h-[full] object-cover object-top" />
            </div>
            <div className="">
                <h1>TRADE LIKE A PRO</h1>
            </div>
        </div>

    )
}