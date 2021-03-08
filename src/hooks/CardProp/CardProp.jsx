import React from 'react'
import {Icon, Card} from 'semantic-ui-react'


// dependency of hook
const extra = (
    <>
      <hr/>
      <Icon name='book' />
      Background: B.tech CSE
      <hr/>
      <Icon name='calendar alternate' />
      Age: 21 years
      <hr/>
    </>
  )
  
// hook
const CardProps = () => (
    <Card
      image='./Myself.JPG'
      header='Dheeraj Gadwala'
      meta='About me'
      description="I am an industrious individual who is always ready to work in a team. I have a knack for programming and have experiences with various technologies like AI, IoT, ML, cloud, and software development. In the long run, I aim to run my own tech organization."
      extra={extra}
    />
  );

export default CardProps;