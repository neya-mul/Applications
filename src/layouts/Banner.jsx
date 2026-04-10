import React from 'react'
import banner from "../images/hero.png"

export default function Banner() {
  return (
    <div className="pt-16 px-8 text-center max-w-2xl mx-auto "
    >

      {/* <div className="inline-block bg-gray-100 border border-gray-200 rounded-full px-4 py-1 text-xs text-gray-500 tracking-widest uppercase mb-6">
        HERO.IO
      </div> */}

      <h1 className="text-5xl font-medium leading-tight mb-5 text-white">
        We build<br />
        <span className="text-purple-400">productive</span> apps
      </h1>

      <p className="text-base leading-relaxed text-white max-w-md mx-auto mb-8">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>

      <div className="flex gap-3 justify-center flex-wrap">

        <button className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm hover:bg-gray-50 active:scale-95 transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3.18 23.76c.33.18.7.24 1.07.18L15.61 12 12 8.39 3.18 23.76z" fill="#EA4335"/>
            <path d="M20.65 10.35l-3.17-1.83L13.41 12l4.07 4.07 3.17-1.83A2 2 0 0 0 20.65 10.35z" fill="#FBBC04"/>
            <path d="M4.25.06A2 2 0 0 0 3 2v.06l8.59 8.6 3.61-3.61L4.25.06z" fill="#4285F4"/>
            <path d="M3 21.94V22a2 2 0 0 0 1.25 1.94l9.95-9.95L11.59 12 3 21.94z" fill="#34A853"/>
          </svg>
          <div className="text-left">
            <div className="text-xs text-gray-400 leading-none">Get it on</div>
            <div className="text-sm font-medium leading-snug">Google Play</div>
          </div>
        </button>

        <button className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm hover:bg-gray-50 active:scale-95 transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.08 1.21-2.06 3.61.03 2.85 2.5 3.8 2.52 3.81zm-6.7-15.5c.73-.89 1.94-1.56 2.94-1.6.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.01z"/>
          </svg>
          <div className="text-left">
            <div className="text-xs text-gray-400 leading-none">Download on the</div>
            <div className="text-sm font-medium leading-snug">App Store</div>
          </div>
        </button>

      </div>

      <img src={banner} alt=""  className='mt-10  mx-auto'/>
    </div>
  )
}