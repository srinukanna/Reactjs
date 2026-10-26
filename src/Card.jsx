import "./Card.css"
function Card({product,price}){
    return(
    <>
    <div className="card">
        <h1>Product name:{product}</h1>
        <p>Product Price:{price}</p>
    </div>
     
    </>
    );
}
export default Card;