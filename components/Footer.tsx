
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="mt-12 py-6 bg-transparent">
            <div className="container mx-auto px-4 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Axé do Dia. Desenvolvido com fé e tecnologia.</p>
                <p className="text-sm mt-1">Este é um aplicativo de estudo e reverência. Respeite os fundamentos.</p>
            </div>
        </footer>
    );
};

export default Footer;
