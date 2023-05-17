import React from "react";
import "./Registor.css";
import { useTranslation } from "react-i18next";

const Registor = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <>
        <div className="container col-xxl-12 py-5 text-primay_globle">
          <div className="row">
            <div className="col-12 col-md-4 col-xxl-4 my-md-4 my-2 text-start">
              <h6 className="text-start">{t("walletAddress")}</h6>
              <div className="d-flex my-3 input_style">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder={t("connectWallet")}
                  readOnly
                />
                <button className="btn btn-outline copy">
                  {" "}
                  <i className="fa fa-copyright" style={{ fontSize: 20 }} />
                </button>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xxl-4 my-md-4 my-2 text-center">
              <h6 className="text-start">{t("referralLink")}</h6>
              <div className="d-flex my-3 input_style">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="https://etadapp.live/#etaPortfolio"
                  readOnly
                />
                <button className="btn btn-outline copy">
                  <i className="fa fa-clone" style={{ fontSize: 20 }} />
                </button>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xxl-4 my-md-4 my-2 text-end">
              <h6 className="text-start">{t("introducerAddress")}</h6>
              <div className="d-flex my-3 input_style">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="0x00000000000000"
                />
                {/* <button className="btn btn-outline copy">
                  <i className="fa fa-copyright" style={{ fontSize: 20 }} />
                </button> */}
              </div>
            </div>
          </div>
          <div className="row d-flex text-center">
            <div className="col-12 col-md-12 col-xxl-12 my-md-4 my-2">
              <div className="">
                <button className="btn registor_button py-2 px-5">
                  {t("Register")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Registor;
