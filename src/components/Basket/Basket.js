import Skeleton from "react-loading-skeleton";
import { useState, useEffect } from "react";
import img1 from "../../Gif/React (11).gif";

const Basket = ({card, setCard, basketCount, setBasketCount}) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(false);
  const [emulatorImg, setEmulatorImg] = useState();

    const removeItem = (itemToRemove) => {
      const newItems = Object.values(card).filter((item) => item.ASIN !== itemToRemove.ASIN);
      const newCard = newItems.reduce((obj, item) => {
        obj[item.ASIN] = item;
        return obj;
      }, {});
      setCard(newCard);
      basketCount = Object.keys(newItems).length
      setBasketCount(basketCount)
    };

    useEffect(() => {
      setTimeout(() => {
          setLoading(false);
          setTitle("Basket Page");
      },1000)
  })
  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
        setEmulatorImg(true);
    },1000)
})
  
  return (
    <div>
      <h1 className="basketHeading">{title || <Skeleton baseColor="#d3cce3" width={200}/>}</h1>
      {Object.keys(card).length === 0 ? (
        <div className="image">
        {emulatorImg ? <img className="gif" src={img1} alt="gif"/> : <Skeleton baseColor="#d3cce3" style={{  marginTop: '17px', marginBottom: '10px' }} width="70%" height={250} />}
        </div>
      ) : (
        <div className="box-container">
            {loading && (
                // Yüklenirken Skeleton görünümünü
                <>
                    <Skeleton baseColor="#d3cce3" height={200} count={7} />
                </>
            )}
            {card &&
                Object.values(card).map((product) => (
                  <section className="box" key={product.ASIN}>
                        <div>
                            <div className="card w-96 glass">
                                <figure><img src={product.ImageUrl} alt="img" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.Title}</h2>
                                    <div className="card-actions justify-end">
                                        <div className="price">
                                            {" "}
                                            {product.Price} <span>{}</span></div>
                                            <div className="button">
                                                <a href="#" className="btn" onClick={() => removeItem(product)}>
                                                Remove
                                                    </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))
            }
        </div>
      )}
    </div>
  );
};

export default Basket;
