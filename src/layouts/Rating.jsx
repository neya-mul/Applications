import React from 'react'

export default function Rating() {
    const stats = [
        {
            label: 'Total Downloads',
            value: '29.6M',
            badge: '↑ 21% more than last month',
        },
        {
            label: 'Total Reviews',
            value: '906K',
            badge: '↑ 46% more than last month',
        },
        {
            label: 'Active Apps',
            value: '132+',
            badge: '🚀 31 more launching soon',
        },
    ]

    return (
        <section
            className="py-20 px-6"
            style={{
                background: 'linear-gradient(135deg, #0d0d0d 0%, #1a0a2e 50%, #0d0d0d 100%)',
            }}
        >
            <div className="max-w-4xl mx-auto text-center ">

               
                <h2 className="text-4xl font-semibold text-purple-400 mb-14 leading-tight">
                    Trusted by millions,<br />built for you
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 ">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="rounded-2xl px-8 py-8 text-left border border-purple-900 max-w-96 mx-auto shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-700"
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(167,139,250,0.2)',
                            }}
                        >
                            <p className="text-gray-400 text-sm mb-3 font-medium">{stat.label}</p>
                            <p
                                className="font-semibold text-purple-400 mb-3"
                                style={{ fontSize: '2.75rem', lineHeight: 1 }}
                            >
                                {stat.value}
                            </p>
                            <span
                                className="inline-block text-xs font-medium px-3 py-1 rounded-full"
                                style={{
                                    background: 'rgba(139,92,246,0.15)',
                                    color: '#a78bfa',
                                    border: '1px solid rgba(139,92,246,0.25)',
                                }}
                            >
                                {stat.badge}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
