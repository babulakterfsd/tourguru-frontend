/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    TextField,
    // eslint-disable-next-line prettier/prettier
    Typography
} from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import contactImg from '../assests/images/contact.jpg';
import guide1 from '../assests/images/guide1.png';
import guide2 from '../assests/images/guide2.jpg';
import guide3 from '../assests/images/guide3.png';
import guide4 from '../assests/images/guide4.png';
import useAuth from '../hooks/useAuth';
import Classes from '../styles/Contact.module.css';

function Contact() {
    const { mobile } = useAuth();

    const { register, handleSubmit, reset } = useForm();

    const handleFormSubmit = (data) => {
        const { name, phone } = data;
        if (name.length > 3 && phone.length > 7) {
            fetch('https://tourguruapi.babulakter.com/sendemail', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((respose) => {
                    if (respose?.name) {
                        Swal.fire(
                            `Tourguru has recieved your mail, ${respose?.name}. We'll reach you soon`
                        );
                        reset();
                    }
                })
                .catch((err) => Swal.fire('Something is wrong !'));
        } else {
            Swal.fire('Sorry ! your Name or Phone Number is too short');
        }
    };

    useEffect(() => {
        document.title = 'Tourguru | Contact';
    });

    return (
        <Container
            style={{ minHeight: '100vh', padding: mobile ? '15px 10px' : '50px 0px' }}
            className={Classes.controller}
        >
            <Typography
                color="primary"
                style={{ textAlign: `center` }}
                data-aos="fade-down"
                data-aos-duration="1500"
            >
                Tourguru Team
            </Typography>
            <Typography
                color="bluishDark"
                variant={mobile ? 'h5' : 'h4'}
                style={{
                    textAlign: `center`,
                    fontFamily: `abril`,
                    fontWeight: `700`,
                    color: '#283A5E',
                    letterSpacing: `-1px`,
                }}
                data-aos="fade-down"
                data-aos-duration="1500"
            >
                Our Expert Team Members
            </Typography>
            <Typography
                style={{ textAlign: `center`, fontFamily: `poppins` }}
                data-aos="fade-down"
                data-aos-duration="1500"
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam fugit inventore
                quaerat! Culpa, inventore. Doloribus praesentium dicta repellendus tempora eligendi
                maxime odio soluta quae in, architecto modi maiores quas facere?
            </Typography>
            <Box
                style={{
                    margin: !mobile ? '12px 0px' : '35px 0px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: mobile ? 'column' : 'row',
                }}
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <Card style={{ paddingBottom: '10px' }}>
                    <CardMedia component="img" image={guide1} alt="" />
                    <CardContent style={{ textAlign: 'center' }}>
                        <Typography variant="h6" color="#1a213d">
                            Dia Martinez
                        </Typography>
                    </CardContent>
                    <Box
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <a href="https://facebook.com/babulfsd" target="_blank" rel="noreferrer">
                            <FacebookIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                        <a href="https://github.com/babulakterfsd" target="_blank" rel="noreferrer">
                            <GitHubIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                        <a
                            href="https://linkedin.com/in/babulakterfsd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                        <a
                            href="https://twitter.com/babulakterfsd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TwitterIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                    </Box>
                </Card>
                <Card style={{ paddingBottom: '10px', margin: mobile ? '20px 0px' : '0px 35px' }}>
                    <CardMedia component="img" image={guide2} alt="" />
                    <CardContent style={{ textAlign: 'center' }}>
                        <Typography variant="h6" color="#1a213d">
                            Alexa Febrico
                        </Typography>
                    </CardContent>
                    <Box
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <a href="https://facebook.com/babulfsd" target="_blank" rel="noreferrer">
                            <FacebookIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                        <a href="https://github.com/babulakterfsd" target="_blank" rel="noreferrer">
                            <GitHubIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                        <a
                            href="https://linkedin.com/in/babulakterfsd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                        <a
                            href="https://twitter.com/babulakterfsd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TwitterIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                    </Box>
                </Card>
                <Card
                    style={{
                        paddingBottom: '10px',
                        margin: mobile ? '20px 0px' : '0px 35px 0px 0px',
                    }}
                >
                    <CardMedia component="img" image={guide3} alt="" />
                    <CardContent style={{ textAlign: 'center' }}>
                        <Typography variant="h6" color="#1a213d">
                            Jhon Daniel
                        </Typography>
                    </CardContent>
                    <Box
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <a href="https://facebook.com/babulfsd" target="_blank" rel="noreferrer">
                            <FacebookIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                        <a href="https://github.com/babulakterfsd" target="_blank" rel="noreferrer">
                            <GitHubIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                        <a
                            href="https://linkedin.com/in/babulakterfsd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                        <a
                            href="https://twitter.com/babulakterfsd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TwitterIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                    </Box>
                </Card>
                <Card style={{ paddingBottom: '10px', margin: mobile ? '20px 0px' : '35px 0px' }}>
                    <CardMedia component="img" image={guide4} alt="" />
                    <CardContent style={{ textAlign: 'center' }}>
                        <Typography variant="h6" color="#1a213d">
                            Erica Xenifar
                        </Typography>
                    </CardContent>
                    <Box
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <a href="https://facebook.com/babulfsd" target="_blank" rel="noreferrer">
                            <FacebookIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                        <a href="https://github.com/babulakterfsd" target="_blank" rel="noreferrer">
                            <GitHubIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                        <a
                            href="https://linkedin.com/in/babulakterfsd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                        <a
                            href="https://twitter.com/babulakterfsd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TwitterIcon
                                style={{
                                    color: '#f3680b',
                                    fontSize: '14px',
                                    borderRadius: '500px',
                                    outline: '1px solid #f3680b',
                                    outlineOffset: '3px',
                                    margin: mobile ? '0px 12px' : '0px 8px',
                                }}
                            />
                        </a>
                    </Box>
                </Card>
            </Box>
            <Box style={{ margin: mobile ? '80px 0px' : '120px 0px 0px 0px' }}>
                <Box data-aos="fade-down" data-aos-duration="1500">
                    <Typography color="primary" style={{ textAlign: `center` }}>
                        Contact
                    </Typography>
                    <Typography
                        color="bluishDark"
                        variant={mobile ? 'h5' : 'h4'}
                        style={{
                            textAlign: `center`,
                            fontFamily: `abril`,
                            fontWeight: `700`,
                            color: '#283A5E',
                            letterSpacing: `-1px`,
                        }}
                    >
                        Contact Us Anytime !
                    </Typography>
                    <Typography
                        style={{ textAlign: mobile ? 'justify' : 'center', fontFamily: `poppins` }}
                    >
                        The message you send us is sent from an automated email address. You should
                        input your correct phone number and email address so that we can reach you
                        easily. If you put any invalid phone number or email address here, we might
                        fail to contact you. After recieving your message, we will reach you back
                        within 24 hours.
                    </Typography>
                </Box>
                <Box
                    style={{
                        margin: '12px 0px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: mobile ? 'column' : 'row',
                    }}
                >
                    <Box data-aos="fade-right" data-aos-duration="1500">
                        <img
                            src={contactImg}
                            alt=""
                            style={{
                                height: !mobile ? '85%' : '100%',
                                width: !mobile ? '85%' : '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                    <Box
                        style={{ margin: mobile ? '25px 0px 15px 0px' : '0px' }}
                        component="form"
                        onSubmit={handleSubmit(handleFormSubmit)}
                        data-aos="fade-left"
                        data-aos-duration="1500"
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="name"
                                    name="name"
                                    label="Name"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                    {...register('name')}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="phone"
                                    name="phone"
                                    label="Phone"
                                    fullWidth
                                    autoComplete="phone"
                                    variant="standard"
                                    {...register('phone')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    autoComplete="email"
                                    variant="standard"
                                    {...register('email')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="subject"
                                    name="subject"
                                    label="Subject"
                                    fullWidth
                                    autoComplete="subject"
                                    variant="standard"
                                    {...register('subject')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="message"
                                    name="message"
                                    label="Message"
                                    fullWidth
                                    autoComplete="message"
                                    variant="standard"
                                    {...register('message')}
                                />
                            </Grid>
                        </Grid>
                        <Box style={{ textAlign: 'center' }}>
                            <Button
                                variant="contained"
                                type="submit"
                                style={{
                                    padding: mobile ? `12px 8px` : '14px 12px',
                                    marginTop: '25px',
                                    fontWeight: '600',
                                }}
                            >
                                {' '}
                                Send Your Message{' '}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Contact;
