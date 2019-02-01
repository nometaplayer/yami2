export class Recette{
    description: string;
    isOn: boolean;
    image: string;

    constructor(public name: string){
        this.description = '';
        this.isOn = false;
        this.image = '';
    }
}