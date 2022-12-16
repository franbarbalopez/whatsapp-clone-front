export default function MessageInput () {
  return (
    <div className='grow'>
      <input
        className='w-full pl-[15px] bg-[#fff] rounded-lg h-[45px] placeholder:text-sm placeholder:text-[#54656f] focus-visible:outline-0'
        type='text'
        placeholder='Escribe un mensaje aquí'
      />
    </div>
  )
}
