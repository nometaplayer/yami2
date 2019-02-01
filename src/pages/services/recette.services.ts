export class RecetteService{
    private data = [
        {
            category : 'Quotidien',
            products: [{ 
                id: 0,
                name: 'Gâteau au chocolat-poire',
                description: 'Il y a du chocolat et de la poire',
                isOn: true,
                image:'logo.png'
                },
                {
                id: 1,
                name: 'Crèpe Bretonne',
                description: 'Une bonne crèpe traditionnelle',
                isOn: true,
                image:'logo.png'
                },
                {
                id: 2,
                name: 'Tarte au citron',
                description: 'La tarte au citron comme on l\'aime',
                isOn: true,
                image:'logo.png'
                },
                {
                id: 3,
                name: 'Mousse au chocolat',
                description: 'Bien épaisse, c\'est cool',
                isOn: true,
                image:'logo.png'
                },
                {
                id: 4,
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
                id: 5,
                name: 'Gâteau au chocolat-poire',
                description: 'Il y a du chocolat et de la poire',
                isOn: true,
                image:'logo.png'
                },
                {
                id: 6,
                name: 'Crèpe Bretonne',
                description: 'Une bonne crèpe traditionnelle',
                isOn: true,
                image:'logo.png'
                },
                {
                id: 7,
                name: 'Tarte au citron',
                description: 'La tarte au citron comme on l\'aime',
                isOn: true,
                image:'logo.png'
                },
                {
                id: 8,
                name: 'Mousse au chocolat',
                description: 'Bien épaisse, c\'est cool',
                isOn: true,
                image:'logo.png'
                },
                {
                id: 9,
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
                id: 10,
                name: 'Gâteau au chocolat-poire',
                description: 'Il y a du chocolat et de la poire',
                isOn: true,
                image:'logo.png'
                },
                {
                id: 11,
                name: 'Crèpe Bretonne',
                description: 'Une bonne crèpe traditionnelle',
                isOn: true,
                image:'logo.png'
                },
                {
                id: 12,
                name: 'Tarte au citron',
                description: 'La tarte au citron comme on l\'aime',
                isOn: true,
                image:'logo.png'
                },
                {
                id: 13,
                name: 'Mousse au chocolat',
                description: 'Bien épaisse, c\'est cool',
                isOn: true,
                image:'logo.png'
                },
                {
                id: 14,
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