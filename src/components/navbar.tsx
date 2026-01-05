
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Invited Speakers', path: '/speakers' },
    { label: 'Committees', path: '/committees' },
    { label: 'Registration', path: '/registration' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu when route changes
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    const navClasses = `sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? 'bg-gradient-to-r from-purple-900 to-indigo-900 text-white shadow-lg' : 'bg-white/80 text-gray-900 shadow-sm'}`;
    const linkBase = 'transition-colors';

    return (
        <nav className={navClasses}>
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto w-full">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <div className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 transition-colors ${scrolled ? 'bg-white/10 border-purple-300/50 text-white' : 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 text-purple-900'}`}>
                        <span className="font-bold tracking-widest text-sm sm:text-base lg:text-xl">WGA & CTAG 2026</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                    <ul className="flex space-x-7 text-base font-semibold">
                        {navItems.map(({ label, path }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) => {
                                        const baseColor = scrolled ? 'text-white hover:text-purple-200' : 'text-gray-800 hover:text-purple-700';
                                        const activeColor = scrolled ? 'text-purple-200 font-bold' : 'text-purple-900 font-bold';
                                        return `${linkBase} ${baseColor} ${isActive ? activeColor : ''}`.trim();
                                    }}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'}`}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {mobileMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className={`lg:hidden ${scrolled ? 'bg-gradient-to-r from-purple-900 to-indigo-900' : 'bg-white/95'} border-t ${scrolled ? 'border-purple-700' : 'border-gray-200'}`}>
                    <ul className="px-4 py-4 space-y-2">
                        {navItems.map(({ label, path }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    onClick={handleLinkClick}
                                    className={({ isActive }) => {
                                        const baseColor = scrolled ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-purple-50';
                                        const activeColor = scrolled ? 'bg-white/20 text-purple-200' : 'bg-purple-100 text-purple-900';
                                        return `block px-4 py-3 rounded-lg font-semibold transition-colors ${baseColor} ${isActive ? activeColor : ''}`.trim();
                                    }}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

