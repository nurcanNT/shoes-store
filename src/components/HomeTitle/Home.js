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
        },1000)
    })
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setEmulatorImg(true);
        },1000)
    })
    return(
        <section className="home" id="home">
    <div className="image">
    {emulatorImg ? <img src={img1} alt=""/> : <Skeleton baseColor="#d3cce3" width={500} height={600}/>}

       </div>
    <div className="content">
        <span>{title || <Skeleton baseColor="#d3cce3" width= {700} />}</span>
        <h3>{title2 || <Skeleton baseColor="#d3cce3" count={2} width= {900}/>}</h3>
    </div>

</section>
    );
}
export default HomeTitle;