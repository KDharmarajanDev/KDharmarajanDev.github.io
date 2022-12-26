import { AppBar, Toolbar, Box, Grid, Tabs, Tab, IconButton, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './theme-reducer';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { styled } from '@mui/system';
import { useState, useEffect, useCallback } from 'react';

const themeSelector = state => state.theme;

const StyledTabs = styled(Tabs, {
  shouldForwardProp: (_) => true
})(({theme}) => ({
    flexGrow: 1,
    color: theme.palette.text.alt,
    height: 5,
    '& .MuiTabs-indicator': {
      backgroundColor: theme.palette.text.alt
    },  
}));

const StyledTab = styled((props) => <Tab disableRipple {...props}/>, {
  shouldForwardProp: (_) => true
})(({ theme }) => ({
  color: theme.palette.text.alt,
  textTransform: 'none',
  marginLeft: 10,
  marginRight: 10,
  '&.Mui-selected': {
    color: theme.palette.text.alt,
  },
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

const nearestIndex = (
  currentPosition,
  sectionPositionArray,
  startIndex,
  endIndex
) => {
  if (startIndex === endIndex) {
    return startIndex;
  } else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].elemRef.current.offsetTop -
          currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].elemRef.current.offsetTop -
          currentPosition
      )
      ) {
        return startIndex;
      }
    return endIndex;
  } else {
    const nextNearest = ~~((startIndex + endIndex) / 2);
    const a = Math.abs(
      sectionPositionArray[nextNearest].elemRef.current.offsetTop -
        currentPosition
    );
    const b = Math.abs(
      sectionPositionArray[nextNearest + 1].elemRef.current.offsetTop -
        currentPosition
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
};

function LocationTab(props) {

  const goToLocation = useCallback(() => {
    const topOffset = props.target.elemRef.current.offsetTop - 60
    window.scrollTo({
        left: 0, 
        top: topOffset, 
        behavior:'smooth'
      });
  }, [props.target])

  return (
    <StyledTab                   
      key={props.target.key}
      value={props.target.key}
      label={<Typography variant="h5">{props.target.label}</Typography>}
      onClick={goToLocation}/>
  )
}

export default function TopBar(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleScroll = (e) => {
      var index = nearestIndex(
        window.scrollY,
        props.topTabs,
        0,
        props.topTabs.length - 1
      );
      setActiveIndex(index);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="fixed">
        <Toolbar     
          sx={{
            justifyContent: "space-between",
            minHeight: 70
          }}>
          <StyledTabs
            value={activeIndex}
            aria-label="basic tabs example"
            centered
          >
            {props.topTabs.map((tab) => {
              return (
                <LocationTab target={tab} key={tab.key}/>
              );
            })}
          </StyledTabs>
          <ThemeSwitch/>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}