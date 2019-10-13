import { useEffect, useState } from 'react'
import { getStories } from '../services/action'

export function useStories(storyIds, count) {
  const [stories, setStories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (storyIds.length) {
      const idsToFetch = []
      const oldStories = [...stories]

      for (let i = count - 30; i < count; i++) {
        idsToFetch.push(storyIds[i])
      }

      getStories(idsToFetch).then(stories => {
        setStories([...oldStories, ...stories])
        setIsLoading(false)
      })
    }
  }, [storyIds, count])

  return [stories, isLoading]
}
