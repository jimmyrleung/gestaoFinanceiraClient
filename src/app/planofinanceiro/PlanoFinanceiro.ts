export class PlanoFinanceiro {
    id: number;
    nome: string;
    isDefault: boolean;
    isDefaultStr: string;

    constructor(id?, nome?, isDefault?) {
        this.id = id || null;
        this.nome = nome || "";
        this.isDefault = isDefault || false;
        this.isDefaultStr = this.isDefault ? "Sim" : "Não";
    }
}