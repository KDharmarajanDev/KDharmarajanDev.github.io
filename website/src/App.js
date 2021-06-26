import './App.css';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard'
import LEDLightStripScheduler from './assets/LEDLightStripScheduler.png'
import ContactSegment from './ContactSegment';

const projects = [
  {
    name: "LED Light Strip Scheduler",
    image: LEDLightStripScheduler,
    link: "https://github.com/KDharmarajanDev/led-light-strip-android-app",
    description: "LED Light Strip Scheduler is a simple and powerful application on the " 
    + "Android operating system that allows users to control an Arduino operating RGB LED Strips with over one billion possible sequences."
  },
  {
    name: "Knot Visualizer",
    image: "./assets/LEDLightStripScheduler.png",
    link: "https://github.com/KDharmarajanDev/knot-visualizer-app",
    description: "Knot Visualizer is an iOS application fueled by ARKit that displays the progression of knot tying in "
    + "one's environment with the goal of educating the end user."
  },
  {
    name: "Drone Control Web Server",
    image: "./assets/LEDLightStripScheduler.png",
    link: "https://github.com/KDharmarajanDev/drone-control-web-server",
    description: "Drone Control Web Server is a modular full-stack application that allows for ssensor data streaming and data plotting."
  }
]

function App() {
  return (
    <div id="app">
      <div>
        <h1 id="title">Karthik Dharmarajan</h1>
        <ContactSegment/>
      </div>
      <div id="intro-section">
        <h2 id="about-me-title">About Me</h2>
        <p id="about-description">
        I'm a UC Berkeley student studying electrical engineering and computer science with a passion for autonomous systems and intelligent robotics.
        </p>
      </div>
      <div id="project-section">
          <h2 id="projects-title">Projects</h2>
          <Grid container id="grid-container" justify="space-between" spacing={5} wrap="wrap" direction="row">
            {projects.map(project => (
              <Grid xs={12} md={4} item>
                <ProjectCard name={project.name} image={project.image} link={project.link} description={project.description}/>
              </Grid>
            ))}
          </Grid>
      </div>
    </div>
  );
}

export default App;
