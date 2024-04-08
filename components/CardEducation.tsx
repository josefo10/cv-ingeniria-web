import { resolve } from "path"

interface CardEducationProps {
    institute: string
    date: string
    rol: string
    qualification: string
    description: string
}

const CardEducation = ({ institute, date, rol, qualification, description }: CardEducationProps) => {
    return (
        <div className="flex flex-row py-2 gap-3">

            <div className="w-1/2">
                <div >
                    <span className="font-semibold">{institute}</span>
                </div>
                <div className="flex flex-row">
                    <span className="w-1/3">{rol}</span>
                    <span className="bg-hv-yellow text-white">{date}</span>
                </div>
            </div>
            <div className="w-1/2">
                <h1 className="font-semibold">{qualification}</h1>
                <span className="text-hv-text-gray">{description}</span>
            </div>

        </div>
    )
}

export { CardEducation }