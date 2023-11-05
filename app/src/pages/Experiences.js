import AnimatedDiv from "../components/AnimatedDiv";
import Timeline from "../components/Timeline";
import Title from "../components/Title";


const Experiences = () => {
    // Animating elements using framer-motion
    const variants = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 }
    }

    const timeline_components = {
        "freelance": {
            "job_title": "Machine Learning (Freelancer)",
            "start_date": "09/2023",
            "end_date": "Present",
            "role_details": [
                "Utilized AWS SageMaker and HuggingFace Hub to fine-tune the LlaMa-2-13b model, aiming to generate news articles from bullet points or brief summaries of important events using a chatbot approach.",
                "Reduced the newspaper article editing process by over 20%."
            ],
        },
        "smlgucl": {
            "job_title": "Research Project Student",
            "start_date": "09/2022",
            "end_date": "05/2023",
            "role_details": [
                "Developed a MLP model with ML specialists to predict robotic grasp stability, using a limited amount of data.",
                "Collected a multi-modal dataset with 1000+ examples using a Linux-exclusive Python physics simulation engine.",
                "Created charts in Jupyter Notebook with Matplotlib to perform preliminary analysis and data visualization to ensure quality.",
                "Explored the influence of sample size, data dimensionality, and feature combinations on model performance.",
                "Achieved 76.3% prediction accuracy on unseen data."
            ],
        },
        "apperta": {
            "job_title": "Systems Engineer",
            "start_date": "10/2021",
            "end_date": "04/2022",
            "role_details": [
                "Led a team of 3 in a full-stack NLP project that offered NHS practitioners insights from doctor-patient conversations.",
                "Introduced word cloud and frequent topics visualization features to summarize conversations.",
                "Adapted quickly to new technologies such as Django through active self-learning to meet technical requirements."
            ],
        },
        "l4s": {
            "job_title": "Business Analyst (Part-time)",
            "start_date": "04/2020",
            "end_date": "04/2022",
            "role_details":[
                "Completed ad-hoc tasks in collecting, analysing, and visualising UK school data.",
                "Volunteered to develop a webapp prototype using Django, which were adopted by the CEO of the company."
            ],
        }
    }

    return (
        <div className="experiences-container">
            {/* Introduction */}
            <div className="introduction">
                <AnimatedDiv duration={0.75} delay={0} variants={variants}>
                    <Title size={"tiny"}>section</Title>
                </AnimatedDiv>
                <br></br>
                <AnimatedDiv class_name={"page_title"} duration={0.75} delay={0.5} variants={variants}>
                    <Title animated={false} size={"standard"}>Experiences</Title>
                    <p className="pronouciation">ɪkˈspɪə.ri.əns</p>
                </AnimatedDiv>
            </div>

            {/* List work experiences */}
            <Timeline timeline_components={timeline_components}>

            </Timeline>
        </div>
    );
}

export default Experiences;