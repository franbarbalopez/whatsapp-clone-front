import Menu from './Menu'
import SearchBar from './SearchBar'
import ChatList from './ChatList'

export default function SideBar ({ chats }) {
  return (
    <div className='flex flex-col w-[30%] min-w-[30%] max-w-[30%] border-r-2'>
      <Menu />
      <SearchBar />
      <ChatList chats={chats} />
    </div>
  )
}
