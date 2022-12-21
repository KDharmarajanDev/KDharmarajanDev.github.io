import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Switch } from '@material-ui/core';

export default function TopBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button>About Me</Button>
            <Button>Publications</Button>
            <Button>Projects</Button>
            <Switch/>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }