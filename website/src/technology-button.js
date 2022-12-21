import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { toggle } from './project-filter-reducer';

const useStyles = makeStyles({
    button: {
      marginLeft: 'auto',
      marginRight: 'auto',
      borderColor: 'white',
      color: 'white',
      border: 'solid',
      borderColor: 'white',
      borderRadius: "10px",
      fontSize: "20px",
      padding: "10px"
    },
    buttonUsed: {
      marginLeft: 'auto',
      marginRight: 'auto',
      borderColor: 'white',
      color: '#61892F',
      border: 'solid',
      borderColor: 'white',
      borderRadius: "10px",
      fontSize: "20px",
      padding: "10px",
      backgroundColor: "white",
    }
  });
  
const selectTechnologies = state => state.project;

export default function TechnologyButton(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(toggle(props.name));
    };

    const technologies = useSelector(selectTechnologies);
    return (<ButtonBase onClick={clickHandler} className={technologies[props.name] ? classes.buttonUsed : classes.button}>
                {props.name}
            </ButtonBase>);
}  