import { Endereco } from "../endereco";
import { Evento } from "../evento/evento";
import { Register } from "../register/register";

export class Produtor{
    id: number;
    nome: string;
    dataNascimento: string;
    endereco: Endereco;
    evento: [Evento];
    papel: String;
    registro: Register;
}