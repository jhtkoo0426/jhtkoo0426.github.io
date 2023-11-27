import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

import Title from "../components/Title";


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

        // Common properties for title animation
        const commonTitleAnimationProperties = {
            x: checkTriggerAnimationScrolls(triggerAnimationMinScrolls) ? homeContainerDimensions['width'] * 0.4 : 0,
            transition: { duration: 1, ease: [0.7, 0.2, 0.2, 0.85] },
        };

        // Common properties for background animation
        const commonBgAnimationProperties = {
            width: checkTriggerAnimationScrolls(triggerAnimationMinScrolls) ? '100%' : '50%',
            transition: { duration: 0.5, ease: [0.7, 0.2, 0.2, 0.85] },
        };

        // Common properties for intro animation
        const commonIntroAnimationProperties = {
            opacity: checkTriggerAnimationScrolls(triggerAnimationMinScrolls) ? 1 : 0,
            transition: { duration: 1 },
        };

        // Adjust properties based on scrollDirection
        if (scrollDirection === 1) {
            commonTitleAnimationProperties.transition.delay = 0;
            commonBgAnimationProperties.transition.delay = 0;
            commonIntroAnimationProperties.transition.delay = animationWithDelay;
        } else {
            commonTitleAnimationProperties.transition.delay = animationWithDelay;
            commonBgAnimationProperties.transition.delay = animationWithDelay;
            commonIntroAnimationProperties.transition.delay = 0;
        }

        // Deploy animations
        titleAnimation.start(commonTitleAnimationProperties);   // Animate "HELLO" introduction
        bgAnimation.start(commonBgAnimationProperties);         // Animate theme colour background transition
        introAnimation.start(commonIntroAnimationProperties);   // Animate self-introduction container

        
    }, [scrollCount, scrollDirection, bgAnimation, titleAnimation, introAnimation]);

    return (
        <div className='home-container'>
            <div className='home-intro' ref={homeIntroContainerRef} style={{position: scrollCount < 5 ? 'fixed' : 'relative'}}>
                <motion.div className='surface' ref={titleContainerRef} animate={titleAnimation}>
                    <h1 className='title'>
                        <p>he</p>
                        <p>llo</p>
                    </h1>
                </motion.div>
                <motion.div className='background' ref={bgContainerRef} animate={bgAnimation }></motion.div>
                <motion.div className='intro' ref={introContainerRef} animate={introAnimation}>
                    <p className='pronounce'><span></span>d͡ʒʌs.tɪn</p>
                    <Title>Justin is a Computer Science graduate architecting the future with a foundation in data, <span>based in the UK</span>.</Title>
                </motion.div>
            </div>
            <div className='main-content'>
                <h1>Main content</h1>
            </div>
        </div>
    );
};

export default Home;
