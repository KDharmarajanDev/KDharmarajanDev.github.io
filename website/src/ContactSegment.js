import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import ReceiptIcon from '@mui/icons-material/Receipt';
import resume from './assets/Dharmarajan_Karthik_Resume.pdf'

const ContactSegmentButton = styled(Button, {
    shouldForwardProp: (_) => true
    })(({theme}) => ({
        margin: 'auto',
        borderColor: 'white',
        color: 'white'
    }));

export default function ContactSegment(props) {
    const clickCallbackLinkedIn = () => {
        window.open('https://www.linkedin.com/in/karthik-dharmarajan/');
    };

    const clickCallbackGitHub = () => {
        window.open('https://github.com/KDharmarajanDev/');
    };

    const showResume = () => {
        window.open(resume);
    }

    return (<Grid container id="contact-segment-container" align="center" justify="center" spacing={5} wrap="wrap" direction="row" alignItems="center">
                <Grid xs={12} sm={6} md={3} item>
                    <ContactSegmentButton variant="outlined" onClick={clickCallbackLinkedIn} startIcon={<LinkedInIcon/>}>
                        LinkedIn
                    </ContactSegmentButton>
                </Grid>
                <Grid xs={6} md={3} item>
                    <ContactSegmentButton variant="outlined" onClick={clickCallbackGitHub} startIcon={<GitHubIcon/>}>
                        GitHub
                    </ContactSegmentButton>
                </Grid>
                <Grid xs={6} md={3} item>
                    <ContactSegmentButton variant="outlined"
                        onClick={showResume} startIcon={<ReceiptIcon/>}>
                        Resume
                    </ContactSegmentButton>
                </Grid>
            </Grid>);
}