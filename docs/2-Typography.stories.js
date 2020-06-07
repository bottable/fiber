import React from 'react'
import { Heading, Text } from 'fiber'

export default {
  title: 'Typography'
}

export const Headings = () => {
  return (
    <div>
      <Heading size={1}> Heading 1 </Heading>
      <Heading size={2}> Heading 2 </Heading>
      <Heading size={3}> Heading 3 </Heading>
      <Heading size={4}> Heading 4 </Heading>
      <Heading size={5}> Heading 5 </Heading>
      <Heading size={6}> Heading 6 </Heading>
    </div>
  )
}

export const Texts = () => {
  return (
    <div>
      <Text> This is a text </Text>
      <br />
      <Text strong> This is a strong text </Text>
      <br />
      <Text highlight> This is a highlighted text </Text>
      <br />
      <Text code> const fiber = "hello world" </Text>
    </div>
  )
}
