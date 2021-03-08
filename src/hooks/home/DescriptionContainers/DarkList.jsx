import React from 'react'
import { List, Segment } from 'semantic-ui-react'
import './DarkList.css'

const ListInverted = () => (
  <Segment inverted>
    <p className="title"><b>About me:</b></p>
    <hr/>
    <List divided inverted relaxed>
      <List.Item>
        <List.Content>
          <List.Header>Pursuing graduation</List.Header>
          at VIT University, Vellore.
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Competitive Programmer</List.Header>
          at Hackerrank and LeetCode.
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Software Developer</List.Header>
          Full-stack development in multiple languages.
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Proud chapter member</List.Header>
          Core-committie member at IEEE TEMS.
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Gamer</List.Header>
          Grand strategy games.
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>History Enthusiast</List.Header>
          What  can I say, I'm a geek!
        </List.Content>
      </List.Item>
    </List>
  </Segment>
)

export default ListInverted