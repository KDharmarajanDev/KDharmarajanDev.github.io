import { AppBar, Toolbar, Button, Box, Grid } from '@mui/material';
import { Switch } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './theme-reducer';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { styled } from '@mui/system';

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

export default function TopBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="fixed">
          <Toolbar     
            sx={{
              justifyContent: "space-between"
            }}>
            <StyledGridContainer container spacing={12}
                justifyContent="center"
                alignItems="center">
              <Grid item xs="auto" align="center">
                <Button>About Me</Button>
              </Grid>
              <Grid item xs="auto" align="center">
                <Button>Publications</Button>
              </Grid>
              <Grid item xs="auto" align="center">
                <Button>Projects</Button>
              </Grid>
            </StyledGridContainer>
            <ThemeSwitch/>
          </Toolbar>
        </StyledAppBar>
      </Box>
    );
  }