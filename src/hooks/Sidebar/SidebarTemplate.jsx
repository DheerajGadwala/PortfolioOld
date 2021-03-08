import  React from 'react'
import {Grid, Sidebar, Segment } from 'semantic-ui-react'
import NavIcon from '../NavIcon/navIcon';

// hook
const HorizontalSidebar = (props) => {
    return (
    <Sidebar
        as={Segment}
        animation={props.animation}
        direction={props.direction}
        visible={props.visible}
    >
        <Grid textAlign='center'>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <NavIcon 
                        name="home"
                        iconText="Home"
                        PageSetter = {props.pageSetter}
                    />  
                </Grid.Column>
                <Grid.Column>
                    <NavIcon 
                        name="code"
                        iconText="Skills"
                        PageSetter = {props.pageSetter}
                    />  
                </Grid.Column>
                <Grid.Column>
                    <NavIcon 
                        name="file pdf"
                        iconText="Resume"
                        PageSetter = {props.pageSetter}
                    />  
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Sidebar>
    );
}

  export default HorizontalSidebar;