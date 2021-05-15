import { Administrateur } from "./administrateur";

export class CentreVacc {

    idCentre! :number;
    nomCentre! : string;
    adresseCentre! : string;
    nbPersonnel!: number;
    stockVacc!: number;
    admin!: Administrateur;
}
