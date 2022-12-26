import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import ReceiptIcon from '@mui/icons-material/Receipt';
import resume from './assets/Dharmarajan_Karthik_Resume.pdf'
import { Box } from '@mui/material';
import CloseImage from './assets/CloseImage.jpg';
import GoogleIcon from '@mui/icons-material/Google';
import { useCallback } from 'react';
import Typography from '@mui/material/Typography';

const ContactSegmentButton = styled(Button, {
    shouldForwardProp: (_) => true
    })(({theme}) => ({
        margin: 'auto',
        color: theme.palette.text.main,
        textTransform: 'none',
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
        '&:hover': {
            border: '1px solid',
            borderColor: theme.palette.secondary.main  
        }        
    }));

function ContactButtons(props) {
    const clickCallbackLinkedIn = useCallback(() => {
        window.open('https://www.linkedin.com/in/karthik-dharmarajan/');
    }, []);

    const clickCallbackGitHub = useCallback(() => {
        window.open('https://github.com/KDharmarajanDev/');
    }, []);

    const showResume = useCallback(() => {
        window.open(resume);
    }, []);

    const clickCallbackGoogleScholar = useCallback(() => {
        window.open("https://scholar.google.com/citations?user=V6e6hncAAAAJ");
    }, []);

    return (<Grid container id="contact-segment-container" align="center" justify="center" spacing={1} wrap="wrap" direction="row" alignItems="center">
                <Grid item>
                    <ContactSegmentButton variant="outlined" onClick={clickCallbackLinkedIn} startIcon={<LinkedInIcon/>}>
                        LinkedIn
                    </ContactSegmentButton>
                </Grid>
                <Grid item>
                    <ContactSegmentButton variant="outlined" onClick={clickCallbackGitHub} startIcon={<GitHubIcon/>}>
                        GitHub
                    </ContactSegmentButton>
                </Grid>
                <Grid item>
                    <ContactSegmentButton variant="outlined"
                        onClick={clickCallbackGoogleScholar} startIcon={<GoogleIcon/>}>
                        Google Scholar
                    </ContactSegmentButton>
                </Grid>
                <Grid item>
                    <ContactSegmentButton variant="outlined"
                        onClick={showResume} startIcon={<ReceiptIcon/>}>
                        Resume
                    </ContactSegmentButton>
                </Grid>
            </Grid>);
}

export default function ContactSegment(props) {
    return (
        <Grid container spacing={2} 
            justifyContent="center"
            alignItems="center"
            direction="column"
            sx={{
                position: "fixed",
                width: "25%",
                padding: "10px"
            }}>
            <Grid item>
                <Box
                    component="img"
                    sx={{ 
                        borderRadius: 5,
                        height: 150,
                        width: 150,
                        maxHeight: { xs: 100, md: 150 },
                        maxWidth: { xs: 100, md: 150 },
                        }}
                    alt="Close up photo of Karthik."
                    src={CloseImage}
                />
            </Grid>
            <Grid item>
                <Typography variant="h3" sx={{ 
                    textAlign: "center",
                    fontFamily: "'Playfair Display', serif"
                }}
                >
                    Karthik Dharmarajan
                </Typography>
            </Grid>
            <Grid item>
                <ContactButtons/>
            </Grid>
        </Grid>
    );
}