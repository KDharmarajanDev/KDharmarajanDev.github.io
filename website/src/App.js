import './App.css';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
import ContactSegment from './ContactSegment';
import { initialState } from './project-filter-reducer';
import TechnologyButton from './technology-button';
import { Introduction, projects } from './info';
import TopBar from './top-bar';

function App() {
  return (
    <div id="app">
      <TopBar/>
      <div>
        <h1 id="title">Karthik Dharmarajan</h1>
        <ContactSegment/>
      </div>
      <div id="intro-section">
        <h2 id="about-me-title">About Me</h2>
        <Introduction/>
      </div>

      <div id="project-section">
          <h2 id="projects-title">Projects</h2>
            <h3 id="languages-title">Languages and Technologies</h3>
          <Grid container id="grid-container" align="center" justifyContent="center" spacing={5} direction="row" alignItems="center">
            {Object.keys(initialState).map(name => (
                <Grid xs={12} sm={6} md={1} item>
                  <TechnologyButton name={name}></TechnologyButton>
                </Grid>
              ))
            }
          </Grid>
            {projects.map(project => (
                <ProjectCard name={project.name} image={project.image} link={project.link} description={project.description}
                             technologies={project.technologies} website={project.website}/>
            ))}
      </div>
    </div>
  );
}

export default App;
