import * as React from "react";
import "./styles.scss";
import image from "../../assets/image.png";
import rectangle5 from "../../assets/rectangle5.svg";
const Card = (props) => {
  return (
    <div className="pl-3">
      <div className="card" style={{width:"260px"}}>
        <div className="img-responsive img-responsive-21x9 card-img-top">
          <img src={image} />
        </div>
        <div className="card-body p-3">
          <span className="card-title mb-0">
            <div className="d-flex">
              그린굿네이처스_최종
              <span className="ml-auto text-muted">
                |    근로계약서
              </span>
            </div>
          </span>
          <p className="text-muted num-20230512-2247">
            마지막 수정   2023.05.12 22:47
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
