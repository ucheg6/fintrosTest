import axios from 'axios'

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/'
export const newStoriesUrl = `${baseUrl}topstories.json`
export const storyUrl = `${baseUrl}item/`

export const getStories = async storyIds => {
  const stories = await Promise.all(
    storyIds.map(async id => {
      const result = await axios
        .get(`${storyUrl + id}.json`)
        .then(({ data }) => data)

      return result
    })
  )

  localStorage.setItem('stories', JSON.stringify(stories))
  return stories
}

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl)
  return result.data
}
