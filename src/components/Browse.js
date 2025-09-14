import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import GptSearch from './GptSearch'
import Header from './Header'
import MainContainer from './MainContainer'
import SecoundaryContainer from './SecoundaryContainer'

const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies()
  usePopularMovies()
  return (
    <div>
      {
        showGptSearch ? (
          <GptSearch/>
        ):(
          <>
                <MainContainer/>
      <SecoundaryContainer/>
          </>
        )
      }

    </div>
  )
}
export default Browse