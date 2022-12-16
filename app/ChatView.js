import ChatTopBar from './ChatTopBar'
import ChatMessages from './ChatMessages'
import ChatBottomBar from './ChatBottomBar'

export default function ChatView () {
  return (
    <div className='flex flex-col w-full h-full'>
      <ChatTopBar />
      <ChatMessages />
      <ChatBottomBar />
    </div>
  )
}
