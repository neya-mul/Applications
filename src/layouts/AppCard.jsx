import React from 'react'
import { Link } from 'react-router'

export default function AppCard({ app }) {
    return (

        <div className="card border border-purple-900 max-w-96 mx-auto shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500"
            style={{ background: 'linear-gradient(145deg, #0d0d0d, #1a0a2e)' }}>

            <figure className="px-6 py-8">
                <img
                    src={app.image}
                    alt={app.title}
                    className="w-24 h-24 rounded-2xl object-cover ring-2 ring-purple-500/30"
                />
            </figure>

            <div className="card-body px-6 pb-6">

                <div className="flex items-start justify-between gap-2">
                    <h2 className="card-title text-white text-lg leading-tight">{app.title}</h2>
                    <span className="badge badge-outline border-purple-500 text-purple-400 text-xs shrink-0">
                        ★ {app.ratingAvg}
                    </span>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">{app.description}</p>

                <div className="grid grid-cols-3 gap-2 my-2">
                    <div className="rounded-xl p-2 text-center" style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.15)' }}>
                        <p className="text-purple-400 text-xs mb-0.5">Downloads</p>
                        <p className="text-white text-sm font-semibold">{app.downloads}</p>
                    </div>
                    <div className="rounded-xl p-2 text-center" style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.15)' }}>
                        <p className="text-purple-400 text-xs mb-0.5">Reviews</p>
                        <p className="text-white text-sm font-semibold">{app.reviews}</p>
                    </div>
                    <div className="rounded-xl p-2 text-center" style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.15)' }}>
                        <p className="text-purple-400 text-xs mb-0.5">Size</p>
                        <p className="text-white text-sm font-semibold">{app.size}MB</p>
                    </div>
                </div>

                <p className="text-xs text-gray-500">{app.companyName}</p>

                <div className="card-actions mt-1">
                    <Link to={`/apps/${app.id}`} className='w-full'> <button className="btn btn-sm w-full text-white border-0"
                        style={{ background: 'linear-gradient(135deg, #7c3aed, #a78bfa)' }}>
                        View Details
                    </button></Link>
                </div>

            </div>
        </div>
    )
}
