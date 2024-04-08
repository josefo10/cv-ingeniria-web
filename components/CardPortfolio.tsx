import Image from 'next/image';


interface CardPortfolioProps {
    Title: string
    Description: string
    srcImage: string
}

const CardPortfolio = ({ Title, Description, srcImage }: CardPortfolioProps) => {
    return (
        <div className='flex flex-col bg-white w-1/5 flex-shrink-0'>

            <div className='h-[40px] degrade'>
            </div>
            <Image className='w-full' src='/Image/Profile.jpg' height={"150"} width={"150"} alt='Profile Image' />

            <div className='flex flex-col p-2'>
                <span className="font-semibold">{Title}</span>
                <span className="text-light-grey">{Description}</span>
                <span className='text-hv-yellow font-semibold'>Leer más</span>
            </div>
        </div>
    )
}

export { CardPortfolio }