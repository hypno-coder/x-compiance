import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import UserModel from "../components/UserModel";
import { useAppSelector } from '../store/hooks'
import SearchField from "../components/SearchField";


const UserPage = () => {
  const navigate = useNavigate()
  const { userName } = useAppSelector((state) => ({
    userName: state.userReducer.userName
  }))
  useEffect(() => {
    if(userName === ''){
      navigate('/')
    }
  }, [userName, navigate])

  return (
      <section className="flex-col max-w-screen-xl flex justify-center items-center">
        <SearchField/>
        <UserModel userName={userName}/>
      </section>
  )
}

export default UserPage;
