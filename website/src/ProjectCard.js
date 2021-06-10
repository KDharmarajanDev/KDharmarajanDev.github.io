import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import FunctionalImage from './assets/LEDLightStripScheduler.png'

const useStyles = makeStyles({
    root: {
      border: "none",
      "border-radius": "10px",
      height: "fit-content",
      padding: 0,
      "background-color": "#2E9CCA",
    },
    media: {
      objectFit: 'contain',
      height: '400px'
    },
  });
  
export default function ProjectCard(props) {
    const classes = useStyles();

    return (<Card className="project-container" className={classes.root} key={props.name}>
                <CardHeader title={props.name} className="project-container-title"/>
                <CardMedia className={classes.media} component="img" image={props.image}/>
            </Card>);
}  