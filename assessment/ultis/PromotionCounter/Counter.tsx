'use client'

interface CounterProps {
    amount:number,
    format:string,
}

export default function Counter({amount,format}:CounterProps){
    return (
        <div className="flex flex-col gap-2 items-center justify-between">   
            <p>{amount}</p>
            <p>{format}</p>
        </div>
    )
}