import Img1 from "../../Img/banner.png";

function Banner (){
    return(
        <section className="banner-container">

    <div className="banner">
        <img src={Img1} alt=""/>
        
        <div className="content">
            <h3>Limited Offer</h3>
            <p>Upto 50% off</p>
            <a href="#" className="btn">Check Out</a>
        </div>
    </div>
</section>
    );
}
export default Banner;