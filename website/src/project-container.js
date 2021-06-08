import Grid from '@material-ui/core/Grid';

export default function ProjectContainer(props) {
    return (<Grid className="project-container" xs="4">
                <h3 className="project-container-title">{props.name}</h3>
            </Grid>);
}  