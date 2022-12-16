import EmojiIcon from '../icons/EmojiIcon'
import AttachIcon from '../icons/AttachIcon'

export default function LeftSideInputs () {
  return (
    <div className='flex gap-3 mr-2'>
      <button className='w-7 h-7'><EmojiIcon /></button>
      <button className='w-6 h-7'><AttachIcon /></button>
    </div>
  )
}
