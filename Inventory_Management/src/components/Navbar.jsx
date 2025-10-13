import React, { useState } from "react";

function Navbar(){
    const [activeItem, setActiveItem] = useState('Dashboard');

    const navItems = [
        {
            name: 'Dashboard',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
            )
        },
        {
            name: 'Inventory',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
            )
        },
        {
            name: 'Users',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
            )
        },
        {
            name: 'Reports',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
            )
        }
    ];

    return (
        <>
        <div className="bg-gray-200 min-h-screen fixed inset-0">
            <aside id="sidebar" className="bg-gray-800 text-gray-300 w-64 fixed top-4 left-4 bottom-4 transform transition-all duration-300 ease-in-out z-50 shadow-2xl border border-gray-600 rounded-2xl" style={{height: 'calc(100vh - 32px)'}}>
                
                {/* Header */}
                <div className="p-6 border-b border-gray-600 rounded-t-2xl bg-gray-700">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
                            <p className="text-xs text-gray-400">Management System</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="mt-6 px-3 pb-20">
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a 
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveItem(item.name);
                                    }}
                                    className={`
                                        group flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200 relative
                                        ${activeItem === item.name 
                                            ? 'bg-white text-black shadow-lg transform scale-105' 
                                            : 'text-gray-300 hover:bg-gray-600 hover:text-white hover:transform hover:scale-105'
                                        }
                                    `}
                                >
                                    {/* Active indicator */}
                                    {activeItem === item.name && (
                                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
                                    )}
                                    
                                    {/* Icon */}
                                    <div className={`
                                        mr-3 transition-transform duration-200 group-hover:scale-110
                                        ${activeItem === item.name ? 'text-black' : 'text-gray-400 group-hover:text-white'}
                                    `}>
                                        {item.icon}
                                    </div>
                                    
                                    {/* Text */}
                                    <span className="text-sm font-semibold tracking-wide">
                                        {item.name}
                                    </span>

                                    {/* Hover effect */}
                                    <div className={`
                                        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                        ${activeItem !== item.name ? 'bg-gray-600/20' : ''}
                                    `}></div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Bottom section */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-600/50 rounded-b-2xl">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/50">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-black text-sm font-bold">A</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-white">Admin User</p>
                            <p className="text-xs text-gray-400">admin@company.com</p>
                        </div>
                        <button className="text-gray-400 hover:text-white transition-colors duration-200">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </aside>
            </div>
        </>
    )
}

export default Navbar;