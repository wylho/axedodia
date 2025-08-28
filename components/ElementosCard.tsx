import React from 'react';
import type { ElementosInfo } from '../types.ts';
import Card from './Card.tsx';
import { SparklesIcon, LeafIcon, FlameIcon, WindIcon, CrystalIcon, PlantIcon } from './Icons.tsx';

interface ElementosCardProps {
    elementos: ElementosInfo;
}

const ElementosCard: React.FC<ElementosCardProps> = ({ elementos }) => {
    const items = [
        { icon: React.createElement(SparklesIcon), label: "Cor Litúrgica", value: elementos.corLiturgica.nome, color: elementos.corLiturgica.hex },
        { icon: React.createElement(LeafIcon), label: "Erva de Banho", value: elementos.erva },
        { icon: React.createElement(FlameIcon), label: "Vela", value: elementos.vela },
        { icon: React.createElement(WindIcon), label: "Incenso", value: elementos.incenso },
        { icon: React.createElement(CrystalIcon), label: "Cristal", value: elementos.cristal },
        { icon: React.createElement(PlantIcon), label: "Planta Associada", value: elementos.planta },
    ];

    return (
        <Card title="Elementos do Dia" icon={<SparklesIcon className="w-6 h-6" />}>
            <div className="space-y-3">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm">
                        <div className="text-amber-600">{item.icon}</div>
                        <div className="flex-1">
                            <p className="font-semibold text-gray-700">{item.label}</p>
                            <div className="flex items-center gap-2">
                                <p className="text-gray-600">{item.value}</p>
                                {item.color && (
                                    <div
                                        className="w-4 h-4 rounded-full border border-gray-300"
                                        style={{ backgroundColor: item.color }}
                                    ></div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default ElementosCard;