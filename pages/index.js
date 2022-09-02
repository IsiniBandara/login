import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaLock, FaUser} from 'react-icons/fa'
import NextLink from 'next/link'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
        {/* <div className="h-2 bg-primary"></div> */}

<div className="container mx-auto p-8 ">
    <div className="mx-auto max-w-sm ">


        <div className="bg-white rounded shadow  ">
            <div className=" px-6 bg-primary  py-8 text-white text-left tracking-widest font-roboto">
                <h5 className='text-xl font-medium'>Welcome!</h5>
                <p className='text-sm font-normal'>Sign in to continue to SL Alert Dashboard</p>
            </div>
            {/* <div className="rounded-full">
                
            </div> */}

            <form className="bg-blue-dark px-10 py-20 space-y-[20px]">
            

                <div className="mb-3 ">
                  <span className='text-white'>Email</span>
                    <input className="border w-full p-1.5 text-black rounded" name="email" type="text" placeholder="admin@slalert.com"/>
                </div>
                <div className="mb-6">
                <span className='text-white'>Password</span>
                    <input className="border w-full p-1.5 rounded" name="password" type="password" placeholder="**************"/>
                   <div className='p-2 space-y-[25px] '> <input type="checkbox"></input><a href="#" className=" px-2 font-roboto text-white no-underline ">Remeber me</a></div>
                </div>
                
                <div className="flex">
                    <button className="bg-blue-light hover:bg-primary-dark rounded w-full p-2 text-sm text-white uppercase font-roboto tracking-wider">
                    Log In
                    </button>
                </div>
            </form>

            {/* <div className="border-t px-10 py-6">
                <div className="flex justify-between">
                    <a href="#" className="font-bold text-primary hover:text-primary-dark no-underline">Join us now</a>
                    <a href="#" className="text-grey-darkest hover:text-black no-underline">Forgot Password?</a>
                </div>
            </div> */}
        </div>
    </div>
</div>
          <div className="py-8 text-center">
               <p>Powered by Derana Macroentertainment (pvt) ltd</p>
            </div>
    </div>
  )
}
