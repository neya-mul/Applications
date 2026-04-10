import React, { use } from 'react'
import AppCard from './AppCard'
import { Link } from 'react-router';
const appPromise = fetch('/data.json')
    .then(res => res.json())




export default function Apps() {
    const apps = use(appPromise)
    console.log(apps);


    return (
        <div>
            <div className='container mx-auto'>
                <div className='text-center py-10 text-purple-400'>
                    <h1 className='text-4xl font-bold my-1'>Trending Apps</h1>
                    <p>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        apps.slice(0,9).map(app => <AppCard app={app} key={app.id}></AppCard>)
                    }
                </div>
                <div className='text-center my-7'>
                    <button className='btn bg-purple-950/20 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500'><Link to="apps">All Apps</Link></button>
                </div>
            </div>


        </div>
    )
}
