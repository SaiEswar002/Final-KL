import * as React from "react";

function NewsArticle({ date, title, likes, comments, imageSrc, alt }) {
  return (
    <>
      <article className="news-article">
        <img src={imageSrc} alt={alt} className="news-image" />
        <div className="news-content">
          <time className="news-date">{date}</time>
          <h4 className="news-title">{title}</h4>
          <div className="news-stats">
            <span className="news-likes">{likes}</span>
            <span className="news-comments">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/c44656e13a16fd40e4e3ecd67eb9bd9c18221167cb81ae970ee1d5c4d62dbe98?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&"
                alt=""
                className="comment-icon"
              />
              {comments}
            </span>
          </div>
        </div>
      </article>
      <style jsx>{`
        .news-article {
          display: flex;
          flex-direction: column;
          background: var(--white, #fcfefe);
          box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          border-radius: 5px;
          padding-right: 32px;
        }
        @media (max-width: 991px) {
          .news-article {
            padding-right: 20px;
          }
        }
        .news-image {
          width: 100%;
          aspect-ratio: 1.04;
          object-fit: cover;
        }
        .news-content {
          padding: 24px 32px;
        }
        .news-date {
          color: var(--Secondary, #159eec);
          font-size: 14px;
        }
        .news-title {
          margin-top: 8px;
          font-size: 18px;
          line-height: 25px;
        }
        .news-stats {
          display: flex;
          gap: 10px;
          margin-top: 24px;
        }
        .news-likes {
          font-size: 14px;
          display: flex;
          align-items: center;
        }
        .news-comments {
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .comment-icon {
          width: 16px;
        }
      `}</style>
    </>
  );
}

export default NewsArticle;
