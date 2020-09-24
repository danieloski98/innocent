import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Done() {
    const history = useHistory();
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div className="w-64 h-64 rounded-full bg-white flex items-center justify-center shadow-md">
                <img src={require('../assets/images/done.svg')}width="150" alt=""/>
            </div>

            <button 
            onClick={() => history.push('/home')}
            className="w-64 h-10 rounded bg-yellow-400 text-sm font-abeat shadow-lg mt-6">Book Again</button>
        </div>
    )
}
