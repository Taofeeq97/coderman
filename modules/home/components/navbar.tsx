import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import ModeToggle from '@/components/ui/mode-toggle'

const Navbar = ({ userRole }: { userRole?: string }) => {

  return (
    <main className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4'>
      <div className='bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/10 rounded-full p-2 dark:border-white/10'>
        <div className='px-6 py-4 flex items-center justify-between'>
          <Link href='/' className='flex items-center gap-2'>
            <Image src={'/logo.svg'} alt='logo' width={100} height={24} />
            <span className='text-2xl font-bold tracking-widest text-amber-300'>
              Codemate
            </span>
          </Link>
          
          <div className='flex items-center justify-center gap-x-4'>
            <Link 
              href='/problems'
              className='text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-amber-300 transition-colors cursor-pointer border border-white/10 rounded-full px-4 py-2'
            >
              Problems
            </Link>
            <Link 
              href='/about'
              className='text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-amber-300 transition-colors cursor-pointer border border-white/10 rounded-full px-4 py-2'
            >
              About
            </Link>
            
            <SignedIn>
              <Link 
                href='/profile'
                className='text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-amber-300 transition-colors cursor-pointer border border-white/10 rounded-full px-4 py-2'
              >
                Profile
              </Link>
            </SignedIn>
          </div>
          
          <div className='flex items-center justify-center gap-x-4'>
            <ModeToggle />
            
            <SignedIn>
              {userRole === 'admin' && (
                <Link 
                  href='/create-problem'
                  className='text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-amber-300 transition-colors cursor-pointer border border-white/10 rounded-full px-4 py-2'
                >
                  Create Problem
                </Link>
              )}
              <UserButton afterSignOutUrl='/' />
            </SignedIn>
            
            <SignedOut>
              <SignInButton mode='modal'>
                <Button variant='outline' size='sm'>
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode='modal'>
                <Button variant='default' className='bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-400 dark:hover:bg-amber-500' size='lg'>
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Navbar