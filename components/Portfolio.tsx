import { CardPortfolio } from "./CardPortfolio"
import { DescriptionSection } from "./DescriptionSection"

const Portfolio = () => {
    return (
        <div className="flex flex-col">
            <DescriptionSection title="Portafolio" description="En esta sección se muestran algunos proyectos personales
            y algunos proyectosde la universidad. "/>


            <div className="overflow-x-auto flex flex-row gap-8">

                <CardPortfolio Title="Proyecto Cafecito" Description="Proyecto integrador que permite diseñar y controlar
                los recursos para cultivos de cafe" srcImage="/Image/Profile.jpg" />

                <CardPortfolio Title="Proyecto Imagenes" Description="Apliacción que identifica imagenes etiquetando con prbabilidades
                Que tipo de imagen es, entrenando modelos y usando una base de datos de mas de 15.000 imagenes." srcImage="/Image/Profile.jpg" />

                <CardPortfolio Title="Proyecto Escuela" Description="Proyecto para tomar asistencia y nota de estudiantes de colegios." srcImage="/Image/Profile.jpg" />

                <CardPortfolio Title="Proyecto Cafecito" Description="Proyecto integrador que permite diseñar y controlar
                los recursos para cultivos de cafe" srcImage="/Image/Profile.jpg" />

                <CardPortfolio Title="Proyecto Imagenes" Description="Apliacción que identifica imagenes etiquetando con prbabilidades
                Que tipo de imagen es, entrenando modelos y usando una base de datos de mas de 15.000 imagenes." srcImage="/Image/Profile.jpg" />

                <CardPortfolio Title="Proyecto Escuela" Description="Proyecto para tomar asistencia y nota de estudiantes de colegios." srcImage="/Image/Profile.jpg" />
            </div>
        </div>
    )
}

export { Portfolio }