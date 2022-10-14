import { Endereco } from "../endereco";
import { Espectador } from "../espectador/espectador";
import { Produtor } from "../produtor/produtor";

export class Evento{
    id: number;
    nomeEvento: string;
    dataEvento: string;
    horarioEvento: string;
    nomeLocalEvento: string;
    quantidadeEspectadoresEsperada: number;
    endereco: Endereco;
    produtor: Produtor;
    espectadores: [Espectador];
}