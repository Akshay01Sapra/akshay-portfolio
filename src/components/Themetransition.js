import React, { useEffect, useState } from 'react';
import '../assets/styles/ThemeTransition.scss';

const ThemeTransition = ({ trigger, onComplete, previousTheme }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (trigger) {
            setShow(true);
            const timeout = setTimeout(() => {
                setShow(false);
                onComplete();
            }, 2500);
            return () => clearTimeout(timeout);
        }
    }, [trigger, onComplete]);

    const getRippleColor = () => {
        return previousTheme === 'light' ? '#121212' : '#d9d9d9 ';
    };

    return show ? (
        // <div className="theme-transition horizontal">
        //     {[...Array(10)].map((_, i) => (
        //         <div
        //             key={i}
        //             className="bar"
        //             style={{
        //                 animationDelay: `${i * 0.2}s`,
        //                 backgroundColor: getBarColor(),
        //                 opacity: 1,
        //             }}
        //         ></div>
        //     ))}
            
        // </div>
        
        // theme transition circle effects
        
         <div className="theme-transition ripple">
            <div
                className="circle"
                style={{ backgroundColor: getRippleColor() }}
            ></div>
        </div>
    ) : null;
};


export default ThemeTransition;
