import { AppBar, Toolbar, Box, Grid, Button } from '@mui/material';
import { Switch } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './theme-reducer';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { styled } from '@mui/system';
import { useCallback } from 'react';

const themeSelector = state => state.theme;

const StyledGridContainer = styled(Grid)(({theme}) => ({
    flexGrow: 1
}));

const StyledAppBar = styled(AppBar,{
    shouldForwardProp: (prop) => true
  })(({theme}) => ({
  backgroundColor: theme.palette.secondary.main,
}));

function ThemeSwitch(props) {

    const theme = useSelector(themeSelector)

    const dispatch = useDispatch()
    const onSwitchChange = (event) => {
        dispatch(toggle())
    }

    return (
        <Switch
            icon={<LightModeIcon/>}
            checkedIcon={<DarkModeIcon/>}
            checked={theme.theme === "dark"} 
            onChange={onSwitchChange}/>
    )
}

const LinkButton = styled(Button, {
  shouldForwardProp: (_) => true
  })(({theme}) => ({
      margin: 'auto',
      color: theme.palette.text.main,
      textTransform: 'none',
  }));

function TopBarLink(props) {

  const scrollToFunction = useCallback(() => {
    const element = document.getElementById(props.target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [props.target]);

  return (
    <LinkButton onClick={scrollToFunction}>
      {props.text}
    </LinkButton>
  )
}

export default function TopBar(props) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="fixed">
          <Toolbar     
            sx={{
              justifyContent: "space-between",
              minHeight: 70
            }}>
            <StyledGridContainer container spacing={12}
                justifyContent="center"
                alignItems="center">
              <Grid item xs="auto" align="center">
                <TopBarLink text="About Me" target="about-me"/>
              </Grid>
              <Grid item xs="auto" align="center">
                <TopBarLink text="Publications" target="publications"/>
              </Grid>
              <Grid item xs="auto" align="center">
                <TopBarLink text="Projects" target="projects"/>
              </Grid>
            </StyledGridContainer>
            <ThemeSwitch/>
          </Toolbar>
        </StyledAppBar>
      </Box>
    );
  }