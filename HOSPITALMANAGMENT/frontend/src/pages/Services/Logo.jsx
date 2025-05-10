export function Logo() {
  return (
    <h1 className="logo">
      <span className="logo-med">Med</span>
      <span className="logo-dical">dical</span>

      <style jsx>{`
        .logo {
          font-family: Yeseva One, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 36px;
          font-weight: 400;
          text-transform: uppercase;
        }

        .logo-med {
          color: #1f2b6c;
        }

        .logo-dical {
          color: #159eec;
        }
      `}</style>
    </h1>
  );
}
