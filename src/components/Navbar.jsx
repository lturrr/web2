"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Popup from "@/components/Popup";
import { useState } from "react";

const NavBar = () => {
    const pathname = usePathname();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    
    const scrollToAchievements = (e) => {
        e.preventDefault();
        
        if (pathname !== '/') {
            window.location.href = '/#achievements-section';
            return;
        }
        
        const achievementsSection = document.getElementById('achievements-section');
        if (achievementsSection) {
            achievementsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const scrollToServices = (e) => {
        e.preventDefault();
        
        if (pathname !== '/') {
            window.location.href = '/#servers';
            return;
        }
        
        const servicesSection = document.getElementById('servers');
        if (servicesSection) {
            servicesSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const scrollToHome = (e) => {
        e.preventDefault();
        
        if (pathname !== '/') {
            window.location.href = '/';
            return;
        }
        
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    const handleStartClick = (e) => {
        e.preventDefault();
        setIsPopupOpen(true);
    };

    return (
        <>
            <nav className="navigation">
                <a 
                    href="/#home" 
                    className="nav-link" 
                    onClick={scrollToHome}
                >
                    Главная
                </a>                
                <a 
                    href="/#achievements-section" 
                    className="nav-link" 
                    onClick={scrollToAchievements}
                >
                    О нас
                </a>
                
                <a 
                    href="/#servers" 
                    className="nav-link" 
                    onClick={scrollToServices}
                >
                    Услуги
                </a>
                
                <a 
                    href="#consultation" 
                    className="nav-link acctive" 
                    onClick={handleStartClick}
                >
                    Начать
                </a>
            </nav>

            <Popup 
                isOpen={isPopupOpen} 
                onClose={() => {
                    setIsPopupOpen(false);
                    if (window.location.hash === '#consultation') {
                        window.history.pushState({}, '', window.location.pathname);
                    }
                }} 
            />
        </>
    );
};

export default NavBar;