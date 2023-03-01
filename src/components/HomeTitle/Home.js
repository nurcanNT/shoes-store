import img1 from "../../Gif/React.gif";
function HomeTitle (){
    return(
        <section className="home" id="home">

    <div className="image">
        <img src={img1} alt=""/>
    </div>

    <div className="content">
        <span>Most Trending Shoes</span>
        <h3>Everyday and classic shoes you need are here</h3>
    </div>

</section>
    );
}
export default HomeTitle;