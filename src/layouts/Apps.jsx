import React, { use, useState } from 'react'
import AppCard from './AppCard'
import { Link } from 'react-router';
// const [loading, setLoding] = useState(false)
// import AppPromise from '../context/appPromise';

const appPromise = fetch('/data.json')
    .then(res => res.json())


export default function Apps() {
    const apps = use(appPromise)
    // setLoding(false)




    return (
        <div>

            <div className='container mx-auto pt-10'>
                <div className='text-center py-10 text-purple-400'>
                    <h1 className='text-4xl font-bold my-1'>Trending Apps</h1>
                    <p>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        apps.slice(0, 9).map(app => <AppCard app={app} key={app.id}></AppCard>)
                    }
                </div>
                <div className='text-center my-7'>
                    <button className='btn bg-purple-950/20 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500 hover:[box-shadow:0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300'><Link to="apps">All Apps</Link></button>
                </div>
            </div>


        </div>
    )
}
