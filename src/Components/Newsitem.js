import React, { Component } from 'react';
import './Newsitem.css';

export default class Newsitem extends Component {
  render() {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      publishedAt,
      source,
    } = this.props;

    return (
      <div className="mt-0 mb-5 border-0">
        <div
          id="newsCard"
          className="card border-0 rounded-0"
          style={{ height: "470px", cursor: "pointer" }}
          onClick={() => {
            window.open(newsUrl, "_blank");
          }}
        >
          <span
            className="position-absolute top-0 badge rounded-0"
            style={{ right: "0px", zIndex: '1', backgroundColor: "#f15a24" }}
          >
            {source}
          </span>
          <img
            src={
              imageUrl || "https://cradlehospital.com/wp-content/themes/apexclinic/images/no-image/No-Image-Found-400x264.png"
            }
            className="card-img rounded-0"
            style={{ objectFit: "cover", height: "200px", width: "100%" }}
            alt="..."
          />

          <div
            className="card-body border border-0 p-0 my-3 overflow-hidden h-50-sm"
            style={{ maxHeight: "200px" }}
          >
            <h5 className="card-title ">{title}...</h5>
            <p className="card-text ">{description}...</p>
          </div>

          <div>
            <span
              className="nav-item"
              style={{
                width: "2px",
                height: "20px",
                backgroundColor: "#f9ac19",
                bottom: "0px",
                position: "absolute",
              }}
            ></span>

            <a
              className="link-secondary ink-offset-2 link-underline link-underline-opacity-0 p-0"
              target="_blank"
              style={{ position: "absolute", bottom: "0px", left: "15px" }}
              href="/"
              rel="noreferrer"
            >
              By {author}{" "}
            </a>

            <small
              style={{
                position: "absolute",
                bottom: "0px",
                right: "15px",
                backgroundColor: "white",
              }}
            >
              <a
                className="text-body-secondary ink-offset-2 link-underline link-underline-opacity-0 p-0"
                href="/"
                target="_blank"
              >
                &nbsp; {publishedAt}
              </a>
            </small>
          </div>
        </div>
      </div>
    );
  }
}
