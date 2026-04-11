// import React from 'react'
import { NavLink } from "react-router"
import logo from "../images/logo.png"
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (

    <footer className="bg-[#1a0a2e] border-t border-purple-900/50 mt-20">

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="logo" className="w-10 animate-spin [animation-duration:5s]" />
              <span className="text-2xl font-bold text-white">HERO.IO</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Discover and explore the most trending web apps on the market, all in one place. Built with passion, designed for everyone.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-purple-900/30 border border-purple-700/30 flex items-center justify-center text-white/50 hover:text-white hover:border-purple-500 hover:bg-purple-800/40 transition-all duration-200">
                <FaGithub size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-purple-900/30 border border-purple-700/30 flex items-center justify-center text-white/50 hover:text-white hover:border-purple-500 hover:bg-purple-800/40 transition-all duration-200">
                <FaTwitter size={16} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-purple-900/30 border border-purple-700/30 flex items-center justify-center text-white/50 hover:text-white hover:border-purple-500 hover:bg-purple-800/40 transition-all duration-200">
                <FaDiscord size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/apps', label: 'Apps' },
                { to: '/install', label: 'Installed' },
              ].map(link => (
                <li key={link.to}>
                  <NavLink to={link.to}
                    className={({ isActive }) =>
                      `text-sm transition-all duration-200 hover:text-purple-400 ${isActive ? 'text-purple-400' : 'text-white/40'}`
                    }>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contribute */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Contribute</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Want to add your app or improve HERO.IO? We welcome all contributors.
            </p>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <button className="flex items-center gap-2 py-2 px-4 rounded-xl bg-purple-900/20 border border-purple-700/30 hover:border-purple-500 hover:bg-purple-800/30 transition-all duration-200 text-white/70 hover:text-white text-sm">
                <FaGithub size={14} />
                GitHub
              </button>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-purple-900/30 py-5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} HERO.IO — All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>

    </footer>
  )
}
