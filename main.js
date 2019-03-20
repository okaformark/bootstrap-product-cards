const products =[
    {
        title: 'product1',
        description: 'blah blah',
        imageUrl: '',
        size: '"4" x "4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$2.99',
        price1: '$3.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product2',
        description: 'blah blah',
        imageUrl: '',
        size: '"4" x "4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$2.99',
        price1: '$3.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product3',
        description: 'blah blah',
        imageUrl: '',
        size: '"4" x "4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$2.99',
        price1: '$3.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product4',
        description: 'blah blah',
        imageUrl: '',
        size: '"4" x "4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$2.99',
        price1: '$3.99',
        validUntil: '04/01/2016',
    },
    {
        title: 'product5',
        description: 'blah blah',
        imageUrl: '',
        size: '"4" x "4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$2.99',
        price1: '$3.99',
        validUntil: '04/01/2016',
    },
    
]
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
const domStringBuilder =()=>{
    let domString = '<div class ="row">';
    products.forEach((item) =>{
        domString += `<div class="col-4"> ${item.title}</div>`;
    })
    domString +='</div>';
    printToDom('product-class', domString);
};
const init = () =>{
    domStringBuilder();
}
init();