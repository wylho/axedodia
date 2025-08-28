
export enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

export enum OrixaNome {
    Oxala = "Oxalá",
    ExuOmulu = "Exú & Omulú/Obaluaê",
    Ogum = "Ogum",
    XangoIansa = "Xangô & Iansã",
    Oxossi = "Oxóssi",
    Oxum = "Oxum & Oxumaré",
    Iemanja = "Iemanjá"
}

export interface LuaInfo {
    fase: string;
    energia: string;
    sugestoes: string;
    icone: React.ReactNode;
}

export interface OrixaInfo {
    nome: OrixaNome;
    descricao: string;
    cores: string;
    saudacao: string;
    elementos: string;
    oferendas: string[];
    pontoCantado: string;
    icone: React.ReactNode;
}

export interface ElementosInfo {
    corLiturgica: { nome: string; hex: string };
    erva: string;
    vela: string;
    incenso: string;
    cristal: string;
    planta: string;
}

export interface DailyData {
    dia: DiaDaSemana;
    lua: LuaInfo;
    orixa: OrixaInfo;
    elementos: ElementosInfo;
}
