import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      border: "none",
      "border-radius": "10px",
      height: "fit-content",
      padding: 0,
      "background-color": "#2E9CCA",
      border: "none"
    },
  });
  

export default function ProjectCard(props) {
    const classes = useStyles();

    return (<Card className="project-container" className={classes.root}>
                <CardHeader title={props.name} className="project-container-title"/>
            </Card>);
}  