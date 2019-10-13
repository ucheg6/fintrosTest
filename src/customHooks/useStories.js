import { useEffect, useState } from 'react'
import { getStories } from '../services/action'

export function useStories(storyIds, count) {
  const [stories, setStories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (storyIds.length) {
      //   setIsLoading(true)

      getStories(storyIds).then(stories => {
        setStories(stories)
        setIsLoading(false)
      })
    }
  }, [storyIds, count])

  return [stories, isLoading]
}
