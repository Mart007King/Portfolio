
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';


export const Reveal = (props) =>
 {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect( () => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView] );


    return (
        <div ref={ref} style={{  position: 'relative', overflow: 'hidden', width: '100%' }}>
            <motion.div 
             variants={{ 
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y:0 }
             }} 
             initial = "hidden"
             animate= {mainControls}
             transition={{ duration:0.5, delay:0.25 }}
             > {props.children} </motion.div>
        </div>
    );
 }

