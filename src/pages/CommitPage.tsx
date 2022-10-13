import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import {useAppSelector} from "../store/hooks"
import CommitModel from "../components/CommitModel"


const CommitPage = () => {
	const navigate = useNavigate()
	const { userName, repoName } = useAppSelector((state) => ({
		userName: state.userReducer.userName,
		repoName: state.userReducer.repoName,
	}))
	useEffect(() => {
		if(userName === ''){
			navigate('/')
		}
	}, [userName, navigate])
	return(
			<section className="pt-10 px-4 max-w-screen-xl">
				<div className="text-left">
					<button className="button-style" type="button" onClick={() => navigate('/user')}>Назад</button>
				</div>
					{userName && repoName && <CommitModel userName={userName} repoName={repoName}/>}
			</section>
	)
}

export default CommitPage;