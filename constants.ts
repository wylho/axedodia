import type { OrixaInfo, ElementosInfo, LuaInfo } from './types.ts';
import { OrixaNome } from './types.ts';
import { OxalaIcon, ExuOmuluIcon, OgumIcon, XangoIansaIcon, OxossiIcon, OxumIcon, IemanjaIcon, LuaNovaIcon, LuaCrescenteIcon, LuaCheiaIcon, LuaMinguanteIcon } from './components/Icons.tsx';
import React from 'react';

export const ORIXAS_DATA: Record<OrixaNome, { info: OrixaInfo; elementos: ElementosInfo }> = {
    [OrixaNome.Oxala]: {
        info: {
            nome: OrixaNome.Oxala,
            descricao: "Orixá da criação, da paz e da fé. Pai de todos, rege o trono da fé, trazendo harmonia e equilíbrio.",
            cores: "Branco e Dourado",
            saudacao: "Êpa Babá!",
            elementos: "Ar, Céu",
            oferendas: ["Vela branca", "Flores brancas (lírios, rosas)", "Canjica branca", "Água mineral"],
            pontoCantado: "Oxalá meu Pai, tem pena de nós, tem dó. A volta do mundo é grande, seus poderes são maior.",
            icone: React.createElement(OxalaIcon),
        },
        elementos: {
            corLiturgica: { nome: 'Branco', hex: '#FFFFFF' },
            erva: "Boldo (Tapete de Oxalá)",
            vela: "Branca",
            incenso: "Olíbano",
            cristal: "Quartzo Branco",
            planta: "Lírio da paz",
        },
    },
    [OrixaNome.ExuOmulu]: {
        info: {
            nome: OrixaNome.ExuOmulu,
            descricao: "Exú é o guardião dos caminhos, da comunicação. Omulú/Obaluaê é o senhor da terra, da cura e da transformação.",
            cores: "Vermelho e Preto (Exú), Branco e Preto (Omulú)",
            saudacao: "Laroyê Exú! / Atotô Obaluaê!",
            elementos: "Fogo, Terra",
            oferendas: ["Vela bicolor (vermelha/preta)", "Cravos vermelhos", "Pipoca (para Omulú)", "Cachaça (para Exú)"],
            pontoCantado: "Exú pisa no toco de um galho só. Ele pisa no toco, galho balança, Exú não cai ô ganga.",
            icone: React.createElement(ExuOmuluIcon),
        },
        elementos: {
            corLiturgica: { nome: 'Vermelho e Preto', hex: '#FF0000' },
            erva: "Aroeira ou Arruda",
            vela: "Bicolor (Vermelha/Preta) ou Preta",
            incenso: "Sete Ervas",
            cristal: "Ônix ou Turmalina Negra",
            planta: "Comigo-ninguém-pode",
        },
    },
    [OrixaNome.Ogum]: {
        info: {
            nome: OrixaNome.Ogum,
            descricao: "Orixá da lei, da ordem, do ferro e da guerra. Abre os caminhos e protege contra as demandas.",
            cores: "Azul escuro e Vermelho",
            saudacao: "Ogunhê, meu Pai!",
            elementos: "Fogo, Ar",
            oferendas: ["Vela azul escura ou vermelha", "Cravos vermelhos", "Cerveja branca", "Feijoada"],
            pontoCantado: "Eu tenho Sete Espadas pra me defender, eu tenho Ogum em minha companhia.",
            icone: React.createElement(OgumIcon),
        },
        elementos: {
            corLiturgica: { nome: 'Azul Escuro', hex: '#00008B' },
            erva: "Espada de São Jorge",
            vela: "Azul Escura",
            incenso: "Sândalo",
            cristal: "Sodalita",
            planta: "Espada de São Jorge",
        },
    },
    [OrixaNome.XangoIansa]: {
        info: {
            nome: OrixaNome.XangoIansa,
            descricao: "Xangô é o Orixá da justiça, do trovão e das pedreiras. Iansã, a senhora dos ventos, das tempestades e dos eguns.",
            cores: "Marrom (Xangô), Amarelo/Laranja (Iansã)",
            saudacao: "Kaô Kabecilê! / Eparrey Iansã!",
            elementos: "Fogo, Ar",
            oferendas: ["Vela marrom (Xangô), amarela (Iansã)", "Rosas amarelas", "Cerveja preta", "Acarajé"],
            pontoCantado: "Machadinha do cabo de ouro, é machadinha de Xangô.",
            icone: React.createElement(XangoIansaIcon),
        },
        elementos: {
            corLiturgica: { nome: 'Marrom', hex: '#A52A2A' },
            erva: "Quebra-pedra ou Levante",
            vela: "Marrom ou Amarela",
            incenso: "Mirra",
            cristal: "Jaspe Vermelho ou Citrino",
            planta: "Bambú",
        },
    },
    [OrixaNome.Oxossi]: {
        info: {
            nome: OrixaNome.Oxossi,
            descricao: "Orixá das matas, da caça, do conhecimento e da fartura. Protetor dos animais e das florestas.",
            cores: "Verde",
            saudacao: "Okê Arô!",
            elementos: "Terra, Ar",
            oferendas: ["Vela verde", "Folhas de samambaia", "Frutas variadas", "Milho cozido"],
            pontoCantado: "Caboclo Roxo da cor morena, é Oxóssi caçador, lá da Jurema.",
            icone: React.createElement(OxossiIcon),
        },
        elementos: {
            corLiturgica: { nome: 'Verde', hex: '#008000' },
            erva: "Samambaia ou Alecrim",
            vela: "Verde",
            incenso: "Eucalipto",
            cristal: "Quartzo Verde",
            planta: "Samambaia",
        },
    },
    [OrixaNome.Oxum]: {
        info: {
            nome: OrixaNome.Oxum,
            descricao: "Orixá do amor, da fertilidade, das águas doces e da riqueza. Oxumaré rege o arco-íris e a renovação.",
            cores: "Amarelo/Dourado",
            saudacao: "Ora Yê Yê Ô! / Arroboboi!",
            elementos: "Água",
            oferendas: ["Vela amarela", "Rosas amarelas", "Mel", "Quindim"],
            pontoCantado: "Eu vi mamãe Oxum na cachoeira, sentada na beira do rio.",
            icone: React.createElement(OxumIcon),
        },
        elementos: {
            corLiturgica: { nome: 'Amarelo', hex: '#FFD700' },
            erva: "Calêndula ou Camomila",
            vela: "Amarela",
            incenso: "Jasmim",
            cristal: "Citrino",
            planta: "Girassol",
        },
    },
    [OrixaNome.Iemanja]: {
        info: {
            nome: OrixaNome.Iemanja,
            descricao: "Mãe de todos, Orixá das águas salgadas, da maternidade, da família e da geração.",
            cores: "Azul claro e Prata",
            saudacao: "Odoyá, minha Mãe!",
            elementos: "Água",
            oferendas: ["Vela azul clara", "Rosas brancas", "Manjar branco", "Perfume de alfazema"],
            pontoCantado: "Mãe d'água, rainha das ondas, sereia do mar. Mãe d'água, seu canto é bonito quando tem luar.",
            icone: React.createElement(IemanjaIcon),
        },
        elementos: {
            corLiturgica: { nome: 'Azul Claro', hex: '#ADD8E6' },
            erva: "Alfazema ou Anis Estrelado",
            vela: "Azul Clara",
            incenso: "Alfazema",
            cristal: "Água Marinha",
            planta: "Jiboia (planta)",
        },
    },
};

