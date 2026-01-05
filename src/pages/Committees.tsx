function Committees() {
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
                    <h1 className="text-2xl sm:text-3xl font-bold text-purple-900 md:text-4xl">Committees</h1>
                    <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-700">
                        Meet the dedicated team organizing and guiding this event to ensure its success.
                    </p>
                </div>

                {/* Patron Section */}
                <div className="relative mb-6 sm:mb-10">
                    <div className="rounded-2xl border-2 border-purple-200/80 bg-gradient-to-br from-purple-50/80 to-indigo-50/50 p-4 sm:p-6 lg:p-8 shadow-md">
                        <div className="flex gap-3 sm:gap-4 items-start mb-3 sm:mb-4">
                            {/* <div className="flex-shrink-0 text-3xl">👑</div> */}
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3 sm:mb-4">Patron</h2>
                            </div>
                        </div>
                        <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Prof. K. K. Saju (Hon'ble Vice Chancellor, Kannur University)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Advisory Committee Section */}
                <div className="relative mb-6 sm:mb-10">
                    <div className="rounded-2xl border border-purple-100/70 bg-white/40 p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex gap-3 sm:gap-4 items-start mb-3 sm:mb-4">
                            {/* <div className="flex-shrink-0 text-3xl">🎯</div> */}
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3 sm:mb-4">Advisory Committee</h2>
                            </div>
                        </div>
                        <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Dr. Wilfried Imrich</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Dr. Manoj Changat</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Dr. Narayanan.N</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Dr. Rogers Mathew</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Dr. Ambat Vijayakumar</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Dr. Raji Pilakkat</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Dr. Preethi Kuttiplakkel</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Dr. Kishori P. Narayankar</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Organising Committee Section */}
                <div className="relative mb-6 sm:mb-10">
                    <div className="rounded-2xl border border-purple-100/70 bg-white/40 p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex gap-3 sm:gap-4 items-start mb-3 sm:mb-4">
                            {/* <div className="flex-shrink-0 text-3xl">🤝</div> */}
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3 sm:mb-4">Organising Committee</h2>
                            </div>
                        </div>
                        <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Dr. Ramakrishnan T. V. (Convenor)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Dr. Sruthymurali</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Dr. Anoop V. P.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Dr. Sithara Ramesan</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Dr. Shahul Hameed</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Dr(Sr). Bindu K. Thomas</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Mr. Sangeeth S. J.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Ms. Athulyakrishna. K</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Ms. Aswani Prakash</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span>Mr. Pratheesh Kumar K.V</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Committees