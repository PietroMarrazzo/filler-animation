// prezzo prodotto senza tax
const products = [
    {
        price: 10,
        barcode: 'aaaa',
        name: 'product1',
        GST: true,
        PST: false,
    },
    {
        price: 10,
        barcode: 'bbbb',
        name: 'product2',
        GST: true,
        PST: true, 
    },
];

// valori tax
const GST = 0.05;
const PST = 0.08;


function scan(barcode) {

    var result = '';
    products.forEach((product) => {
        if (product.barcode === barcode) {
            result = 'cad ' + product.price + ' ' + (product.GST ? 'G' : '') + (product.GST ? 'P' : '');
        }
    })

    return result;
}

console.log(scan('aaaa'));
// output cad 10.00 GP