function Register() {
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
                    <h1 className="text-2xl sm:text-3xl font-bold text-purple-900 md:text-4xl">Registration and Payment</h1>
                    <a
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-300/50 transition hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-purple-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                        href="https://forms.gle/6m89695cDGUDLo1dA"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Register Now!
                    </a>
                    <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-700">
                        Prospective participants are required to register in advance on or before <span className="font-semibold text-purple-900">15 Jan 2026</span>. Complete the Google Form and pay any prescribed fee using the payment details provided inside the form.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 text-sm font-medium pt-2">
                        <span className="rounded-full bg-purple-100 px-4 py-2 text-purple-800">
                            📅 Closes: 15 Jan 2026
                        </span>
                        <span className="rounded-full bg-indigo-50 px-4 py-2 text-indigo-700">
                            📄 Google Form required
                        </span>
                    </div>
                </div>

                {/* Fee Highlight Section */}
                <div className="relative mb-6 sm:mb-10">
                    <div className="rounded-2xl border-2 border-purple-200/80 bg-gradient-to-br from-purple-50/80 to-indigo-50/50 p-4 sm:p-6 lg:p-8 shadow-md">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex-1">
                                <h2 className="text-lg sm:text-xl font-bold text-purple-900 mb-2">Registration Fee</h2>
                                <p className="text-sm sm:text-base text-gray-700">
                                    Participants from institutions other than Kannur University are required to pay a registration fee at the time of registration.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="rounded-xl bg-white/80 px-6 py-4 text-center shadow-sm border border-purple-100">
                                    <div className="text-sm text-gray-600 mb-1">Fee Amount</div>
                                    <div className="text-3xl font-bold text-purple-900">₹750</div>
                                    <div className="text-xs text-gray-500 mt-1">Non-KU participants</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Registration Steps */}
                <div className="relative mb-6 sm:mb-10">
                    <h2 className="text-lg sm:text-xl font-bold text-purple-900 mb-4 sm:mb-6">How to Register</h2>
                    <div className="space-y-3 sm:space-y-4">
                        <div className="rounded-2xl border border-purple-100/70 bg-white/40 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex gap-3 sm:gap-4">
                                <div className="flex-shrink-0">
                                    <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-base sm:text-lg font-bold text-white shadow-md">1</span>
                                </div>
                                <div className="flex-1 pt-1">
                                    <h3 className="text-base sm:text-lg font-semibold text-purple-900 mb-2">Fill the Google Form</h3>
                                    <p className="text-sm sm:text-base text-gray-700">
                                        Complete the online registration form with your participant details on or before 15 Jan 2026. Ensure all required information is accurate.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-purple-100/70 bg-white/40 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex gap-3 sm:gap-4">
                                <div className="flex-shrink-0">
                                    <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-base sm:text-lg font-bold text-white shadow-md">2</span>
                                </div>
                                <div className="flex-1 pt-1">
                                    <h3 className="text-base sm:text-lg font-semibold text-purple-900 mb-2">Complete Payment</h3>
                                    <p className="text-sm sm:text-base text-gray-700">
                                        Where applicable, pay the prescribed fee using the account number or UPI ID provided inside the registration form. Keep your payment confirmation for verification.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="relative mb-6 sm:mb-10">
                    <h2 className="text-lg sm:text-xl font-bold text-purple-900 mb-4 sm:mb-6">Additional Information</h2>
                    <div className="rounded-2xl border border-purple-100/70 bg-white/40 p-4 sm:p-6 shadow-sm">
                        <div className="flex gap-3 items-start">
                            <div className="flex-shrink-0 text-xl sm:text-2xl">🏨</div>
                            <div className="flex-1">
                                <h3 className="text-base sm:text-lg font-semibold text-purple-900 mb-2">Accommodation</h3>
                                <p className="text-sm sm:text-base text-gray-700">
                                    Accommodation can be arranged on request at the cost of the participants. Please indicate your need for accommodation in the registration form to help us coordinate options.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative">
                    <div className="rounded-2xl border border-purple-200/80 bg-gradient-to-br from-white/80 to-purple-50/50 p-4 sm:p-6 lg:p-8 shadow-lg text-center">
                        <h2 className="text-xl sm:text-2xl font-bold text-purple-900 mb-3">Ready to Register?</h2>
                        <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 max-w-2xl mx-auto">
                            Submit your details and complete payment confirmations through the official Google Form.
                            <span className="block mt-2 text-xs sm:text-sm">
                                <span className="font-semibold text-purple-900">Deadline:</span> 15 Jan 2026 — please register before this date.
                            </span>
                        </p>
                        <a
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-300/50 transition hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-purple-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                            href="https://forms.gle/6m89695cDGUDLo1dA"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Open Registration Form →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register