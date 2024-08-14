import "./skills.css"
import { ProfileSkills, MajorSkills, SoftSkills } from "./context-skills";
import SkillCard from "./skill-card";
import ComingSoon from "../coming-soon/coming-soon"


const Skills = () => {

    return (
        <main className="main">

            <ComingSoon />
            {/* <SkillCard /> */}
        </main>
    )
}
export default Skills;


{/* <ProfileSkills />
            <div className="skills-section">
                <MajorSkills />
                <SoftSkills />
            </div> */}