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
import CssBaseline from "@mui/material/CssBaseline";
import { useRef } from 'react';

const selectTheme = (state) => state.theme.theme;

const StyledDiv = styled('div')(({ theme }) => ({
  marginRight: '25%',
  marginLeft: '25%',
  marginTop: '50px'
}));

const StyledBackground = styled(Box)(({theme}) => ({
  color: theme.palette.text.main
}));

function App() {

  const theme = useSelector(selectTheme);

  const aboutMeRef = useRef();
  const publicationsRef = useRef();
  const projectsRef = useRef();

  const topTabs = [
    { label: "About Me", key: "about-me", elemRef: aboutMeRef },
    { label: "Publications", key: "publications", elemRef: publicationsRef },
    { label: "Projects", key: "projects", elemRef: projectsRef }
  ];  

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <CssBaseline />
      <StyledBackground>
        <TopBar topTabs={topTabs}/>
        <ContactSegment/>
        <StyledDiv id="master-container">
          <Box id="about-me" sx={{ marginTop: 10 }} ref={aboutMeRef}>
            <Typography variant="h2">About Me</Typography>
            <Introduction/>
          </Box>
          <Box id="publications" sx={{ marginTop: 5 }} ref={publicationsRef}>
            <Typography variant="h2">Publications</Typography>
            {publications.map(publication => (
              <PublicationCard {...publication} key={publication.title}/>
            ))}
          </Box>
          <Box id="projects" sx={{ marginTop: 5 }} ref={projectsRef}>
            <Typography variant="h2">Projects</Typography>
                <Typography variant="h4">Languages and Technologies</Typography>
              <Grid container id="grid-container" align="center" justifyContent="center" spacing={1} direction="row" alignItems="center" 
                sx={{ marginTop: 1, marginBottom: 3 }}>
                {Object.keys(initialState).map(name => (
                    <Grid key={name} item>
                      <TechnologyButton name={name}/>
                    </Grid>
                  ))
                }
              </Grid>
                {projects.map(project => (
                    <ProjectCard {...project} key={project.name}/>
                ))}
          </Box>
        </StyledDiv>
      </StyledBackground>
    </ThemeProvider>
  );
}

export default App;
