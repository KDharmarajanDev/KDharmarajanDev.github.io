import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Switch } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './theme-reducer';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {styled} from '@mui/system'

const themeSelector = state => state.theme;

const StyledBox = styled(Box)(({theme}) => ({
    flexGrow: 1,
    textAlign: "center"
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
        <AppBar position="static">
          <Toolbar>
            <StyledBox>
                <Button>About Me</Button>
                <Button>Publications</Button>
                <Button>Projects</Button>
            </StyledBox>
            <ThemeSwitch/>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }