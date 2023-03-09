import { useEffect, useState } from "react";
import Axios from "axios";

export default function Product(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get('https://cheapprice.siten.co/api/amazonSearch?q=young%20women%20skechers%20shoes')
            .then(res => {
                console.log("Getting from ::", res.data)
                setProducts(res.data.amazonProductList)
            }).catch(err => console.log(err))
    }, []);

    useEffect(() => {
        console.log("Shoes", products);
    }, [products]);

    return(
        <>
        <h1 className="heading">Skechers Women's Shoes Models</h1>
        <div className="box-container">
            {products &&
                products.map((product, index) => {
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
                                                <a href="#" className="btn">
                                                Buy to Amazon
                                                </a></div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })
            }
        </div></>
    )
}