import Shoppinglist from "./ShoppingList";

function carescale(props) {
    const scalevalue = props.scalevalue;
    const range = [1, 2, 3];

    return (
        <div>
            {range.map((rangeElem) =>
                scalevalue >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null
            )}
        </div>
    )
}

export default carescale;