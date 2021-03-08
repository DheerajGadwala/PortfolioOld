import React from 'react'
import {Grid, Segment} from 'semantic-ui-react'
import Skill from './skill'
const Skills = () => {
    return(
        <Segment>
            <Grid align="center" rows="equal">
                    <Grid.Column  mobile={8} tablet={8} computer={8}>
                        <Skill icon='python' title='Py3' desc=''/>
                    </Grid.Column>
                    <Grid.Column  mobile={8} tablet={8} computer={8}>
                        <Skill icon='database' title='SQL' desc=''/>
                    </Grid.Column>
                    <Grid.Column  mobile={8} tablet={8} computer={8}>
                        <Skill icon='file code' title="DSA" desc=''/>
                    </Grid.Column>
                    <Grid.Column  mobile={8} tablet={8} computer={8}>
                        <Skill icon='js' title='Vanilla JS' desc=''/>
                    </Grid.Column >
                    <Grid.Column  mobile={8} tablet={8} computer={8}>
                        <Skill icon='node' title='Node JS' desc=''/>
                    </Grid.Column>
                    <Grid.Column  mobile={8} tablet={8} computer={8}>
                        <Skill icon='react' title='React JS' desc=''/>
                    </Grid.Column>
                    <Grid.Column  mobile={8} tablet={8} computer={8}>
                        <Skill icon='php' title='php' desc=''/>
                    </Grid.Column>
                    <Grid.Column  mobile={8} tablet={8} computer={8}>
                        <Skill icon='aws' title='AWS S3' desc=''/>
                    </Grid.Column>
                    <Grid.Column  mobile={8} tablet={8} computer={8}>
                        <Skill icon='file code outline' title='Java' desc=''/>
                    </Grid.Column>
                    <Grid.Column  mobile={8} tablet={8} computer={8}>
                        <Skill icon='language' title='Trilingual' desc=''/>
                    </Grid.Column>
                    <Grid.Column  mobile={8} tablet={8} computer={8}>
                        <Skill icon='users' title='Synergetic' desc=''/>
                    </Grid.Column>
                    <Grid.Column  mobile={8} tablet={8} computer={8}>
                        <Skill icon='comments' title='Comm. skills' desc=''/>
                    </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default Skills;