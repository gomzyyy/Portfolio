import "./journey.css"
import "./journey-responsive.css"
import "../global.css"
// import { Link } from "react-router-dom"
import { SCHOOL_JOURNEY_TITLE, COLLAGE_JOURNEY_TITLE, CODING_JOURNEY_TITLE, SCHOOL_JOURNEY_BREIF1,SCHOOL_JOURNEY_BREIF2, COLLAGE_JOURNEY_BREIF1,COLLAGE_JOURNEY_BREIF2, CODING_JOURNEY_BREIF1, CODING_JOURNEY_BREIF2, CODING_JOURNEY_BREIF3 } from "../../assets/data"

export const SchoolJourney = () => {

    return (
        <div className="schoolJourney">
            <div className="journey-lable lable1">{SCHOOL_JOURNEY_TITLE}</div>
            <div className="breif-container b-container1">
                <div className="imageSlider slide1"><img src="./school-guy.png" className="school-img journey-img" /></div>
                <div className="journey-breif breif1">
                    <p>"{SCHOOL_JOURNEY_BREIF1}..."</p>
                    <p>"{SCHOOL_JOURNEY_BREIF2}..."</p>
                    <div className="btn-readMore">Read</div>
                </div>
            </div>
        </div>
    )
}

export const CollageJourney = () => {

    return (
        <div className="collageJourney">
            <div className="journey-lable lable3">{COLLAGE_JOURNEY_TITLE}</div>
            <div className="breif-container b-container2">
                <div className="imageSlider slide2"><img src="./collage-guy.png" className="collage-img journey-img" /></div>
                <div className="journey-breif breif2">
                    <p>"{COLLAGE_JOURNEY_BREIF1}..."</p>
                    <p>"{COLLAGE_JOURNEY_BREIF2}..."</p>
                    <div className="btn-readMore">Read</div>
                </div>
            </div>
        </div>
    )
}

export const CodingJourney = () => {

    return (
        <div className="codingJourney">
            <div className="journey-lable lable2">{CODING_JOURNEY_TITLE}</div>
            <div className="breif-container b-container3">
                <div className="imageSlider slide3">
                    <img src="./coding-guy.png" className="coding-img img1" />
                    <img src="./coding-guy3.png" className="coding-img img2" />
                    <img src="./coding-guy2.png" className="coding-img img3" />
                </div>
                <div className="journey-breif breif3">
                    <p>"{CODING_JOURNEY_BREIF1}..."</p>
                    <p>"{CODING_JOURNEY_BREIF2}..."</p>
                    <p>"{CODING_JOURNEY_BREIF3}..."</p>
                    <div className="btn-readMore">Read</div>
                </div>
            </div>
        </div>
    )
}