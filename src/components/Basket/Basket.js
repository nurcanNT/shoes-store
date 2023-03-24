import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

const Basket = ({card, setCard}) => {
  const [loading, setLoading] = useState(false);
  const removeItem = (itemToRemove) => {
    const newItems = Object.values(card).filter((item) => item.id !== itemToRemove.id);
    setCard(newItems);
  };
  
  return (
    <div>
      <h1>Basket Page</h1>
      {Object.keys(card).length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <div className="box-container">
            {loading && (
                // Yüklenirken Skeleton görünümünü
                <>
                    <Skeleton baseColor="#d3cce3" height={200} count={7} />
                </>
            )}
            {card &&
                Object.keys(card).map((product, index) => {
                  product = card[product]
                    return (
                        <section className="box" key={index}>
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
                                                <button onClick={() => removeItem(product)}>Remove</button></div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })
            }
        </div>
      )}
    </div>
  );
};

export default Basket
