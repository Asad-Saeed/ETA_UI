import React from "react";
import "./Purchase.css";
import { useTranslation } from "react-i18next";

const Purchase = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <>
        <div
          id="whatiseta"
          className="container col-xxl-12 py-md-4 text-primay_globle"
        >
          <div className="row">
            <div className="col-12 col-md-5 col-xxl-5 my-md-4 my-2 text-start">
              <div className="container USDT_Purchase px-lg-5  py-4">
                <h4 className="text-center ">{t("USDTPurchase")}</h4>
                <div className="">
                  <h6 className=" text-start">ETA</h6>
                  <div className="d-flex my-3 input_style">
                    <input
                      className="form-control form-control-lg"
                      type="number"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div className="">
                  <h6 className=" text-start">{t("cost")}</h6>
                  <div className="d-flex my-3 input_style">
                    <input
                      className="form-control form-control-lg"
                      type="number"
                      placeholder="0.00 USDT"
                    />
                  </div>
                </div>
                <div className="row d-flex text-center">
                  <div className="col-12 col-md-12 col-xxl-12 my-md-2 my-2">
                    <div className="">
                      <button className="btn Buy_eta_button py-2 px-5">
                        {t("buyEta")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2 col-xxl-2 my-md-4 my-2 d-flex flex-column justify-content-center align-item-center">
              <div className=" px-lg-5  py-4 text-center d-md-block d-flex justify-content-between p-5 p-md-0">
                <div className="text-center mb-md-5">
                  <h6>{t("round")}</h6>
                  <h1>2</h1>
                </div>
                <div className="text-center">
                  <h6>{t("currentPrice")}</h6>
                  <h1>0.28</h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-xxl-5 my-md-4 my-2 text-start">
              <div className="container USDT_Purchase px-lg-5  py-4">
                <h4 className="text-center ">{t("USDACE$Purchase")}</h4>
                <div className="">
                  <h6 className=" text-start">ETA</h6>
                  <div className="d-flex my-3 input_style">
                    <input
                      className="form-control form-control-lg"
                      type="number"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div className="">
                  <h6 className=" text-start">{t("cost")}</h6>
                  <div className="d-flex my-3 input_style">
                    <input
                      className="form-control form-control-lg"
                      type="number"
                      placeholder="0.00 USDACE$"
                    />
                  </div>
                </div>
                <div className="row d-flex text-center">
                  <div className="col-12 col-md-12 col-xxl-12 my-md-2 my-2">
                    <div className="">
                      <button className="btn Buy_eta_button py-2 px-5">
                        {t("buyEta")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Purchase;
