export function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-content">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/e25c41622b32ca0afdadfd5131bfdcd376e16ce2592489f6a6eeb2dc298e63a3?placeholderIfAbsent=true"
          className="quote-icon"
        />
        <p className="testimonial-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Quisque placerat
          scelerisque felis vitae tortor augue. Velit nascetur Consequat
          faucibus porttitor enim et.
        </p>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/eebb0a955f88753716f71d8b1c5e6cb2958b72d18bb08efec14061172af463fc?placeholderIfAbsent=true"
          className="divider"
        />
        <p className="author-name">John Doe</p>
      </div>

      <style jsx>{`
        .testimonial-section {
          background-color: rgba(31, 43, 108, 0.6);
          width: 100%;
          display: flex;
          margin-top: 64px;
          padding: 64px 80px 112px;
          flex-direction: column;
          align-items: center;
          background: #1f2b6c;
        }
        .testimonial-content {
          display: flex;
          margin-bottom: -22px;
          width: 634px;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
        }
        .quote-icon {
          aspect-ratio: 1.5;
          object-fit: contain;
          width: 45px;
          fill: #bfd2f8;
        }
        .testimonial-text {
          color: #fcfefe;
          text-align: center;
          font-family: Work Sans, sans-serif;
          font-size: 22px;
          font-weight: 400;
          line-height: 31px;
          margin-top: 40px;
        }
        .divider {
          aspect-ratio: 200;
          object-fit: contain;
          width: 222px;
          stroke-width: 1px;
          stroke: #bfd2f8;
          margin-top: 20px;
        }
        .author-name {
          color: #fcfefe;
          text-align: center;
          font-family: Work Sans, sans-serif;
          font-size: 22px;
          font-weight: 400;
          line-height: 1.4;
          margin-top: 19px;
        }
        @media (max-width: 991px) {
          .testimonial-section {
            padding: 64px 20px 100px;
            margin-top: 40px;
          }
          .testimonial-content {
            margin-bottom: 10px;
          }
          .testimonial-text {
            max-width: 100%;
          }
          .divider {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
