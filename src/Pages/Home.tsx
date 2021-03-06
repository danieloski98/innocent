import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory();
    return (
        <>
            
            <div className="w-full h-screen flex justify-center items-center flex-col px-10 py-10">

                <p className="text-center font-abeat text-2xl">
                    Innocent Airline
                </p>

                <div className="bg-white sm:w-full xl:w-2/5 h-400px rounded shadow-md mt-10 overflow-y-auto">
                    <p className="text-center font-poppins-medium text-xl text-gray-600 mt-6">Book Ticket</p>

                    <div className="flex-1 justify-center items-center flex flex-col px-10">
                        <input type="text" placeholder="From" className="sm:w-full sm:h-12 rounded bg-gray-200 px-4 mt-8 mb-5" />
                        <input type="text" placeholder="To" className="sm:w-full sm:h-12 rounded bg-gray-200 px-4  mb-5" />
                        <input type="text" placeholder="Duration" className="sm:w-full sm:h-12 rounded bg-gray-200 px-4  mb-5" />
                        <input type="text" placeholder="Number of people" className="sm:w-full sm:h-12 rounded bg-gray-200 px-4  mb-5" />
                        <input type="text" placeholder="Flight class" className="sm:w-full sm:h-12 rounded bg-gray-200 px-4  mb-5" />
                        <button 
                        onClick={() => history.push('/done')}
                        className="sm:w-full sm:h-12 rounded bg-yellow-500 px-4  mb-5 text-xs text-white">Book</button>
                        {/* <p 
                        onClick={() => history.push('/signup')}
                        className="text-right text-xs text-yellow-500 mt-10">Don't have an account? Sign up</p> */}
                    </div>

                </div>   

                <p className="text-center text-xs font-abeat mt-12 text-gray-600"> &copy; 2020 innocent airline</p>
            </div>   

        </>
    )
}
