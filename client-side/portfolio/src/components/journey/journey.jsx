import { LeftJourney, RightJourney, MiddleJourney } from "./context-journey";

const Journey = () => {

    return (
        <main className="main journey">
            <div className="upper">
            <LeftJourney/>   
            <MiddleJourney/> 
            </div>
            <RightJourney/>
        </main>
    )
}
export default Journey;