import { useEffect, useState } from 'react'
import { getStories, getStoryIds } from '../services/action'

export function useStoryIds() {
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    getStoryIds().then(ids => setStoryIds(ids))
  }, [])

  return storyIds
}
