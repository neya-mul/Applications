import React, { useContext } from 'react'
import AppProvider, { InstallAppContext } from '../contexts/AppProvider'

export default function Install() {
  let apps = useContext(InstallAppContext)
  let app = apps.install
  // console.log(app);

  return (
    <div cl>
      <div className='text-center'>
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div>
        {
          app.map(a => <InsallAppCard a={a}></InsallAppCard>)
        }
      </div>
    </div>
  )
}
