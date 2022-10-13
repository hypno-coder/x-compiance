import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { userApiType, userRepoApiType, commitApiType } from './type'

export const githubAPI = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: (builder) => ({
    fetchUser: builder.query<userApiType, string>({
      query: (userName) => ({
        url: `/users/${userName}`
      }),
    }),
    fetchUserRepos: builder.query<userRepoApiType[], string>({
      query: (userName) => ({
        url: `/users/${userName}/repos`
      })
    }),
    fetchCommitsRepo: builder.query<commitApiType[], {userName: string, repoName: string}>({
      query: ({userName, repoName}) => ({
        url: `/repos/${userName}/${repoName}/commits`
      })
    })
  })
})

export const { useFetchUserQuery, useFetchUserReposQuery, useFetchCommitsRepoQuery } = githubAPI
