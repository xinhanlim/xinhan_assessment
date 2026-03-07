'use client'

interface LabelsProps {
    name: string;
    color: string;
}

export default function ClassLabels({ name, color }: LabelsProps) {
    return (
        <div className="border rounded-sm px-2 py-2 min-w-[80px]" style={{ borderColor: color }}>
            <p className="flex justify-center">{name}</p>
        </div>
    )
}