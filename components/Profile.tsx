import Image from 'next/image';

interface ProfileProps {
    Name: String;
    Rol: String;
}

const Profile = ({ Name, Rol }: ProfileProps) => {

    return (
        <div className='flex flex-col'>
            <Image className='rounded-full' src='/Image/Profile.jpg' height={"150"} width={"150"} alt='Profile Image' />
            <span className="font-semibold">{Name}</span>
            <span className="text-light-grey">{Rol}</span>
        </div>
    )
}

export { Profile }