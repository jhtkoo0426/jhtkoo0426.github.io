// Page for UCL dissertation project showcase
import Anchor from "../../components/Anchor"
import Title from "../../components/Title"

// Import media and videos
import ucl_diss_pic1 from "../../media/ucldiss1.png";
import ucl_diss_pic2 from "../../media/ucldiss2.png";
import ucl_diss_pic3 from "../../media/ucldiss3.png";
import ucl_diss_pic4 from "../../media/ucldiss4.png";
import ucl_diss_pic5 from "../../media/ucldiss5.png";
import ucl_diss_pic6 from "../../media/ucldiss6.png";
import ucl_diss_pic7 from "../../media/ucldiss7.png";
import ucl_diss_pic8 from "../../media/ucldiss8.png";
import ucl_diss_vid from "../../videos/dissertation-demo.mp4";


const UCLdiss = () => {
    return (
        <div className="ucl-container">
            <Title size={"standard"}>Robust Robotic Grasping Utilising Touch Sensing</Title>
            <br></br>
            <p>This is a machine learning and robotics vision study that I conducted during 
            my time at University College London, collaborating closely with 
            the <Anchor inline={true} href={"https://www.sml-group.cc"}>Statistical Machine 
            Learning Group at UCL</Anchor>. For further reading, please refer to 
            my <Anchor inline={true} href={"https://github.com/jhtkoo0426/UCL-FYP"}>GitHub repository</Anchor>,
            or the <Anchor inline={true} href={"https://github.com/jhtkoo0426/UCL-FYP/blob/master/docs/Project%20Report/fyp_project_report.pdf"}>official 
            dissertation</Anchor> of this study.</p>
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
            Gaussian noise to a manually-set arm configuration. Different objects were used for data collection
            to keep the dataset balanced. Additionally, the outcomes of each grasp (successful, unsuccessful)
            were also recorded, which will be used as training labels in further sections.</p>
            <br></br>
            <video autoPlay loop muted>
                <source src={ucl_diss_vid} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
            <br></br><br></br>
            <Title size={"small"}>Data Processing</Title>
            <br></br>
            <p>The tactile and visual data were stored in numpy arrays during data collection. They were 
            then visualised, cleaned and validated to remove any abnormalities such as random noisy data.</p>
            <br></br>
            <img src={ucl_diss_pic1} alt=""></img>
            <br></br><br></br>
            <img src={ucl_diss_pic2} alt=""></img>
            <br></br><br></br>
            <Title size={"small"}>Feature Engineering & Data Pre-processing</Title>
            <br></br>
            <p>To access the efficacy of utilising the multi-modal dataset, I experimented with different
            combinations of the tactile and visual data to determine the best representation for my analysis.
            This is done by creating a baseline linear regression machine learning model and feeding the various
            transformed datasets. 3 combinations of the multi-modal dataset were put to the test: tactile data 
            only, visual data only, and concatenated tactile and visual data.</p>
            <br></br>
            <p>Next, I applied various dimensionality reduction techniques to reduce the computational costs
            for training the model. This includes principcal component analysis (with k=5) components and feature
            extraction using a 3-layer convolutional neural network, interleaved with 2x2 pooling kernels.</p>
            <br></br>
            <p>The following is a summary of the training results using the aforementioned dataset variations and
            transformations:</p>
            <br></br>
            <img src={ucl_diss_pic3} alt=""></img>
            <br></br><br></br>
            <p>Based on these results, I was able to determine that extracting features from the dataset
            using a ConvNet and selecting only the top 5 components provides comparable accuracy with a significantly
            lower data dimensionality. This formed the basis for actual training in further sections of the project.</p>
            <br></br>
            <Title size={"small"}>Multilayer Perceptron for Grasp Stability Prediction</Title>
            <br></br>
            <p>I chose to use a MLP to predict whether a grasp configuration (finger positions and angles) would 
            infer a stable and successful grasp. This is because MLPs are well-suited to learn non-linear relationships
            between input and output data, making them suitable for identifying patterened configurations from complex
            datasets and generalising simple grasping strategies for different object types. For example, grasping an
            object around its centre of gravity can minimise rotational forces that could cause it to tilt and increase 
            the likelihood of a successful grasp. In this context, my MLP-based approach extracts important features 
            from tactile and visual data using an identical ConvNet architecture, from which I extract the top 5
            principal components to represent the extracted features.</p>
            <br></br>
            <p>A new, larger dataset was collected using the same pipeline in my simulation. To enhance the robustness
            of the model, I collected data on three primitive object categories (box, cylinder, bottle) which aims to
            collectively represent a sizeable proportion of daily-life objects. For each object category, I generated 3
            variations, each with slighty different dimensions and sizes.</p>
            <br></br>
            <img src={ucl_diss_pic4} alt=""></img>
            <br></br><br></br>
            <p>Next, we apply the same dataset transformations during our baseline training to this new model to reduce
            dimensionality. This decision becomes evidently important as our dataset size has increased from 200 (baseline)
            to 1440 samples.</p>
            <br></br>
            <Title size={"tiny"}>Experimenting on impacts of various object features</Title>
            <br></br>
            <p>Before training our MLP, I experimented on the robustness of the MLP to primitive object classes to 
            determine the influence of sample size and object classes on the model's performance.</p>
            <br></br>
            <img src={ucl_diss_pic5} alt=""></img>
            <br></br><br></br>
            <p>As expected, the MLP model’s precision decreases when it is trained on single primitive object classes
            rather than a collective dataset of multiple object classes.</p>
            <br></br>
            <p>On the other hand, I also analysed the impact of sample size on the prediction accuracy of the model. In
            general, I found out that as the size of the training data set increases, the performance of the MLP model 
            improves due to its ability to learn more complex patterns in the data. However, adding more data may also 
            increase the computational cost of training the model, and there may be a point of diminishing returns where 
            adding more data does not lead to a significant improvement in accuracy.</p>
            <br></br>
            <img src={ucl_diss_pic6} alt=""></img>
            <br></br><br></br>
            <Title size={"standard"}>Results</Title>
            <br></br>
            <p>Finally, considering different dataset combinations and transform techniques, I was able to gather informed
            results on which factors impact model accuracy the most:</p>
            <br></br>
            <img src={ucl_diss_pic7} alt=""></img>
            <br></br><br></br>
            <p>The results indicated that adding object features to the dataset marginally improved the MLP model’s 
            predictive accuracy. Based on these results, we attempt to apply PCA to the complete dataset and reduce 
            the input size to 5 principal components.</p>
            <br></br>
            <img src={ucl_diss_pic8} alt=""></img>
            <br></br><br></br>
            <p>Since this experimentation aims to balance the trade-off between dataset dimensionality and accuracy, I 
            disregarded the corresponding model for k = 28 and concluded that k = 16 principal components results in the 
            attainment of the most elevated mean validation accuracy (76.25% on average across 5 trials) utilising the 
            MLP model. This selection represents a judicious choice, as it reduces the dimensionality of the dataset from 
            (1440, 512) to (1440, 16), while preserving and even enhancing the general level of accuracy.</p>
            <br></br>
            <Title size={"standard"}>Addressing limitations</Title>
            <br></br>
            <p>This study was subject to the relatively modest sample size of the dataset we collected. This shortcoming 
            may have exerted an impact on the accuracy of our findings. The source of this limitation is primarily attributed 
            to the data collection pipeline in Pybullet, which demands a substantial amount of time to gather adequate data 
            for the purpose of training. This arises from our approach of generating random hand configurations for grasping, 
            and imposing constraints on the collection process to yield a balanced dataset (namely, an equal number of 
            successful and unsuccessful grasps).</p>
        </div>
    )
}

export default UCLdiss