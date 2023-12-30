export default function Cart() {
    let cart = ['Tomatoes', 'Pasta']
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem item={cart[0]}/>
            <CartItem item={cart[1]}/>
        </div>
    )
}

function CartItem(props){
    return(
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1</p>
        </div>
    )
}