import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1e1e1d] text-[#d4d0d0] py-12 px-6 md:px-16 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                
                {/* Column 1: Brand & Socials */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-[#246afc] font-bold text-xl">
                        {/* IdeaVault Lightbulb Logo */}
                         <svg className="w-8 h-8 text-blue-600 transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        <circle cx="12" cy="10" r="1.5" className="fill-blue-600" />
                    </svg>
                        <span className="text-white">Idea<span className="text-[#246afc]">Vault</span></span>
                    </div>
                    <p className="text-sm leading-relaxed max-w-sm text-[#e4e4e7]">
                        A community platform where innovators share, validate, and grow startup ideas together.
                    </p>
                    {/* Social Media Icons */}
                    <div className="flex gap-2 mt-2">
                        {/* X (formerly Twitter) */}
                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#3f3f46] hover:bg-[#27272a] transition-colors">
                            <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#3f3f46] hover:bg-[#27272a] transition-colors">
                            <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                        {/* GitHub */}
                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#3f3f46] hover:bg-[#27272a] transition-colors">
                            <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#3f3f46] hover:bg-[#27272a] transition-colors">
                            <svg className="w-4 h-4 fill-none stroke-current text-white" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                    </div>
                </div>

                {/* Column 2: Platform */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-white font-bold text-sm tracking-wider uppercase">Platform</h3>
                    <ul className="flex flex-col gap-2 text-sm font-medium">
                        <li><a href="#" className="hover:text-white transition-colors">Ideas</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Trending</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Submit idea</a></li>
                    </ul>
                </div>

                {/* Column 3: Account */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-white font-bold text-sm tracking-wider uppercase">Account</h3>
                    <ul className="flex flex-col gap-2 text-sm font-medium">
                        <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Register</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">My ideas</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Profile</a></li>
                    </ul>
                </div>

                {/* Column 4: Contact & Copyright */}
                <div className="flex flex-col gap-3 text-sm">
                    <h3 className="text-white font-bold text-sm tracking-wider uppercase">Contact</h3>
                    <div className="flex flex-col gap-2 font-medium">
                        <a href="mailto:hello@ideavault.io" className="flex items-center gap-2 hover:text-white transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            hello@ideavault.io
                        </a>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                            Dhaka, BD
                        </div>
                    </div>
                    {/* Copyright Note */}
                    <p className="text-xs text-[#71717a] mt-4 leading-normal">
                        &copy; {new Date().getFullYear()} IdeaVault. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;