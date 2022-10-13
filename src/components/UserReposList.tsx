import React, {useCallback} from 'react'
import { useNavigate, Link } from "react-router-dom"
import { githubAPI } from '../store/githubService'
import { useAppSelector } from '../store/hooks'
import { useActions } from '../store/hooks'

const UserReposList = () => {
  const {setRepName} = useActions()
  const navigate = useNavigate()

  const { userName } = useAppSelector((state) => ({
    userName: state.userReducer.userName
  }))
  const { data: repos = [] } = githubAPI.useFetchUserReposQuery(userName)

  const getCommitHandler = useCallback((repName: string) => {
    setRepName(repName)
    navigate('/repos')
  }, [navigate, setRepName])

  return (
      <React.Fragment>
      {[...repos].sort((a, b) => b.stargazers_count - a.stargazers_count).map((elem) => (
          <section className="m-4 p-2 max-w-sm " key={elem.id}>
            <div>TITLE: <Link onClick={() => getCommitHandler(elem.name)} to='/repos'
                              className="
                              hover:underline
                              decoration-2
                              decoration-blue-700
                              decoration-dotted
                              underline-offset-4"
            >{elem.name}</Link></div>
            <div>LANG: {elem.language || 'отсутствует'}</div>
            <div>DESCRIPTION: {elem.description || 'описание отсутствует'}</div>
            <div>STARS: {elem.stargazers_count}</div>
            <div className="m-4 border border-dashed"></div>
          </section>
      ))}
      </React.Fragment>
  )
}

export default UserReposList;
