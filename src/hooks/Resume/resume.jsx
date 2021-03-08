import React from 'react'
import img from './Resume-Univ.jpg'
import './resume.css'
import {Image} from 'semantic-ui-react'

const resume = () => {
    return(
        <center>
            <Image
                src = {img}
            >
            </Image>
        </center>
    );
}

export default resume;