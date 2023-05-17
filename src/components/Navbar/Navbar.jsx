import React, { useContext, useState, useEffect } from "react";
import header_logo from "../../assets/images/Estella-Logo-CN-120423-2.png";
import { ThemeContext } from "../../Theme";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { t, i18n } = useTranslation();
  let [lan, setLan] = useState("");
  function handleClick(lang) {
    i18n.changeLanguage(lang);
    setLan(lang);
  }
  useEffect(() => {
    setLan(i18n.language);
  }, []);
  return (
    <nav class="navbar navbar-expand-lg navbar-dark py-md-4 text-primay_globle">
      <div class="container">
        <a class="navbar-brand" href="/">
          <div className="d-flex  align-items-center">
            <img src={header_logo} alt="eta" />
            <div className="d-flex flex-column text-start">
              <span className="small text-primay_globle fw-semibold">
                治療之星
              </span>
              <span className="small text-primay_globle fw-semibold">
                ESTRELLA TERA
              </span>
            </div>
          </div>
        </a>
        <button
          class="navbar-toggler me-1 shadow-none border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i
            className="fa fa-navicon text-primay_globle"
            style={{ fontSize: 24 }}
          />
        </button>
        <div
          class="collapse navbar-collapse text-start"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav m-auto">
            <li class="nav-item me-md-3">
              <a class="nav-link" href="#commission">
                <span
                  data-bs-target="#navbarSupportedContent"
                  data-bs-toggle="collapse"
                >
                  {t("nav_1")}
                </span>
              </a>
            </li>
            <li class="nav-item me-md-3">
              <a class="nav-link" href="#Portfolio">
                <span
                  data-bs-target="#navbarSupportedContent"
                  data-bs-toggle="collapse"
                >
                  {t("nav_2")}
                </span>
              </a>
            </li>
            <li class="nav-item me-md-3">
              <a class="nav-link" href="#faq">
                <span
                  data-bs-target="#navbarSupportedContent"
                  data-bs-toggle="collapse"
                >
                  {t("nav_3")}
                </span>
              </a>
            </li>
            <li class="nav-item me-md-3">
              <a class="nav-link" href="#whatiseta">
                <span
                  data-bs-target="#navbarSupportedContent"
                  data-bs-toggle="collapse"
                >
                  {t("nav_4")}
                </span>
              </a>
            </li>
            <li class="nav-item me-md-3">
              <a class="nav-link" href="#downloadfastlink">
                <span
                  data-bs-target="#navbarSupportedContent"
                  data-bs-toggle="collapse"
                >
                  {t("nav_5")}
                </span>
              </a>
            </li>
            <li class="nav-item me-md-3">
              <a class="nav-link" href="#DownloadTPwallet">
                <span
                  data-bs-target="#navbarSupportedContent"
                  data-bs-toggle="collapse"
                >
                  {t("nav_6")}
                </span>
              </a>
            </li>
          </ul>
          <div>
            <div
              className="d-flex form-check btn form-switch align-items-center text-primay_globle"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onClick={() => toggleTheme()}
            >
              {/* {theme} */}
              {theme === "light-theme" ? (
                <i className="fa fa-moon-o" style={{ fontSize: 20 }} />
              ) : (
                <i className="fa fa-sun-o" style={{ fontSize: 20 }} />
              )}
            </div>
          </div>
          <div className="mx-md-2">
            <div className="language_change">
              <select
                className="btn btn-outline form-select"
                aria-label="Default select example"
                onChange={(e) => handleClick(e.target.value)}
                value={lan}
              >
                <option value="en" selected>
                  EN
                </option>
                <option value="chi">CH</option>
              </select>
            </div>
          </div>
        </div>
        <button className="btn connect_wallet_button px-md-3">
          {t("connectWallet")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
