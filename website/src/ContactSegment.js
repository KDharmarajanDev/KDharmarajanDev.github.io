import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        // marginLeft: 'auto',
        // marginRight: 'auto',
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

    const clickCallback = () => {

    };

    return (<Grid container id="contact-segment-container" justify="space-between" spacing={5} wrap="wrap" direction="row">
                <Grid xs={12} sm={6} md={3} item>
                    <Card key="LinkedInButton" className={classes.root}>
                        <IconButton className={classes.button} onClick={clickCallback}>
                            <LinkedInIcon/>
                        </IconButton>
                    </Card >
                </Grid>
                <Grid xs={6} md={3} item>
                    <Card key="GitHubButton" className={classes.root}>
                        <IconButton className={classes.button} onClick={clickCallback}>
                            <GitHubIcon/>
                        </IconButton>
                    </Card>
                </Grid>
                <Grid xs={6} md={3} item>
                    <Card key="ResumeButton" className={classes.root}>
                        <Button variant="outlined" className={classes.button} 
                            onClick={clickCallback}>
                            Resume
                        </Button>
                    </Card>
                </Grid>
            </Grid>);
}