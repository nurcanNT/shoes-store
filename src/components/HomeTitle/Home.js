import "react-loading-skeleton/dist/skeleton.css";
import {useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";
import img1 from "../../Gif/React.gif";
function HomeTitle (){
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [title2, setTitle2] = useState("");
    const [emulatorImg, setEmulatorImg] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTitle("Most Trending Shoes");
        },1000)
    })
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTitle2("Everyday and classic shoes you need are here");
        },3000)
    })
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setEmulatorImg(true);
        },3000)
    })
    return(
        <section className="home" id="home">
    <div className="image">
    {emulatorImg ? <img src={img1} alt=""/> : <Skeleton baseColor="#d3cce3" style={{  marginTop: '10px', }} width="70%" height={550} />}

       </div>
    <div className="content">
        <div><span>{title || <Skeleton baseColor="#d3cce3" width={150} height={25} />}</span></div>
        <h3>{title2 || <Skeleton baseColor="#d3cce3" width={150} height={25} count={2} />}</h3>
    </div>

</section>
    );
}
export default HomeTitle;