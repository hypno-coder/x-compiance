import React, { useState, useCallback } from 'react'
import { useNavigate } from "react-router-dom"
import { useActions } from '../store/hooks'

const SearchField = () => {
  const { setUser } = useActions()
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const switchHandler = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setUser(inputValue)
    setInputValue('')
    navigate('/user')
  }, [inputValue, navigate, setUser])

  let input = document.getElementById("Search");
  input?.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("SearchBTN")?.click();
    }
  });

  return (
        <div className="outline outline-2 outline-yellow-300 w-6/12 h-14 rounded-2xl flex pl-4 pr-1 py-1 mt-14 mb-16 min-w-max">
        <input id="Search" className="focus:outline-0 w-full h-full text-lg"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          type="search"
        />
          { inputValue && <button
              id="SearchBTN"
              className="button-style"
              onClick={switchHandler}
              type='submit'>
            Найти
          </button>}
        </div>
  )
}

export default SearchField;
