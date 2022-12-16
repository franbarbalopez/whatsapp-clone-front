import LeftSideInputs from './LeftSideInputs'
import MessageInput from './MessageInput'
import RightSideInputs from './RightSideInputs'

export default function ChatBottomBar () {
  return (
    <div className='w-full min-h-[62px] py-[5px] px-[16px] flex items-center justify-around gap-2'>
      <LeftSideInputs />
      <MessageInput />
      <RightSideInputs />
    </div>
  )
}
