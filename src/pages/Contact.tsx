

function Contact() {
    return (
        <div className="min-h-[70vh] rounded-lg bg-gradient-to-br from-purple-50 via-white to-slate-50">
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
                <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-purple-200/50 blur-3xl" />
                <div className="pointer-events-none absolute -right-10 -bottom-16 h-48 w-48 rounded-full bg-indigo-200/50 blur-3xl" />

                {/* Header Section */}
                <div className="relative text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                    <p className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-purple-800">
                        WGA & CTAG 2026
                    </p>
                    <h1 className="text-2xl sm:text-3xl font-bold text-purple-900 md:text-4xl">Contact Us</h1>
                    <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-700">
                        Have questions? Feel free to reach out to us. We're here to help!
                    </p>
                </div>

                {/* Contact Information */}
                <div className="relative space-y-4 sm:space-y-6">
                    {/* Phone Numbers */}
                    <div className="rounded-2xl border border-purple-100/70 bg-white/40 p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex gap-3 sm:gap-4 items-start mb-3 sm:mb-4">
                            <div className="flex-shrink-0 text-2xl sm:text-3xl">📞</div>
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3 sm:mb-4">Phone</h2>
                            </div>
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                            <a href="tel:9446477054" className="flex items-center gap-3 text-sm sm:text-base lg:text-lg text-gray-700 hover:text-purple-700 transition-colors">
                                <span className="text-purple-600">•</span>
                                <span>+91 94464 77054</span>
                            </a>
                            <a href="tel:8137092284" className="flex items-center gap-3 text-sm sm:text-base lg:text-lg text-gray-700 hover:text-purple-700 transition-colors">
                                <span className="text-purple-600">•</span>
                                <span>+91 81370 92284</span>
                            </a>
                            <a href="tel:9188029020" className="flex items-center gap-3 text-sm sm:text-base lg:text-lg text-gray-700 hover:text-purple-700 transition-colors">
                                <span className="text-purple-600">•</span>
                                <span>+91 91880 29020</span>
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="rounded-2xl border-2 border-purple-200/80 bg-gradient-to-br from-purple-50/80 to-indigo-50/50 p-4 sm:p-6 lg:p-8 shadow-md">
                        <div className="flex gap-3 sm:gap-4 items-start mb-3 sm:mb-4">
                            <div className="flex-shrink-0 text-2xl sm:text-3xl">✉️</div>
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3 sm:mb-4">Email</h2>
                            </div>
                        </div>
                        <a 
                            href="mailto:seminarkucmaths@gmail.com" 
                            className="text-sm sm:text-base lg:text-lg text-purple-700 hover:text-purple-900 font-medium transition-colors underline decoration-purple-400 decoration-2 underline-offset-4 break-all"
                        >
                            seminarkucmaths@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact