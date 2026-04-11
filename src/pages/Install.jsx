import React, { useContext } from 'react'
import AppProvider, { InstallAppContext } from '../contexts/AppProvider'
import InsallAppCard from '../layouts/InsallAppCard'
import { Link } from 'react-router'

export default function Install() {
  let apps = useContext(InstallAppContext)
  let app = apps.install
  // console.log(app);

  return (
    <div className='container mx-auto py-30'>
      <div className='text-center'>
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div>
        <div>
          <h1 className='text-3xl font-bold'>{app.length} Apps found</h1>
        </div>
        <div className='my-10 '>
          {app.length === 0 ?
            <div className="flex flex-col items-center justify-center mt-20 gap-4 border border-purple-500 rounded-2xl py-2.5" >
              <p className="text-6xl">📭</p>
              <h1 className="text-2xl font-semibold text-white/70">No apps installed yet</h1>
              <p className="text-white/40 text-sm">Browse our collection and install your favorite apps</p>
              <Link to="/apps">
                <button className="mt-2 py-2 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-95 transition-all duration-200 text-white text-sm">
                  Browse Apps
                </button>
              </Link>
            </div> :

            app.map(a => <InsallAppCard a={a} key={a.id}></InsallAppCard>)

          }
        </div>
      </div>
    </div>
  )
}
