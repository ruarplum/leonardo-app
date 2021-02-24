const Who = (props) => {
  return (
    <div className="feed-com-post">
      <div className="feed-logo">
        <img src={props.img} />
      </div>
      <div className="feed-top-text">
            {props.text}
        </div>
        <div className="feed-span">
            {props.textWho}
        </div>
    </div>
  );
};

export default Who;
