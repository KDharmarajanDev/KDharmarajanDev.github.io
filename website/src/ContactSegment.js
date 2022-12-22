import Button from '@material-ui/core/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ReceiptIcon from '@material-ui/icons/Receipt';
import resume from './assets/Dharmarajan_Karthik_Resume.pdf'

const useStyles = makeStyles({
    button: {
        margin: 'auto',
        borderColor: 'white',
        color: 'white'
    },
    root: {
        border: "none",
        "border-radius": "10px",
        height: "fit-content",
        padding: 10,
        "background-color": "#2E9CCA",
    }  
});

export default function ContactSegment(props) {
    const classes = useStyles();

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
                    <Button variant="outlined" className={classes.button} onClick={clickCallbackLinkedIn} startIcon={<LinkedInIcon/>}>
                        LinkedIn
                    </Button>
                </Grid>
                <Grid xs={6} md={3} item>
                    <Button variant="outlined" className={classes.button} onClick={clickCallbackGitHub} startIcon={<GitHubIcon/>}>
                        GitHub
                    </Button>
                </Grid>
                <Grid xs={6} md={3} item>
                    <Button variant="outlined" className={classes.button} 
                        onClick={showResume} startIcon={<ReceiptIcon/>}>
                        Resume
                    </Button>
                </Grid>
            </Grid>);
}