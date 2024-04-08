interface DescriptionSectionProps {
    title: string
    description: string
}

const DescriptionSection = ({title, description}:DescriptionSectionProps) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-2xl">{title}</h1>
            <span className="text-center w-1/2">{description}</span>
        </div>
    )
}

export { DescriptionSection }