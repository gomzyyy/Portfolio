import "./journey.css"
import "./journey-responsive.css"
import "../global.css"
import { JOURNEY_LABLE } from "../../assets/data"

const Journey = () => {

    return (
        <main className="main journey">
            <div className="journey-lable">{JOURNEY_LABLE}</div>
        </main>
    )
}
export default Journey;