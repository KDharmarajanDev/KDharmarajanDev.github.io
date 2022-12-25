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

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <CssBaseline />
      <StyledBackground>
        <TopBar/>
        <ContactSegment/>
        <StyledDiv>
          <Box id="about-me" sx={{ marginTop: 10 }}>
            <Typography variant="h2">About Me</Typography>
            <Introduction/>
          </Box>
          <Box id="publications" sx={{ marginTop: 5 }}>
            <Typography variant="h2">Publications</Typography>
            {publications.map(publication => (
              <PublicationCard title={publication.title} arXiv={publication.arXiv} github={publication.github}
                              tweet={publication.tweet} paper={publication.paper} authors={publication.authors}
                              description={publication.description} conference={publication.conference} image={publication.image}
                              hoverImage={publication.hoverImage} video={publication.video}/>
            ))}
          </Box>
          <Box id="projects" sx={{ marginTop: 5 }}>
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
                                technologies={project.technologies} website={project.website} hoverImage={project.hoverImage}/>
                ))}
          </Box>
        </StyledDiv>
      </StyledBackground>
    </ThemeProvider>
  );
}

export default App;
