import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
function Location (){
    return(
        <>
         <section className="footer">

        <div className="box-container2">

            <div className="box2">
                <h3 className="headingh3">Talk Shoes</h3>
                <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus vitae, id dolor exercitationem unde non, quae quidem facilis dolores mollitia accusantium aliquid voluptatibus magni ducimus qui.</p>
                <div className="share">
                    <a href="#" className="btnfooter "> <FaFacebook/></a>
                    <a href="#" className="btnfooter "> <FaTwitter/></a>
                    <a href="#" className="btnfooter "> <FaInstagram/></a>
                    <a href="#" className="btnfooter"> <FaLinkedinIn/></a>
                </div>
            </div>
        
            <div className="box2">
            <h3>Our Location</h3>
            <div className="links">
                <a href="#">Turkey</a>
                <a href="#">İndia</a>
                <a href="#">USA</a>
                <a href="#">France</a>
                <a href="#">Italy</a>
            </div>
        </div>
        <div className="box2">
            <h3>Download App</h3>
            <div className="links">
                <a href="#">Google Play</a>
                <a href="#">Window XP</a>
                <a href="#">App Store</a>
            </div>
        </div>
        </div>

        <h1 className="credit"> Created By <span> Mrs. Web Designer</span> | All Rights Reserved!</h1>

</section>
        </>
    );
}

export default Location;