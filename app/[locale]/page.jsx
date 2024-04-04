'use client'
import Logo from 'assets/images/logo.svg'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center p-24 h-[calc(100vh-70px)]'>
      <div className='w-[400px] h-auto flex flex-col items-center text-center'>
        <Logo className='w-[250px] mb-[20px]' />
        <h1>Next.js Boilerplate 1.0</h1>
      </div>
    </main>
  )
}
