import React from 'react'
import { UserContext } from '../../contexts/user/userContext'
import Header from '../../components/Header'
export default function TodayPage() {
    const [userInfo, setUserInfo] = React.useContext(UserContext)
  return (
    <div>
        <Header />
    </div>
  )
}
