import type { DailyData, DiaDaSemana } from '../types.ts';
import { ORIXAS_POR_DIA, ORIXAS_DATA, LUA_DATA } from '../constants.ts';

// Simula a obtenção da fase da lua. Em uma aplicação real, usaria uma API.
const getPhaseOfTheMoon = (): string => {
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const phaseIndex = Math.floor(dayOfYear / (29.5 / 4)) % 4;
    const phases = ["Nova", "Crescente", "Cheia", "Minguante"];
    return phases[phaseIndex];
};

export const getDailyData = (): DailyData => {
    const today = new Date();
    const dayOfWeek = today.getDay() as DiaDaSemana;

    const orixaDoDiaNome = ORIXAS_POR_DIA[dayOfWeek];
    const dataDoOrixa = ORIXAS_DATA[orixaDoDiaNome];
    
    const faseDaLua = getPhaseOfTheMoon();
    const infoLua = LUA_DATA[faseDaLua];

    return {
        dia: dayOfWeek,
        lua: infoLua,
        orixa: dataDoOrixa.info,
        elementos: dataDoOrixa.elementos,
    };
};