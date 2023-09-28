import Anchor from "../components/Anchor";
import Title from "../components/Title";
import { motion } from "framer-motion";

import julius from "../media/julius.png";


const Home = () => {
    // Animating elements
    const variants = {
        text: {
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -200 }, 
            transition: { delay: 0.25}
        },
        julius: {
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 200 }, 
            transition: { delay: 0.25, duration: 5}
        }
    }

    return (
        <motion.div className="home-container" exit={{ opacity: 0 }}>
            {/* Section 01 - Landing */}
            <div className="landing">
                {/* Circular background aesthetic */}
                <div className="background"></div>
                <div className="landing-content">
                    <div className="landing-intro">
                        <Title animated={true} size={"huge"}>an analytical mind who explores</Title>
                        <br></br><br></br>
                        <motion.p initial="hidden" animate="visible" variants={variants.text}>Hi! I'm Justin, a Computer Science Graduate architecting the future with a
                        foundation in data, based in the UK.</motion.p>
                        <br></br>
                        <Anchor id="landing-work-link" underline={false} href="/work">
                            see my works<span></span>
                        </Anchor>
                    </div>
                    <div className="landing-art">
                        <motion.img src={julius} alt="" initial="hidden" animate="visible" variants={variants.julius}></motion.img>
                    </div>
                </div>
            </div>

            {/* Section 03 - How I Work */}
            <div className="how-i-work">
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
                    <br></br>
                    <p>I prefer to listen carefully before providing solutions and analytics with 
                    a perfect blend of preferences of my partners/clients, my experience, research 
                    and best practices.</p>
                </div>
            </div>

            {/* Section 04 - Skillset & Tools */}
            <div className="skillset">
                <Title>My Skillset.</Title>
                <br></br>
                <div className="skillset-content">
                    <p>I use a collection of tools that makes during development and analysis much easier across
                    during ML and Data Analysis projects.</p>
                    <br></br><br></br>
                    <div className="tools-container">
                        <div>
                            <Title size="tiny">Software & Tools</Title>
                            <br></br>
                            <div>
                                <p>Python</p>
                                <p>Java</p>
                                <p>MySQL</p>
                                <p>BigQuery</p>
                            </div>
                        </div>
                        <div>
                            <Title size="tiny">Machine Learning Tools</Title>
                            <br></br>
                            <div>
                                <p>scikit-learn</p>
                                <p>keras</p>
                                <p>PyTorch</p>
                                <p>NumPy</p>
                                <p>Jupyter</p>
                            </div>
                        </div>
                        <div>
                            <Title size="tiny">Web Development</Title>
                            <br></br>
                            <div>
                                <p>HTML 5</p>
                                <p>CSS</p>
                                <p>JavaScript</p>
                                <p>React JS</p>
                                <p>Django</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home