"use client"
import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

const ModeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    
    React.useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) {
        return null
    }
    

    
  return (
    <Button
    variant='ghost'
    size='icon'
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
        {theme === 'dark' ? <Sun className='h-[1.2rem] w-[1.2rem]' /> : <Moon className='h-[1.2rem] w-[1.2rem]' />}
    </Button>
  )
}

export default ModeToggle