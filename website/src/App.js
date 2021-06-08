import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ProjectContainer from './project-container'

function App() {
  return (
    <div id="app">
      <h1 id="title">Karthik Dharmarajan</h1>
      <div id="title-feature"></div>
      <div id="intro-section">
      </div>
      <div id="project-section">
          <h2 id="projects-title">Projects</h2>
          <Grid container spacing={1000} id="grid-container">
            <ProjectContainer name="LED Light Strip Scheduler">

            </ProjectContainer>
            <ProjectContainer name="LED Light Strip Scheduler">
              
            </ProjectContainer>
            <ProjectContainer name="LED Light Strip Scheduler">
              
            </ProjectContainer>
            <ProjectContainer name="LED Light Strip Scheduler">
              
            </ProjectContainer>
          </Grid>
      </div>
    </div>
  );
}

export default App;
