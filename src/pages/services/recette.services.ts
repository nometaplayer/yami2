
export class RecetteService{
    private data = [
        {
            category : 'Quotidien',
            products: [{ 
                name: 'Gâteau au chocolat-poire',
                description: 'Il y a du chocolat et de la poire',
                isOn: true,
                image:'logo.png'
                },
                {
                name: 'Crèpe Bretonne',
                description: 'Une bonne crèpe traditionnelle',
                isOn: true,
                image:'logo.png'
                },
                {
                name: 'Tarte au citron',
                description: 'La tarte au citron comme on l\'aime',
                isOn: true,
                image:'logo.png'
                },
                {
                name: 'Mousse au chocolat',
                description: 'Bien épaisse, c\'est cool',
                isOn: true,
                image:'logo.png'
                },
                {
                name: 'Test',
                description: 'Super',
                isOn: true,
                image:'logo.png'
                }
            ]
        },
        {
            category : 'Vegan',
            products: [{ 
                name: 'Gâteau au chocolat-poire',
                description: 'Il y a du chocolat et de la poire',
                isOn: true,
                image:'logo.png'
                },
                {
                name: 'Crèpe Bretonne',
                description: 'Une bonne crèpe traditionnelle',
                isOn: true,
                image:'logo.png'
                },
                {
                name: 'Tarte au citron',
                description: 'La tarte au citron comme on l\'aime',
                isOn: true,
                image:'logo.png'
                },
                {
                name: 'Mousse au chocolat',
                description: 'Bien épaisse, c\'est cool',
                isOn: true,
                image:'logo.png'
                },
                {
                name: 'Test',
                description: 'Super',
                isOn: true,
                image:'logo.png'
                }
            ]
        },
        {
            category : '40ans ou plus',
            products: [{ 
                name: 'Gâteau au chocolat-poire',
                description: 'Il y a du chocolat et de la poire',
                isOn: true,
                image:'logo.png'
                },
                {
                name: 'Crèpe Bretonne',
                description: 'Une bonne crèpe traditionnelle',
                isOn: true,
                image:'logo.png'
                },
                {
                name: 'Tarte au citron',
                description: 'La tarte au citron comme on l\'aime',
                isOn: true,
                image:'logo.png'
                },
                {
                name: 'Mousse au chocolat',
                description: 'Bien épaisse, c\'est cool',
                isOn: true,
                image:'logo.png'
                },
                {
                name: 'Test',
                description: 'Super',
                isOn: true,
                image:'logo.png'
                }
            ]
        }
    ];

    private recette = [];
    constructor(){}

    getProducts(){
        return this.data;
    }

    getRecette(){
        return this.recette;
    }

    addProduct(product){
        this.recette.push(product);
    }

}