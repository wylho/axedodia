import React from 'react';
import { AxeIcon } from './Icons.tsx';

const Header: React.FC = () => {
    const today = new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <AxeIcon className="w-10 h-10 text-amber-600" />
                    <div>
                        <h1 className="text-2xl font-bold text-amber-700">Axé do Dia</h1>
                        <p className="text-sm text-gray-500 hidden md:block">Conecte-se com a força sagrada do seu dia.</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="font-semibold text-gray-700 capitalize">{today.split(',')[0]}</p>
                    <p className="text-sm text-gray-500">{today.split(',').slice(1).join(',')}</p>
                </div>
            </div>
        </header>
    );
};

export default Header;