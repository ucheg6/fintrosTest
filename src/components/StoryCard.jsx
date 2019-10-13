import React from 'react'
import styled from 'styled-components'
import StoryImage from './StoryImage'

const StoryCardComponent = ({ url, title, text }) => {
  return (
    <StoryCard className="story-card">
      <StoryImage url={url || `http://www.neb.health`} />

      <StoryContent>
        <StoryCardHeader href={url}>{title.slice(0, 30)}</StoryCardHeader>

        <StoryDescription>
          {text ||
            ` I try my best to live according to my beliefs and help the
              environment. I turn off all the lights before leaving my
              apartment.`}
        </StoryDescription>
      </StoryContent>
    </StoryCard>
  )
}

const StoryCard = styled.article`
  background-color: #fff;
  @media (max-width: 768px) {
    margin: 1em;
  }
`

const StoryCardHeader = styled.a`
  text-decoration: none;
  font-size: 1.8em;
  font-weight: bold;
  color: #000;
`

const StoryContent = styled.div`
  padding: 3em;
  @media (max-width: 768px) {
    padding: 1em;
  }
`

const StoryDescription = styled.p`
  color: #000;
  line-height: 2em;
`

export default StoryCardComponent
