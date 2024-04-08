import { IconType } from 'react-icons';


interface knowledgeProps {
    Icon: IconType
    knowledge: string
    description: string
}

const Card = ({ Icon, knowledge, description }: knowledgeProps) => {
    return (
        <div className="flex flex-col py-6 items-center bg-white"> 
            <Icon className='text-hv-yellow' size ={70} />
            <h1 className='font-semibold'>{knowledge}</h1>
            <span className='text-center px-1 text-hv-text-gray'>{description}</span>
        </div>
    )
}

export { Card }