import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Switch, makeStyles, createStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './theme-reducer';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const themeSelector = state => state.theme;

const useStyles = makeStyles((theme) =>
  createStyles({
    centerButtons: {
      flexGrow: 1,
      textAlign: "center"
    },
  })
);

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
            checked={theme.theme == "dark"} 
            onChange={onSwitchChange}/>
    )
}

export default function TopBar() {

    const classes = useStyles()

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box className={classes.centerButtons}>
                <Button>About Me</Button>
                <Button>Publications</Button>
                <Button>Projects</Button>
            </Box>
            <ThemeSwitch/>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }