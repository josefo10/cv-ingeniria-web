import { CardEducation } from "./CardEducation"
import { DescriptionSection } from "./DescriptionSection"

const Education = () => {
    return (
        <div className="flex flex-col gap-2">

            <DescriptionSection title="Mis conocimientos" description="En esta sección se muestran los esdios
            básicos primaria y universitarios en proces ode formación."/>

            <div className="bg-white w-full p-3 gap-2">
                <CardEducation
                    institute="Gimnasio Marroquin Campestre"
                    rol="Estudiante"
                    date=">Enero 2001 - Diciembre 2006"
                    qualification="Bachiller"
                    description="Estudio bachillerato básico" />

                <div className="bg-hv-gray w-full h-[1.5px]"></div>

                <CardEducation
                    institute="Universidad de Antioquia"
                    rol="Estudiante"
                    date="Agosto 2016 - En curso"
                    qualification="Profesional"
                    description="Pendiente" />
            </div>
        </div>
    )
}

export { Education }