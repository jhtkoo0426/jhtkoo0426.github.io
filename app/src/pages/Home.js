// Home.js template
// Import core libraries
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import components
import Anchor from '../components/Anchor';
import Title from "../components/Title";

// Import media
import work from '../media/nlp.png'



const Home = () => {
    // Monitoring scrolling position
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(0);   // 1 for down, 0 for up

    // Monitoring the # of mouse wheel scrolls, min = 0.
    const [scrollCount, setScrollCount] = useState(0);

    // Animating the background based on # of mouse wheel scrolls
    const bgContainerRef = useRef(null);
    const bgAnimation = useAnimation();

    const titleContainerRef = useRef(null);
    const titleAnimation = useAnimation();

    const introContainerRef = useRef(null);
    const introAnimation = useAnimation();

    const homeIntroContainerRef = useRef(null);
    const homeContentAboutContainerRef = useRef(null);
    const homeContentAnimation = useAnimation();

    // Methods
    const handleScroll = (event) => {
        const position = window.scrollY;
        const direction = event.deltaY / 100;
        setScrollPosition(position);

        // Determine scroll direction and update scroll count
        if (direction === 1) {      // Scrolling down
            setScrollDirection(1)
            setScrollCount((prevCount) => Math.max(prevCount + 1, 0));
        } else {                     // Scrolling up
            setScrollDirection(0)
            setScrollCount((prevCount) => Math.max(prevCount - 1, 0));
        }
    };

    const getContainerDimensions = (element) => {
        const rect = element.getBoundingClientRect();
        return { width: rect.width, height: rect.height };
    };

    // Use effects
    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    useEffect(() => {
        const homeContainerDimensions = getContainerDimensions(homeIntroContainerRef.current);
        var animationWithDelay = 0.25;
        var triggerAnimationMinScrolls = 1;

        const checkTriggerAnimationScrolls = (num_scrolls) => {
            return scrollCount >= num_scrolls;
        }

        // Properties for title animation
        const titleAnimationProperties = {
            x: checkTriggerAnimationScrolls(triggerAnimationMinScrolls) ? homeContainerDimensions['width'] * 0.4 : 0,
            transition: { duration: 1, ease: [0.7, 0.2, 0.2, 0.85] },
        };

        // Properties for background animation
        const bgAnimationProperties = {
            width: checkTriggerAnimationScrolls(triggerAnimationMinScrolls) ? '100%' : '50%',
            transition: { duration: 0.5, ease: [0.7, 0.2, 0.2, 0.85] },
        };

        // Properties for intro animation
        const introAnimationProperties = {
            opacity: checkTriggerAnimationScrolls(triggerAnimationMinScrolls) ? 1 : 0,
            transition: { duration: 1 },
        };

        // Properties for home-content container animation
        const homeContentAnimationProperties = {
            opacity: checkTriggerAnimationScrolls(5) ? 1 : 0,
            transition: { duration: 0.75 },
        };

        // Adjust properties based on scrollDirection
        if (scrollDirection === 1) {    // Scroll down
            titleAnimationProperties.transition.delay = 0;
            bgAnimationProperties.transition.delay = 0;
            introAnimationProperties.transition.delay = animationWithDelay;
            homeContentAnimationProperties.transition.delay = animationWithDelay;
        } else {    // Scroll up
            titleAnimationProperties.transition.delay = animationWithDelay;
            bgAnimationProperties.transition.delay = animationWithDelay;
            introAnimationProperties.transition.delay = 0;
            homeContentAnimationProperties.transition.delay = 0;
            homeContentAnimationProperties.transition.duration = 0;
        }

        // Deploy animations
        titleAnimation.start(titleAnimationProperties);                 // Animate "HELLO" introduction
        bgAnimation.start(bgAnimationProperties);                       // Animate theme colour background transition
        introAnimation.start(introAnimationProperties);                 // Animate self-introduction container
        homeContentAnimation.start(homeContentAnimationProperties);     // Animate the home-container
        
    }, [scrollCount, scrollPosition, scrollDirection, bgAnimation, titleAnimation, introAnimation, homeContentAnimation]);

    return (
        <div className='home-container'>
            {/* Landing introduction for the homepage */}
            <div className='home-intro' ref={homeIntroContainerRef} style={{position: scrollCount < 5 ? 'fixed' : 'absolute'}}>
                <motion.div className='surface' ref={titleContainerRef} animate={titleAnimation}>
                    <div>
                        <Title size="huge" font="inter">He</Title>
                        <Title size="huge" font="inter">llo<span className='dot'>.</span></Title>
                    </div>
                </motion.div>
                <motion.div className='background' ref={bgContainerRef} animate={bgAnimation}></motion.div>
                <motion.div className='intro' ref={introContainerRef} animate={introAnimation}>
                    <p className='pronounce'><span></span>d͡ʒʌs.tɪn</p>
                    <Title size="standard">Justin is a Computer Science graduate architecting the future with a foundation in data, <span>based in the UK</span>.</Title>
                </motion.div>
            </div>

            {/* Core content for the homepage */}
            <div className='home-content'>
                <motion.div className='about' ref={homeContentAboutContainerRef} animate={homeContentAnimation}>
                    <div className='title-top'></div>
                    <Title size="huge" font="inter" with_top={true} top_color='theme'>DIG</Title>
                    <Title size="huge" font="inter">ITAL.</Title>
                    <div className='about-work-style'>
                        <Title>An <span className='italic'>overview</span></Title>
                        <Title>of how I work<span className='dot'>.</span></Title>
                        <br></br><br></br>
                        <p>I approach every challenge with curiosity and a growth mindset. I believe that the rapid 
                        evolution of technology requires continuous learning and adaptation. I stay up-to-date with 
                        the latest industry trends and embrace emerging technologies to stay ahead of the curve.</p>
                    </div>
                    <motion.div className='about-skillset'>
                        <div>
                            <Title size="small">Scripting Languages</Title>
                            <p>Python</p>
                            <p>Java</p>
                            <p>HTML, CSS, JavaScript</p>
                        </div>
                        <div>
                            <Title size="small">AI & Machine Learning</Title>
                            <p>AWS (S3, SageMaker)</p>
                            <p>NLP (LLM Fine-Tuning)</p>
                            <p>ML Models (MLPs, etc)</p>
                        </div>
                        <div>
                            <Title size="small">Data Analytics</Title>
                            <p>R</p>
                            <p>Tableau</p>
                            <p>Microsoft Excel</p>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div className='work'>
                    <div className='work-title'>
                        <Title size="huge" font="inter" with_top={true}>I</Title>
                        <Title size="huge" font="inter">NNO.</Title>
                    </div>
                    <div className='work-subtitle'>
                        <Title><span className='italic'>Unleashing data</span></Title>
                        <Title>innovation <span className='dot'>.</span></Title>
                    </div>
                    <div className='project-carousel'>

                    </div>
                    <div className='work-description'>
                        <p>Embarking on a data-driven journey, I specialize in leveraging cutting-edge techniques to extract meaningful insights, solve 
                        complex problems, and drive innovation in the realms of data analysis and machine learning engineering.</p>
                        <Anchor>See my work</Anchor>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
