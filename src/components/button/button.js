import ButtonS from './button-styling.js';

function Button (props){
    return  <ButtonS color={props.color}> {props.text} </ButtonS>
};

export default Button