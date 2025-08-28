import type { OrixaInfo, LuaInfo } from '../types.ts';

/**
 * Gera uma "Mensagem do Dia" localmente, sem a necessidade de uma API externa.
 * A mensagem é criada combinando a energia do Orixá regente e a fase da Lua.
 * @param orixa - As informações do Orixá do dia.
 * @param lua - As informações da Lua do dia.
 * @returns Uma string com uma mensagem inspiradora.
 */
export const getMensagemDoDia = (orixa: OrixaInfo, lua: LuaInfo): string => {
  let conselho = '';

  switch (lua.fase) {
    case 'Lua Nova':
      conselho = 'plante novas sementes de fé e esperança em seu coração.';
      break;
    case 'Lua Crescente':
      conselho = 'dê o primeiro passo com coragem em direção aos seus objetivos.';
      break;
    case 'Lua Cheia':
      conselho = 'celebre suas conquistas e agradeça por toda a abundância recebida.';
      break;
    case 'Lua Minguante':
      conselho = 'liberte-se do que não serve mais e abra espaço para a renovação.';
      break;
    default:
      conselho = 'conecte-se com o sagrado e ouça a voz da sua intuição.';
      break;
  }

  return `Sob a regência de ${orixa.nome} e a influência da ${lua.fase}, o conselho de hoje é que você ${conselho} ${orixa.saudacao}`;
};
