import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import { getStories, getStoryIds } from '../services/action'
import StoryCard from './StoryCard'
import { useStoryIds } from '../customHooks/useStoryIds'
import { useScrollListener } from '../customHooks/useScrollListener'
import { useStories } from '../customHooks/useStories'

const dropdownOptions = [
  'All Stories',
  'Odd Numbered Stories',
  'Even Numbered Stories'
]

// const cachedStories = JSON.parse(localStorage.getItem('stories'))
const StorySection = () => {
  const [count, setCount] = useState(30)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const storyIds = useStoryIds()
  const [stories, isLoading] = useStories(storyIds, count)
  const [storiesToRender, setStoriesToRender] = useState([])

  useScrollListener(setScrollPercentage)

  useEffect(() => {
    setStoriesToRender(stories)
  }, [stories])

  useEffect(() => {
    if (stories.length > 0 && scrollPercentage > 0.99) {
      setCount(count + 30)
    }
    // eslint-disable-next-line
  }, [scrollPercentage])

  const handleFilter = event => {
    const selectedFilter = event.target.value

    const filteredStories = stories.filter(story => {
      if (selectedFilter === 'All Stories') return true
      if (selectedFilter === 'Odd Numbered Stories') return story.id % 2 !== 0

      return story.id % 2 === 0
    })

    setStoriesToRender(filteredStories)
  }

  const renderStories = () => {
    if (isLoading)
      return (
        <Loader
          className="loader"
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
      )

    if (storiesToRender.length)
      return storiesToRender
        .slice(0, count)
        .map(story => (
          <StoryCard
            key={story.id}
            url={story.url}
            title={story.title}
            id={story.id}
          />
        ))
  }

  return (
    <Section>
      <div>
        <h2>Stories</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="right">
        <Select onChange={handleFilter}>
          {dropdownOptions.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </Select>
      </div>
      <StoryContainer isLoaded={!isLoading}>{renderStories()}</StoryContainer>

      <div className="btn-overlay">
        <Button className="load-more-btn">More Stories</Button>
      </div>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5em auto;
  width: 80%;

  .right {
    align-self: flex-end;
  }
  h2 {
    font-size: 2em;
  }
  p {
    color: #999;
  }

  .btn-overlay {
    background-color: #fff;
    background: linear-gradient(hsla(0, 0%, 100%, 0), #f9f8f6);
    height: 390px;
    margin-top: -370px;
    z-index: 2;
    position: relative;

    .load-more-btn {
      padding: 0;
      width: 200px;
      height: 60px;
      margin: 0 auto;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -90px;
    }
  }
  @media (max-width: 768px) {
    margin-top: 25em;
  }
`
const Button = styled.button`
  background-color: #ffb21a;
  color: #fff;
  border-radius: 50px;
  padding: 0.8em 1em;
  margin: 0 2em;
  border-style: none;
  cursor: pointer;
  &:hover {
    background-color: #faa600;
  }
`

const StoryContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.isLoaded ? '1fr 1fr' : '1fr')};
  grid-auto-rows: minmax(400px, auto);
  grid-gap: 1em;
  align-items: center;
  justify-content: center;
  padding: 5em 0;
  padding-bottom: 0;

  .loader {
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
const Select = styled.select`
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  @media (max-width: 768px) {
    display: none;
  }
`
export default StorySection
