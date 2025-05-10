export function ServiceCard({ title, image, description }) {
  return (
    <article className="service-card">
      <div className="card-content">
        <img loading="lazy" src={image} className="service-image" alt={title} />
        <div className="text-content">
          <h3 className="service-title">{title}</h3>
          <p className="service-description">{description}</p>
        </div>
      </div>

      <style jsx>{`
        .service-card {
          flex: 1;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .card-content {
          border-radius: 5px;
          border: 1px solid #1f2b6c;
          padding-bottom: 69px;
        }

        .service-image {
          width: 100%;
          aspect-ratio: 1.06;
          object-fit: contain;
          border-radius: 5px 5px 0 0;
        }

        .text-content {
          padding: 56px 20px 0;
        }

        .service-title {
          color: #1f2b6c;
          font-size: 26px;
          font-weight: 500;
        }

        .service-description {
          color: #212124;
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          margin-top: 8px;
        }

        @media (max-width: 991px) {
          .service-card {
            margin-top: 4px;
          }
        }
      `}</style>
    </article>
  );
}
