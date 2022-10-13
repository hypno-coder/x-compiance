import React from 'react'
import UserReposList from '../components/UserReposList'
import {useFetchUserQuery} from '../store/githubService'

interface UserModelProps {
	userName: string
}

const UserModel: React.FC<UserModelProps> = ({userName}) => {
	const { data: user, isLoading, isSuccess, isError } = useFetchUserQuery(userName)
	let content
	if (isLoading) {
		content = <h3>Загрузка пользователя ...</h3>
	} else if (isSuccess) {
		content = (
				<div className=" md:flex place-content-around">
					<div className="flex-col m-5">
						<div className="mb-2 text-center">{user.name || user.login}</div>
						<div className="flex justify-center">
							<img className="w-40 h-40 rounded-2xl" src={user.avatar_url} alt='avatar'/>
						</div>
					</div>
					<div className="m-5">
						<UserReposList />
					</div>
				</div>
		)
	} else if (isError) {
		content = (
				<div>
					<h3>Пользователь не найден, попробуйте еще </h3>
				</div>
		)
	}
	return (
			<React.Fragment>
				{content}
			</React.Fragment>
	)
}

export default UserModel;