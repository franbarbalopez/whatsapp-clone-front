import ChatInfo from './ChatInfo'
import ChatMenu from './ChatMenu'

export default function ChatTopBar () {
  return (
    <div className='flex flex-row justify-between items-center py-[10px] px-[16px] bg-[#F0F2F5]'>
      <ChatInfo />
      <ChatMenu />
    </div>
  )
}
