import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'

const SegmentExampleNestedSegments = () => (
  <Segment.Group>
    <Segment><b>Find more about me at:</b></Segment>
    <Segment.Group>
      <Segment><a href="https://www.hackerrank.com/drgad24" target="_blank"><Icon name="code"/>Hackerrank Profile</a></Segment>
      <Segment><a href="https://www.linkedin.com/in/dheerajgadwala" target="_blank"><Icon name="linkedin"/>LinkedIn Profile</a></Segment>
      <Segment><a href="https://www.github.com/DheerajGadwala" target="_blank"><Icon name="github"/>GitHub Profile</a></Segment>
    </Segment.Group>
    <Segment.Group horizontal>
      <Segment><b>B.Tech CSE: 8.81 CGPA</b></Segment>
      <Segment><b>TSBIE Senior Secondary: 90.5%</b></Segment>
      <Segment><b>ICSE Secondary: 91.5%</b></Segment>
    </Segment.Group>
  </Segment.Group>
)

export default SegmentExampleNestedSegments