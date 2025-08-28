
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title: string;
    icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = '', title, icon }) => {
    return (
        <div className={`bg-white/90 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 overflow-hidden ${className}`}>
            <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200/80 flex items-center space-x-3">
                <div className="text-amber-600">{icon}</div>
                <h2 className="text-xl font-bold text-gray-700">{title}</h2>
            </div>
            <div className="p-5">
                {children}
            </div>
        </div>
    );
};

export default Card;
