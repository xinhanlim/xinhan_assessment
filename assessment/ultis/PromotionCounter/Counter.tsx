'use client'

interface CounterProps {
    amount:number,
    format:string,
}

export default function Counter({amount,format}:CounterProps){
    return (
        <div className="flex flex-col gap-2 items-center justify-between">   
            <h5>{amount}</h5>
            <h5>{format}</h5>
        </div>
    )
}