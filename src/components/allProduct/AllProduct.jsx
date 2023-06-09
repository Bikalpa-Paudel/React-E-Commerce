import "./AllProduct.css"

export default function Product({img, description, rating, count, price, title}) {
  return (
    <div className="product">
      <div className="pro-img"><img src={img} alt="mac book" /></div>
      <div className="pro-name">{title}</div>
      <div className="dec">{description}</div>
      <div className="star">{rating}⭐({count})</div>
      <div className="price"><strong>$ {price}</strong></div>
      <button className="add-btn">Add To Cart</button>
    </div>
  )
}
