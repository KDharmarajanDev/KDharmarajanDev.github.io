import './App.css';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard'

const projects = [
  {
    "name": "LED Light Strip Scheduler"
  },
  {
    "name": "Knot Visualizer"
  },
  {
    "name": "Drone Control Web Server"
  }
]

function App() {
  return (
    <div id="app">
      <h1 id="title">Karthik Dharmarajan</h1>
      <div id="title-feature"></div>
      <div id="intro-section">
      </div>
      <div id="project-section">
          <h2 id="projects-title">Projects</h2>
          <Grid container id="grid-container" justify="space-between" spacing={5} wrap="wrap" direction="row">
            {projects.map(project => (
              <Grid xs={12} sm={4} item>
                <ProjectCard name={project.name}>

                </ProjectCard>
              </Grid>
            ))}
          </Grid>
      </div>
    </div>
  );
}

export default App;
