import React, { use } from 'react'
const appPromise = fetch('/data.json')
    .then(res => res.json())




export default function Apps() {
    const apps = use(appPromise)
   
    return (
        <div>
            <div className='container mx-auto'>
                <div className='text-center py-10 text-purple-400'>
                    <h1 className='text-4xl font-bold my-1'>Trending Apps</h1>
                    <p>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div>

                </div>
            </div>


        </div>
    )
}
