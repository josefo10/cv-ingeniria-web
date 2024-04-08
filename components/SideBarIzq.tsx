import { About } from "./About"
import { Profile } from "./Profile"
import { ProgressBar } from "./ProgressBar"
import { Skills } from "./Skills"
import { PiSubtractSquareDuotone } from 'react-icons/pi';


const SideBarIzq = () => {
    return (
        <aside className="bg-white w-1/4 p-4">

            <div className=" flex flex-col items-center gap-3">
                <div className="pt-4">
                    <Profile Name="Jose Luis Aguirre Ramirez" Rol="Desarrollador Backend" />
                </div>

                <div className="bg-hv-gray w-full h-[1.5px]"></div>

                <div className="flex flex-col w-[220px]">
                    <About Title="Edad:" Description="34" />
                    <About Title="Residencia:" Description="Colombia, Medellín" />
                    <About Title="Cargo:" Description="Desarrollador Backend" />
                    <About Title="Dirección:" Description="Cr 50d 65-29" />
                </div>

                <div className="bg-hv-gray w-full h-[1.5px]"></div>

                <div className="w-full">
                    <span className="font-semibold h-[1.5px]"> Idiomas</span>
                    <ProgressBar Title="Spanish" Percentage="95" />
                    <ProgressBar Title="English" Percentage="40" />
                </div>

                <div className="bg-hv-gray w-full h-[1.5px]"></div>

                <div className="w-full">
                    <span className="font-semibold h-[1.5px]">Lemguajes de programación</span>
                    <ProgressBar Title="C#" Percentage="40" />
                    <ProgressBar Title="Java" Percentage="50" />
                    <ProgressBar Title="Javascript" Percentage="90" />
                    <ProgressBar Title="CSS" Percentage="35" />
                    <ProgressBar Title="HTML" Percentage="40" />
                </div>

                <div className="bg-hv-gray w-full h-[1.5px]"></div>

                <div className="w-full">
                    <span className="font-semibold h-[1.5px]">Habilidades Extras</span>
                    <Skills IconComponent={PiSubtractSquareDuotone} skill="Liderazgo"/>
                </div>

            </div>
        </aside>
    )
}

export { SideBarIzq }