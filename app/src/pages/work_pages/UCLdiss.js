// Page for UCL dissertation project showcase
import Anchor from "../../components/Anchor"
import Title from "../../components/Title"

// Import media and videos
import ucl_diss_pic1 from "../../media/ucldiss1.png";
import ucl_diss_pic2 from "../../media/ucldiss2.png";
import ucl_diss_vid from "../../videos/dissertation-demo.mp4";


const UCLdiss = () => {
    return (
        <div className="ucl-container">
            <Title size={"standard"}>Robust Robotic Grasping Utilising Touch Sensing</Title>
            <br></br>
            <p>This is a machine learning and robotics vision study that I conducted during 
            my time at University College London, collaborating closely with 
            the <Anchor inline={true} href={"https://www.sml-group.cc"}>Statistical Machine 
            Learning Group at UCL</Anchor>.</p>
            <br></br>
            <p>Despite my limited familiarity with robotics, my solid understanding of machine 
            learning allowed me to quickly adapt. In my research, I delved into the concept of 
            robotic grasping, which involves a robot's capability to consistently and effectively 
            grasp objects with stability. My project had a clear objective: to achieve robustness 
            in grasping tasks using a limited amount of self-generated, multi-modal data. I also 
            undertook the task of analyzing various machine learning models to optimize the 
            performance, specifically the grasp success rate, of a robotic arm within a Python 
            simulation.</p>
            <br></br>
            <Title size={"small"}>Problem</Title>
            <br></br>
            <p>The challenge of the project is to develop a machine learning model for robotic 
            grasping with limited amount of data, which was collected semi-manually via a 
            simulation.</p>
            <br></br>
            <p>The project addresses the following main issues with the robotic grasping systems:
            a) balancing the trade-off between data representation and data dimensionality; b)
            analysing the modelling effects of different modalities, e.g. tactile and visual, and features
            to capture the underlying characteristics of the overall grasping process; c) a correction
            policy that relies on assessing grasp success before further manipulation using perceptual
            data, to choose the right grasping configuration.</p>
            {/* mention learning linux */}
            <br></br>
            <Title size={"small"}>Data Collection</Title>
            <br></br>
            <p>This project is concerned with 2 types of data:</p>
            <ul>
                <li><b>Tactile data</b> refers to rich data collected from contact with a robotic 
                hand or gripper during the manipulation of objects. Similar to human finger receptions,
                tactile data reflects the amount of force applied by the gripper on an object in the 
                grasping process.</li>
                <li><b>Visual data</b> refers to the intuitive way for a robot to perceive its 
                environment.</li>
            </ul>
            <br></br>
            <p>The following video shows how the robot setup operates in Pybullet, a Python physics
            simulation designed specifically for simulating motion physics and is widely used in robotics
            research. The tactile and visual data was collected via randomly sampled grasps by applying
            Gaussian noise to a manually-set arm configuration.</p>
            <br></br>
            <video autoPlay loop muted>
                <source src={ucl_diss_vid} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
            <br></br><br></br>
            <Title size={"small"}>Data Processing</Title>
            <br></br>
            <p>The tactile and visual data were transformed into numpy arrays which will then be fed
            into various machine learning models. They were then visualised, cleaned and validated to
            remove any abnormalities such as random noisy data.</p>
            <br></br>
            <img src={ucl_diss_pic1} alt=""></img>
            <br></br><br></br>
            <img src={ucl_diss_pic2} alt=""></img>
            <br></br><br></br>
            <Title size={"small"}>Feature Engineering & Data Pre-processing</Title>
        </div>
    )
}

export default UCLdiss