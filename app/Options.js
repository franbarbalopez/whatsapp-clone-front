import ChatIcon from '../icons/ChatIcon'
import OptionMenuIcon from '../icons/OptionMenuIcon'

export default function Options () {
  return (
    <div className='flex flex-row gap-4 mr-2 text-[#54656f]'>
      <button className='w-6 h-6'><ChatIcon /></button>
      <button className='w-6 h-6'><OptionMenuIcon /></button>
    </div>
  )
}
