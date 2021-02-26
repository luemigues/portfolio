import ButtonS from './button-styling.js';

function Button (props){
    return  <ButtonS type={props.type}> {props.text} </ButtonS>
};

export default Button