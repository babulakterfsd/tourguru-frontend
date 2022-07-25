import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React, { useEffect, useState } from 'react';
import Classes from '../styles/ToTopButton.module.css';

function ToTopButton() {
    const [windowHeight, setWindowHeight] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setWindowHeight(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [windowHeight]);

    return (
        <div>
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
