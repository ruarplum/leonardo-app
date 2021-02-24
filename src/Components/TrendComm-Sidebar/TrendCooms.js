import "./TrendComms.css"

const TrendComms = (props) => {
    return(
        <div className="trendCommArea">
            <img src={props.commImg}/>
            <div>
            <p className="trendCommName">r/{props.trendCommName}</p>
            <p className="trendCommNumMemb">{props.trendCommNumMemb} members</p>
            </div>
            <button className="joinBtn">Join</button>
        </div>
    )
} 

export default TrendComms;