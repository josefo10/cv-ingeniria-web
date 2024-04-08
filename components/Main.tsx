import { Education } from "./Education"
import { MainProfile } from "./MainProfile"
import { Myknowledge } from "./MyKnowledge"
import { Portfolio } from "./Portfolio"

const Main = () => {
    return (
        <div className="flex flex-col w-auto gap-2 px-2 items-center overflow-y-auto">
            <MainProfile />
            <Myknowledge />
            <Education />
            <Portfolio/>
        </div>


    )
}

export { Main }