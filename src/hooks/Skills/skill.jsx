import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const Skill = (props) => (
  <Step.Group size="mini">
    <Step>
      <Icon name={props.icon} size='small'/>
      <Step.Content>
        <Step.Title>{props.title}</Step.Title>
        <Step.Description>{props.desc}</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default Skill
