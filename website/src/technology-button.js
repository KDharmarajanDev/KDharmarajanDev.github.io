import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
    root: {
      border: "none",
      "border-radius": "10px",
      height: "fit-content",
      padding: 10,
      "background-color": "#240090",
    },
    button: {
      marginLeft: 'auto',
      marginRight: 'auto',
      borderColor: 'white',
      color: 'white',
      border: 'solid',
      borderColor: 'white',
      borderRadius: "10px"
    },
  });
  
export default function TechnologyButton(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch({type: "toggle", payload: props.name});
    };

    return (<ButtonBase onClick={clickHandler} className={classes.button}>
                {props.name}
            </ButtonBase>);
}  