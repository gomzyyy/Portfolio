import "./skill-card.css"
import { MajorSkillsData } from "../../assets/data";

const SkillCard = () => {
   const data = MajorSkillsData[0];
   console.log(data)



    return (
        <div className="skill-container">
            <div className="skill-detail">
                <div className="skill-title">{data.skills} :</div>
                <div className="skill-summary">HTML is the most basic requirment for web development and keeping this in mind, I have learnt the HTML from baisc to advance. I am confident enough to rate my self <span className="rating">a solid 4.8 out of 5.</span></div>
            </div>

            <div className="skill-project">
                <span className="project-title">Projects<span className="project-count">({data.projects}):</span></span>
                <div className="project-name">
                    <span className="project">{data.projectName.join(", ")}, (style-script dependencies : {data.ref==="" ? "N/A" : data.ref})</span>
                </div>
            </div>
        </div>
    )
}
export default SkillCard;