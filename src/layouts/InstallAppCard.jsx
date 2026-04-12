import React, { useContext } from 'react'
import AppProvider, { InstallAppContext } from '../contexts/AppProvider'
import { toast } from 'react-toastify'

export default function InstallAppCard({ a }) {
  const { install, setInstall } = useContext(InstallAppContext)
  // console.log(install);
  const deletedApp = install.filter(i => i.id !== a.id)

  const unInstallbutton = () => {
    setInstall(deletedApp)
    // console.log(setInstall);
    toast.warning(
      <div>
        <span className='text-xl font-bold'>{a.title} </span>has uninstalled
      </div>

    )


  }

  return (
    <div className='flex justify-between items-center border border-purple-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500 p-5 rounded-2xl my-5'>
      <div className='flex items-center gap-2.5'>
        <img src={a.image} alt="" className='h-[100px] rounded-2xl' />
        <div>
          <h1 className='text-2xl font-bold'>{a.title}</h1>
          <p className='line-clamp-2 max-w-[400px]'>{a.description}</p>
        </div>
      </div>
      <div>
        <button className='btn bg-purple-950/20 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500 hover:[box-shadow:0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300' onClick={unInstallbutton}>Uninstall</button>
      </div>
    </div>
  )
}
