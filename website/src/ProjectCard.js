import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      border: "none",
      "border-radius": "10px",
      height: "fit-content",
      padding: 10,
      "background-color": "#2E9CCA",
    },
    media: {
      objectFit: 'contain',
      height: '400px'
    },
    button: {
      marginLeft: 'auto',
      marginRight: 'auto',
      borderColor: 'white',
      color: 'white'
    },
    description: {
      color: "white",
      textAlign: "center",
      marginTop: 10
    }
  });
  
export default function ProjectCard(props) {
    const classes = useStyles();

    const clickCallback = () => {
      window.open(props.link)
    }

    return (<Card className="project-container" className={classes.root} key={props.name}>
                <CardHeader title={props.name} className="project-container-title"/>
                <CardMedia className={classes.media} component="img" image={props.image}/>
                {console.log(props.description)}
                <Typography component="p" className={classes.description}>
                  {props.description}
                </Typography>
                <CardActions>
                  <Button variant="outlined" className={classes.button} 
                   startIcon={<GitHubIcon/>} onClick={clickCallback}>
                    Code
                  </Button>
                </CardActions>
            </Card>);
}  