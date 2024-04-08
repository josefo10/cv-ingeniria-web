import { IconType } from "react-icons";

interface SkillsProps {
    skill: string
    IconComponent: IconType
}

const Skills = ({skill, IconComponent}: SkillsProps ) => {

    return (
        <div className="flex flex-row items-center gap-2">
            <IconComponent className="text-hv-yellow" size={20} />
            <span className="text-hv-text-gray">{skill}</span>
        </div>
    )

}

export { Skills }