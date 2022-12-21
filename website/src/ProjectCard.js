import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import Collapse from '@material-ui/core/Collapse';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import { useCallback } from 'react';

const useStyles = makeStyles({
    root: {
      border: "none",
      "border-radius": "10px",
      height: "fit-content",
      padding: 10,
      "background-color": "#61892F",
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
      marginTop: 10,
      padding: "10px"
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center"
    }
  });

const selectTechnologies = state => state.project;

function containsAnyItem(firstSet, secondSet) {
  for (const element of firstSet) {
    if (secondSet[element]) {
      return true;
    }
  }
  return false;
}
  
export default function ProjectCard(props) {
    const classes = useStyles();

    const clickCallback = useCallback(() => {
      window.open(props.link)
    }, [props.link]);

    const websiteCallback = useCallback(() => {
      window.open(props.website)
      }, [props.website]);

    const technologies = useSelector(selectTechnologies);
    const hasValidTechnology = containsAnyItem(props.technologies, technologies);

    return (<Collapse in={hasValidTechnology} timeout={"auto"} unmountOnExit>
              <Card className="project-container" className={classes.root} key={props.name}>
                <CardHeader title={props.name} className="project-container-title"/>
                <CardMedia className={classes.media} component="img" image={props.image}/>
                <Typography component="p" className={classes.description}>
                  {props.description}
                </Typography>
                <div className={classes.buttonContainer}>
                  {props.link &&
                    <CardActions>
                      <Button variant="outlined" className={classes.button} 
                        startIcon={<GitHubIcon/>} onClick={clickCallback}>
                        Code
                      </Button>
                    </CardActions>
                  }
                  {props.website &&
                    <CardActions>
                      <Button variant="outlined" className={classes.button} 
                        startIcon={<WebAssetIcon/>} onClick={websiteCallback}>
                        Website
                      </Button>
                    </CardActions>
                  }
                </div>
              </Card>
            </Collapse>);
}  