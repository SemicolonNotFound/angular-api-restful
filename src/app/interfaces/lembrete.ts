// Esse type tem quase a funcionalidade de uma ENUM para a prioridade
type prioridade = 'BAIXA' | 'MEDIA' | 'ALTA';
export interface Lembrete {
    // Interface é usada para definir a estrutura de uma entidade
    id: number;
    conteudo: string;
    arquivado: boolean;
    prioridade: prioridade;
    modificado: number;
}
