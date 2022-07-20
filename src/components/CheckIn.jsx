/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import SelfImprovement from '@mui/icons-material/SelfImprovement';
import Skateboarding from '@mui/icons-material/Skateboarding';
import { Button, Container } from '@mui/material';
import React from 'react';
import useAuth from '../hooks/useAuth';

function CheckIn() {
    const { mobile, tablet, desktop } = useAuth();
    return (
        <div style={{ padding: mobile ? `50px 15px` : `180px 50px`, background: `#fff` }}>
            <Container
                style={{
                    padding: mobile ? `30px 10px` : `50px 10px`,
                    boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px`,
                    display: `flex`,
                    flexDirection: mobile ? `column` : tablet ? `column` : `row`,
                    justifyContent: `space-around`,
                    alignItems: `center`,
                }}
            >
                <div
                    className="checkin"
                    style={{
                        display: `flex`,
                        flexDirection: `column`,
                        justifyContent: `center`,
                        alignItems: `center`,
                        marginBottom: mobile ? `50px` : `0px`,
                    }}
                >
                    <div
                        style={{
                            display: `flex`,
                            justifyContent: `space-around`,
                            alignItems: `center`,
                            fontWeight: `900`,
                            color: `#6c757d`,
                        }}
                    >
                        <CalendarMonth style={{ marginRight: `10px` }} />
                        CheckIn
                    </div>
                    <input
                        type="date"
                        name="checkin"
                        id="checkin"
                        style={{
                            width: `250px`,
                            height: `40px`,
                            padding: `8px 20px`,
                            fontWeight: `900`,
                            marginTop: mobile ? `7px` : `15px`,
                            textAlign: `center`,
                            border: `1px solid #ccc`,
                            borderRadius: mobile ? `5px` : `0px`,
                        }}
                    />
                </div>
                <div
                    className="checkout"
                    style={{
                        display: `flex`,
                        flexDirection: `column`,
                        justifyContent: `center`,
                        alignItems: `center`,
                        marginBottom: mobile ? `50px` : `0px`,
                    }}
                >
                    <div
                        style={{
                            display: `flex`,
                            justifyContent: `space-around`,
                            alignItems: `center`,
                            fontWeight: `700`,
                            color: `#6c757d`,
                        }}
                    >
                        <CalendarMonth style={{ marginRight: `10px` }} />
                        CheckOut
                    </div>
                    <input
                        type="date"
                        name="checkout"
                        id="checkout"
                        style={{
                            width: `250px`,
                            height: `40px`,
                            padding: `8px 20px`,
                            fontWeight: `700`,
                            marginTop: mobile ? `7px` : `15px`,
                            textAlign: `center`,
                            border: `1px solid #ccc`,
                            borderRadius: mobile ? `5px` : `0px`,
                        }}
                    />
                </div>
                <div
                    style={{
                        display: `flex`,
                        justifyContent: `center`,
                        alignItems: `center`,
                        marginBottom: mobile ? `50px` : `0px`,
                    }}
                >
                    <div className="guest">
                        <div
                            style={{
                                display: `flex`,
                                justifyContent: `space-around`,
                                alignItems: `center`,
                                fontWeight: `700`,
                                color: `#6c757d`,
                                marginRight: `30px`,
                            }}
                        >
                            <Skateboarding style={{ marginRight: `2px` }} />
                            Guest
                        </div>
                        <select
                            name="guest"
                            id="adult"
                            style={{
                                height: `40px`,
                                padding: `8px 20px`,
                                fontWeight: `700`,
                                marginTop: mobile ? `7px` : `15px`,
                                border: `1px solid #ccc`,
                                color: `#283a5e`,
                                borderRadius: mobile ? `5px` : `0px`,
                            }}
                        >
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                        </select>
                    </div>
                    <div className="child">
                        <div
                            style={{
                                display: `flex`,
                                justifyContent: `space-around`,
                                alignItems: `center`,
                                fontWeight: `700`,
                                color: `#6c757d`,
                            }}
                        >
                            <SelfImprovement style={{ marginRight: `2px` }} />
                            Childs
                        </div>
                        <select
                            name="childs"
                            id="childs"
                            style={{
                                height: `40px`,
                                padding: `8px 20px`,
                                fontWeight: `700`,
                                color: `#283a5e`,
                                marginTop: mobile ? `7px` : `15px`,
                                border: `1px solid #ccc`,
                                borderRadius: mobile ? `5px` : `0px`,
                            }}
                        >
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                        </select>
                    </div>
                </div>
                <div className="isavilable">
                    <Button
                        variant="contained"
                        style={{ height: mobile ? `50px` : `80px`, fontWeight: `700` }}
                    >
                        Check Avilability
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default CheckIn;
