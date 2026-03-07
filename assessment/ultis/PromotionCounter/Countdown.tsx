'use client'

import { useState, useEffect } from 'react';
import Counter from './Counter';

interface CountdownProps {
    endDate: string;
}

export default function Countdown({ endDate }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const endTime = new Date(endDate).getTime();
        const interval = setInterval(() => {
            const now = Date.now();
            const difference = endTime - now;

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(interval);
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [endDate]);

    return (
        <div id="promotion" className="flex flex-col items-center py-4 tracking-tighter leading-none">
            <h5 className="">PROMOTION ENDS IN </h5>
            <div className="flex flex-row gap-2 py-2 promotionCounter">
                <Counter amount={timeLeft.days} format="DAYS" />
                <h5>:</h5>
                <Counter amount={timeLeft.hours} format="HOURS" />
                <h5>:</h5>
                <Counter amount={timeLeft.minutes} format="MINS" />
                <h5>:</h5>
                <Counter amount={timeLeft.seconds} format="SECOND" />
            </div>

        </div>
    );
}