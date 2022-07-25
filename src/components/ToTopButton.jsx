import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React, { useEffect, useState } from 'react';
import Classes from '../styles/ToTopButton.module.css';

function ToTopButton() {
    const [windowHeight, setWindowHeight] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setWindowHeight(window.scrollY > 500);
            console.log(windowHeight, window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [windowHeight]);

    return (
        <div>
            {/* {windowHeight && (
                <Button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={Classes.scrollToTop}
                >
                    <ArrowUpwardIcon />
                </Button>
            )} */}
            {windowHeight && (
                <ArrowUpwardIcon
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={Classes.scrollToTop}
                />
            )}
        </div>
    );
}

export default ToTopButton;
