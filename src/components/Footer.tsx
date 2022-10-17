import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <footer className="footer bg-dark text-muted">
      <div className="container">
        <div className="footerBg d-flex flex-column justify-content-center">
          <div className="logo">BizCardz</div>
          <p>
            Coded and Desiged by
            <a
              className="footerLink"
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/shahafseza/")
              }
            >
              Shahaf Seza
            </a>
            <br />© All Rights Reserved 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
