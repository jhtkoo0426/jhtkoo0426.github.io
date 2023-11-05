import Title from "../components/Title";
import AnimatedDiv from "../components/AnimatedDiv";


const Home = () => {
    // Animating elements using framer-motion
    const variants = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 }
    }

    return (
        <div className="home-container">
            {/* Introduction */}
            <div className="introduction">
                <AnimatedDiv duration={0.75} delay={0} variants={variants}>
                    <Title size={"tiny"}>name</Title>
                </AnimatedDiv>
                <br></br>
                <AnimatedDiv class_name={"page_title"} duration={0.75} delay={0.5} variants={variants}>
                    <Title animated={false} size={"standard"}>Justin</Title>
                    <p className="pronouciation">d͡ʒʌs.tɪn</p>
                </AnimatedDiv>
                <br></br>
                <AnimatedDiv class_name={"status"} duration={0.75} delay={1} variants={variants}>
                    <div className="current-role">
                        <Title size={"tiny"}>currently</Title>
                        <p>Data Analyst, Freelancer</p>
                    </div>
                    <div className="motive">
                        <Title size={"tiny"}>motive</Title>
                        <p>Architecting the future with a foundation in data</p>
                    </div>
                </AnimatedDiv>
                <br></br><br></br><br></br>
                <Title>How I Work.</Title>
                <br></br>
                <div>
                    <p>I approach every challenge with curiosity and a growth mindset. I believe that
                    the rapid evolution of technology requires continuous learning and adaptation. I
                    stay up-to-date with the latest industry trends and embrace emerging technologies
                    to stay ahead of the curve.</p>
                    <br></br>
                    <p>My experience comes from working with multi-disciplinary teams and projects 
                    to solve real-life problems through data analytics and computing skills. During 
                    projects, I maintain frequent communication between teammates and clients to 
                    ensure everyone works on the same page.</p>
                </div>
            </div>
        </div>
    );
}

export default Home