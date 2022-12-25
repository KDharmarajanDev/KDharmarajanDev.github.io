import { Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { toggle } from './project-filter-reducer';
import { styled } from '@mui/system'

const StyledButtonBase = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive'
})(({ theme, isActive }) => (
  isActive ? {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: theme.palette.background.default,
    border: 'solid',
    borderColor: theme.palette.secondary.main,
    borderRadius: "10px",
    fontSize: "20px",
    padding: "10px",
    backgroundColor: theme.palette.secondary.main,
    textTransform: 'none',
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.background.default
    }
  } :
  {
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    border: 'solid',
    borderRadius: "10px",
    fontSize: "20px",
    padding: "10px",
    backgroundColor: theme.palette.background.default,
    textTransform: 'none',
  }
));
  
const selectTechnologies = state => state.project;

export default function TechnologyButton(props) {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(toggle(props.name));
    };

    const technologies = useSelector(selectTechnologies);
    return (<StyledButtonBase onClick={clickHandler} isActive={technologies[props.name]} color="secondary">
                {props.name}
            </StyledButtonBase>);
}  