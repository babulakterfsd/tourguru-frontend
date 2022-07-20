/* eslint-disable no-unused-vars */
import { Container, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../hooks/useAuth';

function Packages() {
    const { mobile, tablet, desktop } = useAuth();
    return (
        <div
            style={{
                minHeight: `90vh`,
                background: `#f5fbf9`,
                padding: mobile ? `50px 10px` : `80px 10px`,
            }}
        >
            <Container>
                <Typography color="primary" style={{ textAlign: `center` }}>
                    All Packages
                </Typography>
                <Typography
                    color="bluishDark"
                    variant="h4"
                    style={{
                        textAlign: `center`,
                        fontFamily: `abril`,
                        fontWeight: `700`,
                        color: '#283A5E',
                        letterSpacing: `-1px`,
                    }}
                >
                    Our All Packages
                </Typography>
                <Typography style={{ textAlign: `center`, fontFamily: `poppins` }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam fugit inventore
                    quaerat! Culpa, inventore. Doloribus praesentium dicta repellendus tempora
                    eligendi maxime odio soluta quae in, architecto modi maiores quas facere?
                </Typography>
            </Container>
        </div>
    );
}

export default Packages;
