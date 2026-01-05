function About() {
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
                    <h1 className="text-2xl sm:text-3xl font-bold text-purple-900 md:text-4xl">About the Event</h1>
                    <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-700">
                        A focused workshop and seminar on graphs, algorithms, and emerging applications, hosted by the Department of Mathematical Sciences, Kannur University.
                    </p>
                </div>

                {/* Workshop Section */}
                <div className="relative mb-6 sm:mb-10">
                    <div className="rounded-2xl border border-purple-100/70 bg-white/40 p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex gap-3 sm:gap-4 items-start mb-3 sm:mb-4">
                            <div className="flex-shrink-0 text-2xl sm:text-3xl">🎓</div>
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3 sm:mb-4">About the Workshop</h2>
                            </div>
                        </div>
                        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                            <p>
                                The proposed two-day workshop on graphs and algorithms is being organized as a prelude to the National Seminar on Recent Developments in Theory and Algorithms of Graphs. It aims to provide participants—research scholars, postgraduate students, and young faculty members—with a solid foundation in the fundamental concepts and techniques of graph theory and algorithms.
                            </p>
                            <p>
                                Because the seminar will focus on recent research trends and advanced developments, participants are encouraged to first build clarity on basic principles and standard methodologies. The workshop will bridge introductory knowledge with advanced discussions, helping attendees engage meaningfully with the technical sessions and research presentations that follow.
                            </p>
                            <p>
                                While several workshops on general graph theory have been held elsewhere, focused workshops on graph algorithms are relatively rare. This makes the event especially significant for those interested in algorithmic perspectives of graphs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Conference Section */}
                <div className="relative mb-6 sm:mb-10">
                    <div className="rounded-2xl border border-purple-100/70 bg-white/40 p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex gap-3 sm:gap-4 items-start mb-3 sm:mb-4">
                            <div className="flex-shrink-0 text-2xl sm:text-3xl">📊</div>
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3 sm:mb-4">About the Conference</h2>
                            </div>
                        </div>
                        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                            <p>
                                The seminar brings together researchers, academicians, and students to discuss recent advancements in graph theory and graph algorithms, with emphasis on new theoretical results, computational approaches, and emerging interdisciplinary applications.
                            </p>
                            <p>
                                Topics include, but are not limited to, spectral graph theory, graph colouring, network optimization, algorithmic graph theory, graph neural networks, and parameterized and approximation algorithms. The program also explores how probabilistic, parallel, and distributed computing paradigms are reshaping the design and analysis of graph algorithms.
                            </p>
                            <p>
                                This is the first conference on this theme in Kerala in recent years, offering opportunities for young researchers to present new findings.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Department Section */}
                <div className="relative mb-6 sm:mb-10">
                    <div className="rounded-2xl border-2 border-purple-200/80 bg-gradient-to-br from-purple-50/80 to-indigo-50/50 p-4 sm:p-6 lg:p-8 shadow-md">
                        <div className="flex gap-3 sm:gap-4 items-start mb-3 sm:mb-4">
                            <div className="flex-shrink-0 text-2xl sm:text-3xl">🏛️</div>
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3 sm:mb-4">About the Department</h2>
                            </div>
                        </div>
                        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                            <p>
                                The Department of Mathematical Sciences at Kannur University, Mangattuparamba Campus, began in 2008 with a four-semester MSc programme in Mathematics, committed to fostering advanced education and research for the northern region of Kerala. The department is an approved research center of the university, with several scholars having completed doctoral studies and many others pursuing research across branches of mathematics.
                            </p>
                            <p>
                                The department hosts an NBHM-funded library with an extensive collection of books and journals supporting teaching and research. Current offerings include MSc Mathematics and PhD programmes, combining rigorous academic training with opportunities for innovative research. A five-year integrated masters programme was introduced in 2025 to nurture young talent early.
                            </p>
                            <div className="rounded-xl bg-white/70 p-3 sm:p-4 mt-4 sm:mt-6 border border-purple-100">
                                <h3 className="text-base sm:text-lg font-semibold text-purple-900 mb-2 sm:mb-3">Research Areas</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="rounded-full bg-purple-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-purple-800">Graph Theory</span>
                                    <span className="rounded-full bg-purple-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-purple-800">Harmonic Analysis</span>
                                    <span className="rounded-full bg-purple-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-purple-800">Operator Algebra</span>
                                    <span className="rounded-full bg-purple-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-purple-800">Fuzzy Mathematics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
