import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Switch, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './theme-reducer';

const themeSelector = state => state.theme;

function ThemeSwitch(props) {

    const theme = useSelector(themeSelector)

    const dispatch = useDispatch()
    const onSwitchChange = (event) => {
        dispatch(toggle())
    }

    return (
        <Switch checked={theme.theme == "dark"} onChange={onSwitchChange}/>
    )
}

export default function TopBar() {

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button>About Me</Button>
            <Button>Publications</Button>
            <Button>Projects</Button>
            <ThemeSwitch/>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }