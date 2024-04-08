import { Card } from "./Card"
import { DescriptionSection } from "./DescriptionSection";
import { SiVtex } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { GrIntegration } from "react-icons/gr";
import { MdArchitecture } from "react-icons/md";


const Myknowledge = () => {
    return (
        <div className="flex flex-wrap items-center gap-2">
            
        
            <DescriptionSection title="Mis conocimientos" description="En esta sección se muestran los conocimientos
                    que he adquirido a lo largo de mi formación universitaría, así como
                    tambien conocimientos adquiridos por experiencia laboral."/>

            <div className="grid grid-cols-3 gap-2">

                <Card
                    Icon={GrIntegration}
                    knowledge="Desarollo integraciones"
                    description="Diseño y desarrollo de integraciones con sistemas ERP, CMS y pasarelas de pago." />

                <Card
                    Icon={FaDatabase}
                    knowledge="Manejo de bases de datos"
                    description="Manejo de bases de datos SQL y noSQL." />

                <Card
                    Icon={SiVtex}
                    knowledge="VTEX"
                    description="Manejo de la plataforma de e-commerce VTEX." />

                <Card
                    Icon={MdArchitecture}
                    knowledge="Diseño de arquitectura"
                    description="Diseñar y configurar arquitecturas e infraestructura." />
            </div>
        </div>
    )
}

export { Myknowledge }