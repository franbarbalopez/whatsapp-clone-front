'use client'

import { useRef, useState } from 'react'
import FilterIcon from '../icons/FilterIcon'
import SearchIcon from '../icons/SearchIcon'
import LeftArrowIcon from '../icons/LeftArrowIcon'

export default function SearchBar () {
  const [inputValue, setInputValue] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const inputRef = useRef(null)

  const handleInputChange = event => {
    setIsSearching(event.target.value !== '')
    setInputValue(event.target.value)
  }

  const handleIsSearching = () => {
    setIsSearching(state => !state)
    inputRef.current.focus()
  }

  const handleGoBack = () => {
    console.log('here')
    setInputValue('')
    setIsSearching(state => !state)
  }

  const handleFocus = direction => {
    setIsSearching(direction)
  }

  return (
    <div className='flex flex-row items-center justify-center gap-2 pl-3 pr-2 h-[49px] bg-white border-y border-b-[#F0F2F5]'>
      <div className='flex grow flex-row items-center relative'>
        <input
          className='pl-16 grow bg-[#F0F2F5] rounded-lg h-[35px] placeholder:text-sm placeholder:text-[#54656f] focus-visible:outline-0'
          type='text'
          placeholder='Busca un chat o inicia uno nuevo'
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
        />
        {isSearching
          ? (
            <button
              className='w-6 h-6 text-[#78CDBD] absolute left-4'
              onMouseDown={handleGoBack}
            >
              <LeftArrowIcon />
            </button>
            )
          : (
            <button
              className='w-4 h-4 text-[#54656f] absolute left-4'
              onClick={handleIsSearching}
            >
              <SearchIcon />
            </button>
            )}
      </div>
      <button className='w-6 h-6 text-[#F0F2F5]'><FilterIcon /></button>
    </div>
  )
}
