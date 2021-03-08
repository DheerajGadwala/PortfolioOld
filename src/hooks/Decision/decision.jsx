import React from 'react'
import Home from '../Home/home'
import Resume from '../Resume/resume'

//hook
const decide = (props) =>{
    return (
        <>
            {props.decision === 'Home' && <Home page='Home'/>}
            {props.decision === 'Skills' && <Home page='Skills'/>}
            {props.decision === 'Resume' && <Resume/>}
            
        </>
    );
}

export default decide;