import React from 'react';
import type { LuaInfo, OrixaInfo } from '../types.ts';
import Card from './Card.tsx';
import { getMensagemDoDia } from '../services/geminiService.ts';
import { MessageIcon, WarningIcon, CheckCircleIcon, BanIcon } from './Icons.tsx';

interface CombinacaoCardProps {
    lua: LuaInfo;
    orixa: OrixaInfo;
}

const CombinacaoCard: React.FC<CombinacaoCardProps> = ({ lua, orixa }) => {
    // A mensagem agora é gerada instantaneamente de forma local.
    const mensagem = getMensagemDoDia(orixa, lua);

    const getCombinacaoText = () => {
        return `A energia de ${lua.energia.toLowerCase().replace('.', '')} da ${lua.fase} se une à força de ${orixa.nome}, criando um dia propício para...`;
    };
    
    const getRecomendacao = () => {
        if (lua.fase === 'Lua Cheia') return `Rituais de expansão e oferendas para ${orixa.nome}.`;
        if (lua.fase === 'Lua Crescente') return `Firmar pedidos de crescimento e prosperidade na linha de ${orixa.nome}.`;
        if (lua.fase === 'Lua Nova') return `Meditação e planejamento de novos ciclos com a bênção de ${orixa.nome}.`;
        if (lua.fase === 'Lua Minguante') return `Banhos de limpeza e descarrego na vibração de ${orixa.nome}.`;
        return `Práticas de fé e caridade.`;
    };
    
    const getEvitar = () => {
        if (lua.fase === 'Lua Minguante') return `Iniciar novos projetos importantes. Foco na finalização.`;
        if (['Exú & Omulú/Obaluaê', 'Ogum'].includes(orixa.nome)) return `Conflitos desnecessários e discussões acaloradas.`;
        return `Pensamentos negativos e atitudes de descrença.`;
    };

    return (
        <Card title="Combinação Energética" icon={<MessageIcon className="w-6 h-6"/>}>
            <div className="space-y-4">
                <div>
                    <p className="text-gray-600">{getCombinacaoText()}</p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <h4 className="font-bold text-amber-800 flex items-center gap-2"><MessageIcon className="w-5 h-5"/> Mensagem do Dia</h4>
                    <p className="text-amber-700 italic mt-1">"{mensagem}"</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-800 flex items-center gap-2"><CheckCircleIcon className="w-5 h-5"/> Recomendações</h4>
                        <p className="text-sm text-green-700 mt-1">{getRecomendacao()}</p>
                    </div>
                     <div className="bg-red-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-red-800 flex items-center gap-2"><BanIcon className="w-5 h-5"/> O que evitar</h4>
                        <p className="text-sm text-red-700 mt-1">{getEvitar()}</p>
                    </div>
                </div>
                
                 <div>
                    <h4 className="font-semibold text-gray-700 flex items-center gap-2"><WarningIcon className="w-5 h-5"/> Banhos e Rezas</h4>
                    <p className="text-sm text-gray-600 mt-1">Firme uma vela para {orixa.nome} e reze um Pai Nosso. Para banhos, use a erva do dia ({orixa.nome === 'Exú & Omulú/Obaluaê' ? 'Aroeira' : 'consulte Elementos do Dia'}) mentalizando a energia da {lua.fase}.</p>
                </div>
            </div>
        </Card>
    );
};

export default CombinacaoCard;
