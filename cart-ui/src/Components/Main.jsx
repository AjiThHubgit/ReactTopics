import Card from "./Card";

function Main(props) {
    return (
        <>
            <Card cartNum={props.cartNum} updateCartNum={props.updateCartNum} products={props.products} />
        </>
    );
}

export default Main;
