import React from 'react'
import {Grid, Icon, Segment, Sidebar} from 'semantic-ui-react'
import './MySidebar.css'
import HorizontalSidebar from './SidebarTemplate'
import Decide from '../Decision/decision';


// dependency of hook
const exampleReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_ANIMATION':
      return { ...state, animation: action.animation, visible: !state.visible }
    case 'CHANGE_PAGE':
      return {...state, page:action.page, visible: !state.visible}
    default:
      throw new Error()
  }
}

// hook
const SidebarTransitioner = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    animation: 'scale down',
    direction: 'top',
    dimmed: true,
    visible: false,
    page: 'Home'
  })
  const { animation, dimmed, direction, visible } = state

  return (
    <>
      <Grid textAlign="center">
        <Grid.Column width={3}>
          <Icon
            name = "list"
            size = "large"
            className = "hamburger"
            color = "grey"
            onClick={
              () => dispatch({ type: 'CHANGE_ANIMATION', animation: 'scale down' })
            }     
          />
        </Grid.Column>
        <Grid.Column width={10} className='heading'>
          <p> {state.page} </p>
        </Grid.Column>
        <Grid.Column width={3}>

        </Grid.Column>
      </Grid>
      <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden' }}>
        <HorizontalSidebar
          animation={animation}
          direction={direction}
          visible={visible}
          pageSetter={(newPage) => dispatch({type: 'CHANGE_PAGE', page: newPage})
          }
        />
        <Sidebar.Pusher dimmed={dimmed && visible}>
          <Segment basic>
            <Decide
                decision = {state.page}
            />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  )
}

export default SidebarTransitioner
