const createMockProducts = () => {
    const productList = [
        {
            imageUrl: "../../../assets/proMeal.png",
            imageAlt: 'Barra de proteína',
            title: 'Barra de proteína super calórica 1',
            text: 'Barra de proteína super calórica usada por astronautas e militares para a execução de seus exercícios.  Contém 10g de proteína e  1000 kcal.',
            formattedPrice: 'R$5,00',
            reviewCount: 34,
            rating: 4,
        },
        {
            imageUrl: "../../../assets/proMeal.png",
            imageAlt: 'Barra de proteína',
            title: 'Barra de proteína super calórica 2',
            text: 'Barra de proteína super calórica usada por mergulhadores',
            formattedPrice: 'R$5,00',
            reviewCount: 34,
            rating: 4,
        },
        {
            imageUrl: "../../../assets/proMeal.png",
            imageAlt: 'Barra de proteína',
            title: 'Barra de proteína super calórica 3',
            text: 'Barra de proteína super calórica usada por programadores',
            formattedPrice: 'R$5,00',
            reviewCount: 34,
            rating: 4,
        },
        {
            imageUrl: "../../../assets/proMeal.png",
            imageAlt: 'Barra de proteína',
            title: 'Barra de proteína super calórica 4',
            text: 'Barra de proteína super calórica usada por contadores',
            formattedPrice: 'R$5,00',
            reviewCount: 34,
            rating: 4,
        },
        {
            imageUrl: "../../../assets/proMeal.png",
            imageAlt: 'Barra de proteína',
            title: 'Barra de proteína super calórica 5',
            text: 'Barra de proteína super calórica usada por médicos',
            formattedPrice: 'R$5,00',
            reviewCount: 34,
            rating: 4,
        },
        {
            imageUrl: "../../../assets/proMeal.png",
            imageAlt: 'Barra de proteína',
            title: 'Barra de proteína super calórica 6',
            text: 'Barra de proteína super calórica usada por advogados',
            formattedPrice: 'R$5,00',
            reviewCount: 34,
            rating: 4,
        },
        {
            imageUrl: "../../../assets/proMeal.png",
            imageAlt: 'Barra de proteína',
            title: 'Barra de proteína super calórica 7',
            text: 'Barra de proteína super calórica usada por bodybuilders',
            formattedPrice: 'R$5,00',
            reviewCount: 34,
            rating: 4,
        },
        {
            imageUrl: "../../../assets/proMeal.png",
            imageAlt: 'Barra de proteína',
            title: 'Barra de proteína super calórica 8',
            text: 'Barra de proteína super calórica usada por youtubers',
            formattedPrice: 'R$5,00',
            reviewCount: 34,
            rating: 4,
        }
      ];
  
      
    if(localStorage.getItem('productList') == null){
        localStorage.setItem('productList',JSON.stringify(productList));
    }
  
    if(localStorage.getItem('selectedProduct') == null){
        localStorage.setItem('selectedProduct','0');
    }

}

export default createMockProducts;
  