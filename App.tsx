import React, { useState, useEffect } from 'react';
import { getDailyData } from './utils/dailyData.ts';
import type { DailyData } from './types.ts';
import Header from './components/Header.tsx';
import LuaCard from './components/LuaCard.tsx';
import OrixaCard from './components/OrixaCard.tsx';
import ElementosCard from './components/ElementosCard.tsx';
import CombinacaoCard from './components/CombinacaoCard.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
    const [dailyData, setDailyData] = useState<DailyData | null>(null);

    useEffect(() => {
        const data = getDailyData();
        setDailyData(data);
    }, []);

    if (!dailyData) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-700">Carregando Axé...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 text-gray-700">
            <Header />
            <main className="container mx-auto p-4 md:p-8 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-8">
                        <LuaCard lua={dailyData.lua} />
                        <ElementosCard elementos={dailyData.elementos} />
                    </div>
                    <div className="lg:col-span-2 space-y-8">
                        <OrixaCard orixa={dailyData.orixa} />
                        <CombinacaoCard lua={dailyData.lua} orixa={dailyData.orixa} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;