import React from 'react';
import type { OrixaInfo } from '../types.ts';
import Card from './Card.tsx';
import { StarIcon, MusicIcon } from './Icons.tsx';

interface OrixaCardProps {
    orixa: OrixaInfo;
}

const OrixaCard: React.FC<OrixaCardProps> = ({ orixa }) => {
    return (
        <Card title={`Regente do Dia: ${orixa.nome}`} icon={orixa.icone}>
            <div className="space-y-4">
                <div className="text-center">
                    <p className="text-2xl font-bold text-amber-800">{orixa.saudacao}</p>
                    <p className="text-gray-600 mt-2">{orixa.descricao}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-bold">Cores</h4>
                        <p>{orixa.cores}</p>
                    </div>
                     <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-bold">Elementos</h4>
                        <p>{orixa.elementos}</p>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold flex items-center gap-2"><StarIcon className="w-5 h-5"/> Oferendas Recomendadas:</h4>
                    <ul className="list-disc list-inside text-gray-600 mt-1 space-y-1">
                        {orixa.oferendas.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold flex items-center gap-2"><MusicIcon className="w-5 h-5"/> Ponto Cantado do Dia:</h4>
                    <p className="italic text-gray-600 mt-1">"{orixa.pontoCantado}"</p>
                </div>
            </div>
        </Card>
    );
};

export default OrixaCard;