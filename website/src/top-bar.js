import { AppBar, Toolbar, Box, Grid, Tabs, Tab, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './theme-reducer';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { styled } from '@mui/system';
import { useState, forwardRef } from 'react';
import { Link } from "react-scroll";

const themeSelector = state => state.theme;

const StyledTabs = styled(Tabs, {
  shouldForwardProp: (_) => true
})(({theme}) => ({
    flexGrow: 1,
    color: theme.palette.text.alt,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto'
}));

const StyledTab = styled(Tab, {
  shouldForwardProp: (_) => true
})(({ theme }) => ({
  color: theme.palette.text.alt,
  textTransform: 'none'
}));

const StyledAppBar = styled(AppBar,{
    shouldForwardProp: (prop) => true
  })(({theme}) => ({
  backgroundColor: theme.palette.secondary.main,
}));

const StyledDarkModeIcon = styled(DarkModeIcon)(({ theme }) => ({
  color: theme.palette.text.alt
}));

const StyledLightModeIcon = styled(LightModeIcon)(({ theme }) => ({
  color: theme.palette.text.alt
}));

function ThemeSwitch(props) {

    const theme = useSelector(themeSelector)

    const dispatch = useDispatch()
    const onSwitchChange = (event) => {
        dispatch(toggle())
    }

    return (
        <IconButton
            onClick={onSwitchChange}>
          {
            theme.theme === "dark" ? 
            <StyledDarkModeIcon/> :
            <StyledLightModeIcon/>
          }
        </IconButton>
    )
}

const topTabs = [
  { label: "About Me", key: "about-me" },
  { label: "Publications", key: "publications" },
  { label: "Projects", key: "projects" }
];

const SLink = forwardRef((props, ref) => {
  console.log(props)
return (<Link {...props} innerRef={ref}/>);
});

export default function TopBar(props) {
  const [activeTab, setActiveTab] = useState(false);

  const handleOnSetActive = (e) => {
    setActiveTab(e);
  };

  const handleOnSetInActive = (e) => {
    if (e === activeTab) {
      setActiveTab(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="fixed">
        <Toolbar     
          sx={{
            justifyContent: "space-between",
            minHeight: 70
          }}>
          <StyledTabs
            value={activeTab}
            aria-label="basic tabs example"
          >
            {topTabs.map((tab) => {
              return (
                <StyledTab
                  key={tab.key}
                  value={tab.key}
                  label={tab.label}
                  component={SLink}
                  spy={true}
                  isDynamic={true}
                  smooth={true}
                  duration={500}
                  to={tab.key}
                  offset={-30}
                  activeClass="active"
                  onSetActive={handleOnSetActive}
                  onSetInactive={handleOnSetInActive}
                  containerId="master-container"
                />
              );
            })}
          </StyledTabs>
          <ThemeSwitch/>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}