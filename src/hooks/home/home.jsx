import React from 'react'
import {Grid} from 'semantic-ui-react'
import './home.css';
import Cardprop from './CardProp/CardProp';
import DarkList from './DescriptionContainers/DarkList'
import List from './DescriptionContainers/List'
import Skills from '../Skills/skills'
import SkillsLeft from '../Skills/skills-left'

// hook
const home = (props)=>{
    return (
        <>
            <Grid className='homegroup'>
                <Grid.Column mobile={16} tablet={8} computer={8}  align="center" className="left">
                    {props.page === 'Home' && <Cardprop/>}
                    {props.page === 'Skills' && <Skills/>}
                </Grid.Column>
                <Grid.Column width = {0} only="mobile"></Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8} align="center" className="right">
                    <Grid divided = "vertically">
                        <Grid.Row className='intro'>
                            <Grid.Column align="left">
                                {props.page === 'Home' && <DarkList/>}
                                {props.page === 'Skills' && <SkillsLeft/>}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column align="center">
                                <List/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid>
        </>
    );
}

export default home;