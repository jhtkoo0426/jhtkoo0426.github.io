// Momentum scroll source code:
// https://medium.com/@d_vsh/craft-a-smooth-momentum-scrolling-experience-with-react-and-framer-motion-72533d3cfc92
import React, { useRef, useState, useCallback, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { useScroll, useTransform, useSpring, motion, SpringOptions } from "framer-motion";

interface MomentumScrollProps {
    children: React.ReactNode;
}

const MomentumScroll = ({ children }: MomentumScrollProps): JSX.Element => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollableHeight, setScrollableHeight] = useState<number>(0);

    const resizeScrollableHeight = useCallback(
        (entries: ResizeObserverEntry[]) => {
            for (let entry of entries) {
                setScrollableHeight(entry.contentRect.height);
            }
        }, []
    );

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>
            resizeScrollableHeight(entries)
        );

        scrollRef.current && resizeObserver.observe(scrollRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    const { scrollY } = useScroll();
    const negativeScrollY = useTransform(scrollY, [0, scrollableHeight], [0, -scrollableHeight]);
    const springPhysics: SpringOptions = {
        damping: 25,
        mass: 0.1,
        stiffness: 150,
        bounce: 5,
        duration: 0.6,
        velocity: 400,
    };

    const springNegativeScrollY = useSpring(negativeScrollY, springPhysics);

    return (
        <>
            <motion.div
                ref={scrollRef}
                style={{ y: springNegativeScrollY }}
                className="scroll-container">
                {children}
            </motion.div>

            <div style={{ height: scrollableHeight * 0.8 }} />
        </>
    );
};


export default MomentumScroll;