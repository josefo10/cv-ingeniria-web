import { Button } from "./Button"
import Image from 'next/image';
import { ProfileDialog } from "./Dialogs/ProfileDialog";
import { useState } from "react";

const MainProfile = () => {

    const [dialogOpen, setDialogOpen] = useState<boolean>(false)

    const handleProgileDialogClick = () => {
        setDialogOpen(true)
    }

    return (
        <div className="bg-white flex">
            <div className="flex flex-col w-3/4 items-start p-10 gap-2">
                <h1 className="font-bold text-2xl">
                    Jose Luis Aguirre Ramirez
                </h1>
                <h1 className="font-bold text-2xl">
                    Desarrollador Backend
                </h1>
                <div className="w-fit">
                <span className="text-start">
                    Diseño soluciones de integraciones de e-commerce vtex, a través de 
                    sistemas ERP, CRM,pasarelas depago, entre otros. Manejo lenguajes, 
                    JavaScript, TypeScript, Python, Java, bases dedatos SQL y NoSQL,
                    Frameworks, VTEXIO, Nest.js, Angular, React entre otros.
                </span>
                </div>
                
                <Button type="primary" text={"Sobre Mi ->"} handleClick={handleProgileDialogClick} />
            </div>
            <div className="flex align-middle">
                <Image className='rounded-full' src='/Image/Profile.jpg' height={"150"} width={"150"} alt='Profile Image' />
            </div>

            <ProfileDialog open={dialogOpen} setDialogOpen={setDialogOpen}/>
        </div>
    )
}

export { MainProfile }