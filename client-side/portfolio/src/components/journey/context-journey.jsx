import "./journey.css"
import "./journey-responsive.css"
import "../global.css"
import { JOURNEY1_LABLE, JOURNEY2_LABLE, JOURNEY3_LABLE } from "../../assets/data"

export const LeftJourney = () => {

    return (
        <div className="leftJourney">
            <div className="journey-lable lable1">{JOURNEY1_LABLE}</div>
            <div className="imageSlider"></div>
        </div>
    )
}
export const MiddleJourney = () => {

    return (
        <div className="middleJourney">
            <div className="journey-lable lable2">{JOURNEY2_LABLE}</div>

        </div>
    )
}

export const RightJourney = () => {

    return (
        <div className="rightJourney">
            <div className="journey-lable lable3">{JOURNEY3_LABLE}</div>

        </div>
    )
}