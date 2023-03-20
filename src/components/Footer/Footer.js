import "react-loading-skeleton/dist/skeleton.css";
import {useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
function Location (){
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [title2, setTitle2] = useState("");
    const [title3, setTitle3] = useState("");
    const [title4, setTitle4] = useState("");
    const [title5, setTitle5] = useState("");
    const [title6, setTitle6] = useState("");
    const [title7, setTitle7] = useState("");
    const [title8, setTitle8] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTitle("Talk Shoes");
        },1000)
    })
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTitle2("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus vitae, id dolor exercitationem unde non, quae quidem facilis dolores mollitia accusantium aliquid voluptatibus magni ducimus qui.");
        },1000)
    })
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTitle3( <div className="share">
            <a href="#" className="btnfooter "> <FaFacebook/></a>
            <a href="#" className="btnfooter "> <FaTwitter/></a>
            <a href="#" className="btnfooter "> <FaInstagram/></a>
            <a href="#" className="btnfooter"> <FaLinkedinIn/></a>
        </div>);
        },1000)
    })
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTitle4("Our Location");
        },1000)
    })
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTitle5(<div className="links">
            <a href="#">Turkey</a>
            <a href="#">İndia</a>
            <a href="#">USA</a>
            <a href="#">France</a>
            <a href="#">Italy</a>
        </div>);
        },1000)
    })
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTitle6("Download App");
        },1000)
    })
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTitle7(<div className="links">
            <a href="#">Google Play</a>
            <a href="#">Window XP</a>
            <a href="#">App Store</a>
        </div>);
        },1000)
    })
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTitle8( <h1 className="credit"> Created By <span> Mrs. Web Designer</span> | All Rights Reserved!</h1>);
        },1000)
    })
    return(
        <>
         <section className="footer">

        <div className="box-container2">

            <div className="box2">
                <h3 className="headingh3">{title || <Skeleton baseColor="#d3cce3" width= {200} />}</h3>
                <p className="text2">{title2 || <Skeleton baseColor="#d3cce3"count={5} width={450}/>}</p>
                {title3 || <Skeleton baseColor="#d3cce3"count={4} width={50}/>}
            </div>
        
            <div className="box2">
            <h3>{title4 || <Skeleton baseColor="#d3cce3"width={150}/>}</h3>
            {title5 || <Skeleton baseColor="#d3cce3"count={5} width={90}/>}
        </div>
        <div className="box2">
            <h3>{title6 || <Skeleton baseColor="#d3cce3"width="150px"/>}</h3>
            {title7 || <Skeleton baseColor="#d3cce3"count={5} width={90}/>}
        </div>
        </div>

        {title8 || <Skeleton baseColor="#d3cce3"width={550}/>}

</section>
        </>
    );
}

export default Location;