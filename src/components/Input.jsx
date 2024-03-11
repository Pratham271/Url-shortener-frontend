import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { darkModeState, handleInput } from '../store/atoms/atom'

const Input = () => {
    const darkMode = useRecoilValue(darkModeState)
    const setUrl = useSetRecoilState(handleInput)
  return (
    <>
      <input onChange={(e)=> setUrl(e.target.value)} type="text" id="text" className={` bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-12 ${darkMode?"bg-gray-700 border-gray-600 placeholder-gray-400 text-white  focus:ring-blue-500 focus:border-blue-500":""}`} placeholder="https://google.com" required />
    </>
  )
}

export default Input
