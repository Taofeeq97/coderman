import { useTheme } from 'next-themes'
import React from 'react'

const ModeToggle = () => {
    const { theme, setTheme } = useTheme()
    return (
      <button 
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-full border"
      >
        Toggle Theme
      </button>
    )
  } 