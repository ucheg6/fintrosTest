import React from 'react'
import Microlink from '@microlink/react'
import styled from 'styled-components'

export default ({ url }) => <StoryImage url={url} size="large" />

const StoryImage = styled(Microlink)`
  font-family: 'Nitti, "Microsoft YaHei", 微软雅黑, monospace';
  max-width: 100%;
  border-radius: 0.42857em;
`
