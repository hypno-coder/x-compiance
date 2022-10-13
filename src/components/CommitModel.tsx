import React from 'react'
import {githubAPI} from "../store/githubService"

interface CommitModelProps {
	userName: string
	repoName: string
}

const CommitModel: React.FC<CommitModelProps> = ({userName, repoName}) => {
	const { data: commits } = githubAPI.useFetchCommitsRepoQuery({userName, repoName})
	return(
			<div className="mt-16">
				{
						commits && commits.map(elem => (
								<div className="md:flex place-content-around m-5 break-words" key={elem.sha}>
									<div>
										{elem.commit.author.name}
									</div>
									<div>
										{elem.sha}
									</div>
									<div>
										{elem.commit.author.date.toString().split('T', 1)[0]}
									</div>
									<div className="border-b-4 mt-2"></div>
								</div>
						))
				}
			</div>
	)
}

export default CommitModel;