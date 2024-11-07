const Banner = (props) => {
    const classes = "banner " + props.css;
    return (
      <div className={classes}>
        <img src={props.bgImage} alt="banner" />
        {props.children !== undefined && props.children !== "" && (
          <div className="fond">
            <h1>{props.children}</h1>
          </div>
        )}
      </div>
    );
  };
  export default Banner;