import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

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
  
const selectTechnologies = state => state.technologies;

export default function TechnologyButton(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch({type: "toggle", payload: props.name});
    };

    const technologies = useSelector(selectTechnologies);

    return (<ButtonBase onClick={clickHandler} className={technologies.has(props.name) ? classes.buttonUsed : classes.button}>
                {props.name}
            </ButtonBase>);
}  