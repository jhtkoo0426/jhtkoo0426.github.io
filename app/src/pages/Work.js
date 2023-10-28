import Anchor from "../components/Anchor";
import Title from "../components/Title";
import WorkLink from "../components/WorkLink";


const Work = () => {
    return (
        <div className="work-container">
            {/* Section 01 - Landing */}
            
            {/* Section 02 - Project gallery */}
            <div className="project-gallery-container">
                <WorkLink
                    name="autoFAQ" num={1} href={"http://students.cs.ucl.ac.uk/2021/group17/index.html"}
                    description="a text-to-speech analysis tool for NHS practioners" external={true}
                    tags={["Data Visualization", "Web Development (Django)", "NLP"]}>
                </WorkLink>
                <WorkLink
                    name="UCL dissertation" num={2} href={"/ucl"}
                    description="teaching a robotic arm to grab unseen objects" external={false}
                    tags={["Robotics", "Machine Learning", "Simulation"]}>
                </WorkLink>
                <WorkLink
                    name="epidemic simulation" num={3} href={"https://github.com/jhtkoo0426/Epidemic-Simulation"}
                    description="Simulating the Impact of Human Behaviour on the Spread of Epidemics" external={true}
                    tags={["Web Development (React JS)", "Simulation"]}>
                </WorkLink>
            </div>
        </div>
    );
}

export default Work