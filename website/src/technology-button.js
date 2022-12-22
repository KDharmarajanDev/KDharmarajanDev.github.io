import { ButtonBase } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { toggle } from './project-filter-reducer';
import { styled } from '@mui/system'

const StyledButtonBase = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'isActive'
})(({ theme, isActive }) => (
  isActive ? {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#61892F',
    border: 'solid',
    borderColor: 'white',
    borderRadius: "10px",
    fontSize: "20px",
    padding: "10px",
    backgroundColor: "white",
  } :
  {
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: 'white',
    color: 'white',
    border: 'solid',
    borderRadius: "10px",
    fontSize: "20px",
    padding: "10px"
  }
));
  
const selectTechnologies = state => state.project;

export default function TechnologyButton(props) {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(toggle(props.name));
    };

    const technologies = useSelector(selectTechnologies);
    return (<StyledButtonBase onClick={clickHandler} isActive={technologies[props.name]}>
                {props.name}
            </StyledButtonBase>);
}  