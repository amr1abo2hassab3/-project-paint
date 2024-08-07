import CallMe from "../callme/CallMe";
import WhatsApp from "../whatsApp/Whats";

import "./owrWork.css";

const OwrWork = (props) => {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 smallWidth">
      <div className="allBox">
        <div className="imgBox">
          <img src={props.img} alt={props.title} title={props.title}/>
        </div>
        <div className="titleWork">
          <h3> {props.title}</h3>
          <p>{props.desc1}</p>
          <p>{props.desc2}</p>
          <CallMe />
          <WhatsApp />
        </div>
      </div>
    </div>
  );
};

export default OwrWork;
