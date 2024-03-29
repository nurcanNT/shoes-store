import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Axios from "axios";

export default function Product({ card, setCard, basketCount, setBasketCount}){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");

    const addToCart = (product) => {

        card[product.ASIN] = product
        setCard({...card});

        basketCount = Object.keys(card).length
        setBasketCount(basketCount)
        console.log("cart::",card)
    };

    useEffect(() => {
        setLoading(true); // Yüklemeyi başlatın
        Axios.get('https://cheapprice.siten.co/api/amazonSearch?q=young%20women%20Nike%20shoes%20store')
            .then(res => {
                console.log("Getting from ::", res.data)
                setProducts(res.data.amazonProductList)
                setLoading(false); // Yüklemeyi durdurun
            }).catch(err => console.log(err))
    }, []);

    useEffect(() => {
        console.log("Shoes", products);
    }, [products]);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTitle("Nike Women's Shoes Models");
        },1000)
    })
    return(
        <>
         <h1 className="heading">{title || <Skeleton baseColor="#d3cce3" width={200}/>}</h1>
        <div className="box-container">
        {loading && (
                // Yüklenirken Skeleton görünümünü gösterin
                <>
                    <Skeleton baseColor="#d3cce3" height={200} count={7} />
                </>
            )}
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
                                                <a href="#" className="btn" onClick={() => addToCart(product)}>
                                                Add To Cart
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