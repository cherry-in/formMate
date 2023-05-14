import * as React from "react";
import "./styles.scss";
import image from "../../assets/image.png";

const Card = (props) => {
  const { title, category, updated } = props.data;
  return (
    <a href="/workspace/8384fa97-d607-4af5-ac66-dabf51c19f1c" className="pl-3">
      <div className="card" style={{ width: "350px" }}>
        <div className="img-responsive img-responsive-21x9 card-img-top">
          <img src={image} />
        </div>
        <div className="card-body p-3">
          <span className="card-title mb-0">
            <div className="d-flex">
              <span className="h2">{title}</span>
              <span className="ml-auto text-muted">
                |    {category}
              </span>
            </div>
          </span>
          <p className="text-muted num-20230512-2247">
            마지막 수정   {updated}
          </p>
        </div>
      </div>
    </a>
  );
};
export default Card;
