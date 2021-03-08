import React,{useState} from 'react'
import {Icon} from 'semantic-ui-react'
import './navIcon.css'

// hook
const NavIcon = (props) => {
    const [state, setState] = useState({
        iconSize:"large",
        iconText:props.iconText,
        iconColor:'grey'
    });
    return(
        <div
            className = "navIcon"
            onMouseOver = {()=>{
                setState({
                    iconSize:"huge",
                    iconText:props.iconText,
                    iconColor: 'black'
                })
            }}
            onMouseOut = {()=>{
                setState({
                    iconSize:"large",
                    iconText:props.iconText,
                    iconColor: 'grey'
                })
            }}
            onClick = {() => {
                props.PageSetter(props.iconText);
            }
            }
        >
            <Icon
                name = {props.name}
                size = {state.iconSize}
                color = {state.iconColor}
            >
            </Icon>
            <p className="iconText">{state.iconText}</p> 
        </div>
    )
}

export default NavIcon;