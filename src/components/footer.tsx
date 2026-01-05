import React from 'react'

function footer() {
    return (
        <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-6 sm:py-8 mt-8 sm:mt-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-xs sm:text-sm">&copy; 2026 WGA & CTAG 2026. All rights reserved.</p>
                        <p className="text-xs text-purple-200 mt-1">Department of Mathematical Sciences, Kannur University</p>
                    </div>
                    <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm">
                        <a href="/about" className="text-purple-200 hover:text-white transition-colors">About</a>
                        <span className="text-purple-400">•</span>
                        <a href="/contact" className="text-purple-200 hover:text-white transition-colors">Contact</a>
                        <span className="text-purple-400">•</span>
                        <a href="/registration" className="text-purple-200 hover:text-white transition-colors">Register</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer