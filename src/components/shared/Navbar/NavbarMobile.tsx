import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavbarMobile() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Detach the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full text-gray-400 z-10 transition-all duration-300 mt-5">
            <div className={`container bg-white mx-auto flex transition-all duration-300 items-center justify-center py-4 w-[70%]
            rounded-[50px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]
            ${scrolled ? 'bg-white/90' : ''} 
            `}>
                <div className="flex space-x-11">
                    <NavLink to="/" label="About" currentTab={location.pathname} scrolled={scrolled} />
                    <NavLink to="/project" label="Project" currentTab={location.pathname} scrolled={scrolled} />
                </div>
            </div>
        </header>
    );
}

function NavLink({ to, label, currentTab, scrolled }: { to: string, label: string, currentTab: string, scrolled: boolean }) {
    const isActive = currentTab === to;

    return (
        <div className="relative">
            <Link
                to={to}
                className={`text-[18px] transition-all duration-300 ${scrolled ? 'hover:text-black rounded-sm' : 'hover:text-secondary-navy-navy'} focus:outline-none ${isActive ? (scrolled ? 'text-secondary-navy' : 'text-secondary-navy') : 'text-gray-400'}`}
            >
                {label}
            </Link>
            {isActive && <div className={` rounded-sm absolute bottom-0 left-0 h-[2px] ${scrolled ? 'bg-secondary-navy rounded-sm' : 'bg-white'} w-full transition-all duration-300`}></div>}
        </div>
    );
}

export default NavbarMobile;
