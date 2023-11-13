
$(document).ready(function() {
    function Carrito() {
        let $catalogo = $('#catalogo');  

        for (let i = 0; i < productos.length; i++) {
            let $producto = productos[i];

            let $productoHTML = '<div class="col-md-4">'+
            '<div class="sc-product-item">' +
            '<input name="product_id" value="' + $producto.ID + '" type="hidden"/>'+
            '<img class="img-fluid" data-name="product_image" src="img/productos/' + $producto.Imagen + '" alt="' + $producto.Nombre + '">' +
            '<h4 data-name="product_name">' + $producto.Nombre + '</h4>'+
            '<input name="product_price" value="' + $producto.Precio + '" type="hidden"/>'+
            '<p class="precio precio-negrita">$' + $producto.Precio + '</p>' +
            '<button class="sc-add-to-cart btn btn-success">Comprar</button>'+'</div>'+
            '</div>'; 

            $catalogo.append($productoHTML);

        }
    }

 Carrito(); 

    $('#smartcart').smartCart({
        cartItemTemplate: '<div class="d-flex"> <img class="img-fluid" src="{product_image}" /><h4 class="h6">{product_name}</h4></div>',
        lang: {
            cartTitle: "En tu carrito hay: ",
            checkout: 'Comprar',
            clear: 'Eliminar',
            Total: 'Total:',
            cartRemove:'×',
            cartEmpty: 'Todavia no has elegido nada'
        }
    });
});