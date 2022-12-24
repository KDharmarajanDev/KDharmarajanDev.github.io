import './App.css';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
import ContactSegment from './ContactSegment';
import { initialState } from './project-filter-reducer';
import TechnologyButton from './technology-button';
import { Introduction, projects, publications } from './info';
import TopBar from './top-bar';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { light, dark } from './theme';
import { styled } from '@mui/system';
import PublicationCard from './publication-card';

const selectTheme = (state) => state.theme.theme;

const StyledDiv = styled('div')(({ theme }) => ({
  marginRight: '20%',
  marginLeft: '20%',
  marginTop: '50px'
}));

function App() {

  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <div id="app">
        <TopBar/>
        <StyledDiv>
          <div id="intro-section">
            <h2 id="about-me-title">About Me</h2>
            <Introduction/>
          </div>
          <div id="publications">
            <Typography variant="h2">Publications</Typography>
            {publications.map(publication => (
              <PublicationCard title={publication.title} arXiv={publication.arXiv} github={publication.github}
                              tweet={publication.tweet} paper={publication.paper} authors={publication.authors}
                              description={publication.description} conference={publication.conference}/>
            ))}
          </div>
          <div id="project-section">
            <Typography variant="h2">Projects</Typography>
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
        </StyledDiv>
      </div>
    </ThemeProvider>
  );
}

export default App;
