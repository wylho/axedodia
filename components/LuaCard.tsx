import React from 'react';
import type { LuaInfo } from '../types.ts';
import Card from './Card.tsx';
import { InfoIcon } from './Icons.tsx';

interface LuaCardProps {
    lua: LuaInfo;
}

const LuaCard: React.FC<LuaCardProps> = ({ lua }) => {
    return (
        <Card title="Lua do Dia" icon={lua.icone}>
            <div className="text-center">
                <h3 className="text-2xl font-semibold text-blue-800">{lua.fase}</h3>
                <p className="text-gray-600 mt-2">{lua.energia}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-700 flex items-center gap-2"><InfoIcon className="w-5 h-5"/> Sugestões Práticas:</h4>
                <p className="text-gray-600 mt-1 text-sm">{lua.sugestoes}</p>
            </div>
        </Card>
    );
};

export default LuaCard;