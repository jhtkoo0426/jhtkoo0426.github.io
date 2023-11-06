import AnimatedDiv from "../components/AnimatedDiv";
import ProjectShowcase from "../components/ProjectShowcase";
import Title from "../components/Title";


const Projects = () => {
    // Animating elements using framer-motion
    const variants = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 }
    }

    return (
        <div className="projects-container">
            {/* Introduction */}
            <div className="introduction">
                <AnimatedDiv duration={0.75} delay={0} variants={variants}>
                    <Title size={"tiny"}>section</Title>
                </AnimatedDiv>
                <br></br>
                <AnimatedDiv class_name={"page_title"} duration={0.75} delay={0.5} variants={variants}>
                    <Title animated={false} size={"standard"}>Projects</Title>
                    <p className="pronouciation">pɹəˈd͡ʒɛkt</p>
                </AnimatedDiv>
            </div>
            <br></br>

            {/* List of projects */}
            <ProjectShowcase
                delay={0.25}
                href={"/ucl"}
                external={false}
                variants={variants}
                project_title={"Dissertation Project"}
                year={2023}
                description={"Predicting the grasp stability of a robotic arm from multi-modal data"}
                tags={["Robotics", "Machine Learning", "Simulation"]}>
            </ProjectShowcase>
            <ProjectShowcase
                delay={0.5}
                href={"https://github.com/jhtkoo0426/Epidemic-Simulation"}
                external={true}
                variants={variants}
                project_title={"Epidemic Simulation"}
                year={2023}
                description={"Simulating the impact of human behaviour on the spread of epidemics"}
                tags={["Web Development (React JS)", "Simulation"]}>
            </ProjectShowcase>
            <ProjectShowcase
                delay={0.75}
                href={"http://students.cs.ucl.ac.uk/2021/group17/index.html"}
                external={true}
                variants={variants}
                project_title={"AutoFAQ"}
                year={2022}
                description={"A text-to-speech analysis tool for nhs practitioners"}
                tags={["Data Visualization", "Web Development (Django)", "NLP"]}
            ></ProjectShowcase>
        </div>
    )
}

export default Projects