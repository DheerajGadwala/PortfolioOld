import React from 'react'
import { List, Segment, Icon } from 'semantic-ui-react'
import './DarkList.css'

const List_ = () => (
  <Segment>
    <p className="title"><b>Contact me @</b></p>
    <hr/>
    <List divided relaxed>
      <List.Item>
        <List.Content>
          <List.Header>Facebook</List.Header>
          <Icon name='facebook' /><a href="https://www.facebook.com/I.am.Dheeru" target="_blank">I.am.Dheeru</a>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Email</List.Header>
          <Icon name='mail' />drgad24@gmail.com
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Mobile</List.Header>
          <Icon name='mobile' />+91 8019334644
        </List.Content>
      </List.Item>
    </List>
  </Segment>
)

export default List_