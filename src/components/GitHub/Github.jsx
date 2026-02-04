import React, { useEffect, useState } from 'react'

function Github() {
    const [mydata, setmydata] = useState({})
    useEffect(() => {
        fetch('https://api.github.com/users/umersaif11')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setmydata(data)
        })
    }, [])
  return (
    <div 
    className='text-3xl text-white bg-gray-600 p-4 m-4 text-center flex gap-4'>
        <img src={mydata.avatar_url} alt="" />
        <div className='flex flex-col gap-6 justify-around'>
            <div>Github Name: <span className='text-orange-600'>{mydata.name}</span></div>
            <div className='text-start'>Github Followers: <span className='text-green-600'>{mydata.followers}</span></div>
            <div className='text-start'>Github Following: <span className='text-cyan-600'>{mydata.following}</span></div>
        </div>
    </div>
  )
}

export default Github