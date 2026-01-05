import Mainthing from "../components/mainthing";
import itDeptImg from "../assets/ITDEPT.png";
import ConferenceHomeData from "../components/ConfrenceHomeData";
import PMushalogo from "../assets/pmushalogo.png";

function Home() {
    return (
        <div className="relative font-serif px-4 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-purple-200/50 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 -bottom-16 h-48 w-48 rounded-full bg-indigo-200/50 blur-3xl" />

            <div className="relative">
                <Mainthing />

                {/* Registration Banner */}
                <div className="relative my-4 sm:my-6 lg:my-8">
                    <div className="rounded-2xl border-2 border-purple-200/80 bg-gradient-to-br from-purple-50/80 to-indigo-50/50 p-4 sm:p-6 lg:p-8 shadow-md">
                        <div className="relative z-10 text-center space-y-3 sm:space-y-4 lg:space-y-5">
                            <h2 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3">
                                Registrations are now open
                            </h2>
                            <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                                Join us for this distinguished workshop and conference on graphs and algorithms. Register before 15 Jan 2026 to secure your participation.
                            </p>
                            <a 
                                href="/registration" 
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-300/50 transition hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-purple-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                            >
                                Register Now
                            </a>
                        </div>
                    </div>
                </div>

                {/* Department Image */}
                <div className="relative mb-4 sm:mb-6 lg:mb-8">
                    <div className="rounded-2xl border border-purple-100/70 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <img
                            src={itDeptImg}
                            alt="Department of Mathematical Sciences"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                <ConferenceHomeData />

                {/* Funding Section */}
                <div className="relative my-4 sm:my-6 lg:my-8">
                    <div className="rounded-none sm:rounded-2xl border-x-0 sm:border border-y sm:border-y border-purple-200/80 bg-gradient-to-br from-indigo-50/80 to-purple-50/50 p-6 sm:p-8 lg:p-10 shadow-md text-center">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Funded by</h3>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-900 mb-6">PM–USHA SCHEME</h2>
                        <div className="flex justify-center">
                            <img 
                                src={PMushalogo} 
                                alt="PM Usha Scheme Logo" 
                                className="w-24 sm:w-32 lg:w-40 h-auto drop-shadow-md hover:scale-105 transition-transform duration-300" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;