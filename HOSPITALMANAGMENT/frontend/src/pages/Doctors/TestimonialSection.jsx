const TestimonialSection = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-content">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/e25c41622b32ca0afdadfd5131bfdcd376e16ce2592489f6a6eeb2dc298e63a3?placeholderIfAbsent=true"
          className="quote-icon"
          alt="Quote icon"
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
          alt="Divider"
        />
        <p className="author-name">John Doe</p>
      </div>
      <style jsx>{`
       .testimonial {
  background-color: rgba(31, 43, 108, 0.6);
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  // height: 100vh; /* Ensure it takes full viewport height */
  width: 100%;
  padding: 64px 80px;
  font-family: Work Sans, sans-serif;
  font-size: 22px;
  color: #fcfefe;
  font-weight: 400;
  text-align: center;
  background: #1f2b6c;
}

        .testimonial-content {
          display: flex;
          width: 634px;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .quote-icon {
          aspect-ratio: 1.5;
          object-fit: contain;
          object-position: center;
          width: 45px;
          fill: #bfd2f8;
        }
        .testimonial-text {
          line-height: 31px;
          margin: 40px 0 0;
          text-align: center;
          max-width: 80%;
        }
        .divider {
          aspect-ratio: 200;
          object-fit: contain;
          object-position: center;
          width: 222px;
          stroke-width: 1px;
          stroke: #bfd2f8;
          margin-top: 20px;
          max-width: 100%;
        }
        .author-name {
          line-height: 1.4;
          margin: 19px 0 0;
        }
        @media (max-width: 991px) {
          .testimonial {
            max-width: 100%;
            padding: 20px;
            padding-bottom: 100px;
            margin-top: 40px;
          }
          .testimonial-content {
            margin-bottom: 10px;
          }
          .testimonial-text {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;