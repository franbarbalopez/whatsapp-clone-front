'use client'

import { useState } from 'react'

import SideBar from './SideBar'
import MainContent from './MainContent'

export default function Page () {
  const [chats, setChats] = useState([])
  const [selectedChat, setSelectedChat] = useState(null)

  return (
    <div className='flex flex-row h-full'>
      <SideBar chats={chats} />
      <MainContent chat={selectedChat} />
    </div>
  )
}
