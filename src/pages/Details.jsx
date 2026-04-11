import React, { use } from 'react'
import { Link, useParams } from 'react-router'

const appPromise = fetch('/data.json')
    .then(res => res.json())

export default function Details() {
    const { id } = useParams()
    const apps = use(appPromise)
    // console.log(apps);
    const expectedApp = apps.find(app => app.id == id)
    console.log(expectedApp);


    return (
         <div className="min-h-screen flex items-center justify-center p-6">
            <div className="relative w-full max-w-4xl min-h-[600px] rounded-3xl overflow-hidden">

                {/* Animated Background */}
                <div className="absolute inset-0 bg-linear-to-br from-[#26215C] via-[#3C3489] to-[#085041]" />
                <div className="absolute inset-0 opacity-10 animate-pulse"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                {/* Floating Orbs */}
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-purple-500/20 blur-2xl animate-bounce [animation-duration:4s]" />
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-500/20 blur-2xl animate-bounce [animation-duration:6s]" />
                <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-indigo-500/10 blur-xl animate-pulse [animation-duration:3s]" />

                {/* Content Grid */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-[600px]">

                    {/* Left — App Image */}
                    <div className="flex items-center justify-center p-12">
                        <div className="w-52 h-52 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl animate-[float_4s_ease-in-out_infinite]"
                            style={{ animation: 'float 4s ease-in-out infinite' }}>
                            <img
                                src={expectedApp.image}
                                alt={expectedApp.name}
                                className="w-36 h-36 object-contain rounded-2xl transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Right — Details */}
                    <div className="flex flex-col justify-center px-8 py-12 md:pl-0">

                        {/* Category Badge */}
                        <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 w-fit mb-4 animate-pulse [animation-duration:2s]">
                            <span className="w-2 h-2 rounded-full bg-teal-400 inline-block" />
                            <span className="text-xs text-white/80">{expectedApp.category}</span>
                        </div>

                        <h1 className="text-4xl font-semibold text-white mb-2 transition-all duration-700 hover:tracking-wide">
                            {expectedApp.name}
                        </h1>
                        <p className="text-sm text-white/60 mb-6 leading-relaxed">{expectedApp.description}</p>

                        {/* Stats — no price */}
                        <div className="flex gap-3 mb-6">
                            {[
                                { label: 'Rating', value: `⭐ ${expectedApp.ratings.length}` },
                                { label: 'Downloads', value: expectedApp.downloads ?? 'N/A' },
                                { label: 'Developer', value: expectedApp.companyName ?? 'Unknown' },
                            ].map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-center transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-white/30 cursor-default"
                                    style={{ animationDelay: `${i * 150}ms` }}
                                >
                                    <div className="text-base font-medium text-white truncate max-w-[80px]">{stat.value}</div>
                                    <div className="text-[11px] text-white/50 mt-0.5">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3">
                            <button className="flex-1 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-95 transition-all duration-200 text-white font-medium text-sm hover:shadow-lg hover:shadow-purple-500/30">
                                Download Now
                            </button>
                            <Link to="/apps">
                                <button className="py-3 px-4 rounded-xl border border-white/30 hover:bg-white/10 active:scale-95 transition-all duration-200 text-white text-sm">
                                    ← Back
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* Float keyframe */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-16px); }
                }
            `}</style>
        </div>
    )
}
