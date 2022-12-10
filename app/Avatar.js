import Image from 'next/image'

import avatar from '../public/avatar.png'

export default function Avatar () {
  return (
    <button className='w-[40px] h-[40px] border rounded-full'>
      <Image
        src={avatar}
        alt='Avatar'
      />
    </button>
  )
}
