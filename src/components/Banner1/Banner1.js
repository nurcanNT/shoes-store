import "react-loading-skeleton/dist/skeleton.css";
import {useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";
import Img1 from "../../Img/banner.png";

function Banner (){
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState(false);
    const [title2, setTitle2] = useState();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTitle(true);
        },1000)
    })

   useEffect(() => {
    setTimeout(()=> {
        setLoading(false);
        setTitle2(<div className="content">
        <h3>Limited Offer</h3>
        <p>Upto 50% off</p>
        <a href="#" className="btn">Check Out</a>
    </div>)
    }, 1000)
   })
    return(
        <section className="banner-container">

    <div className="banner">
    {title ? <img src={Img1} alt=""/> : <Skeleton baseColor="#d3cce3" width={400} height={250}/>}
        
        {title2 || <Skeleton baseColor="#d3cce3" count={2} width={70}/>}
    </div>
</section>
    );
}
export default Banner;