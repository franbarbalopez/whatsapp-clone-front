import Avatar from './Avatar'
import Options from './Options'

export default function Menu () {
  return (
    <div className='flex flex-row justify-between items-center py-[10px] px-[16px] bg-[#F0F2F5]'>
      <Avatar />
      <Options />
    </div>
  )
}
