import './App.css';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard'
import LEDLightStripScheduler from './assets/LEDLightStripScheduler.png'

const projects = [
  {
    name: "LED Light Strip Scheduler",
    image: LEDLightStripScheduler,
    link: "https://github.com/KDharmarajanDev/led-light-strip-android-app"
  },
  {
    name: "Knot Visualizer",
    image: "./assets/LEDLightStripScheduler.png",
    link: "https://github.com/KDharmarajanDev/knot-visualizer-app"
  },
  {
    name: "Drone Control Web Server",
    image: "./assets/LEDLightStripScheduler.png",
    link: "https://github.com/KDharmarajanDev/drone-control-web-server"
  }
]

console.log(typeof LEDLightStripScheduler)

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
              <Grid xs={12} md={4} item>
                <ProjectCard name={project.name} image={project.image} link={project.link}>
                </ProjectCard>
              </Grid>
            ))}
          </Grid>
      </div>
    </div>
  );
}

export default App;