export const ORIXAS_POR_DIA: OrixaNome[] = [
    OrixaNome.Oxala,       // Domingo
    OrixaNome.ExuOmulu,   // Segunda
    OrixaNome.Ogum,         // Terça
    OrixaNome.XangoIansa, // Quarta
    OrixaNome.Oxossi,       // Quinta
    OrixaNome.Oxum,   // Sexta
    OrixaNome.Iemanja        // Sábado
];

export const LUA_DATA: Record<string, LuaInfo> = {
    "Nova": {
        fase: "Lua Nova",
        energia: "Início, plantio de intenções, recolhimento.",
        sugestoes: "Ideal para iniciar projetos, meditar e planejar o futuro.",
        icone: React.createElement(LuaNovaIcon),
    },
    "Crescente": {
        fase: "Lua Crescente",
        energia: "Crescimento, desenvolvimento, movimento.",
        sugestoes: "Período para agir, impulsionar projetos e fortalecer a fé.",
        icone: React.createElement(LuaCrescenteIcon),
    },
    "Cheia": {
        fase: "Lua Cheia",
        energia: "Expansão, colheita, plenitude, poder máximo.",
        sugestoes: "Excelente para oferendas, rituais de prosperidade e celebrações.",
        icone: React.createElement(LuaCheiaIcon),
    },
    "Minguante": {
        fase: "Lua Minguante",
        energia: "Limpeza, banimento, finalização, introspecção.",
        sugestoes: "Momento para banhos de descarrego, limpezas energéticas e reflexão.",
        icone: React.createElement(LuaMinguanteIcon),
    },
};