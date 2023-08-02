import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, descrption, url, newsUrl, date, source } = this.props;
    return (
      <div className="my-3">
        <div
          className="card mx-3"
          style={{
            width: "20rem",
            color: "black",
            backgroundColor: "chocolate",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className=" badge rounded-pill bg-danger"> {source}</span>
          </div>
          <img
            src={
              !url
                ? "https://th-i.thgim.com/public/incoming/8n31pv/article66491280.ece/alternates/LANDSCAPE_1200/2023-02-07T161424Z_1287953998_RC2F6Z96N00A_RTRMADP_3_USA-CHINA-BALLOON.JPG"
                : url
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{descrption}.</p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                On {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
