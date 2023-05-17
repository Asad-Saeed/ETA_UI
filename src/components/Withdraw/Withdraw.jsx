import React from "react";
import "./Withdraw.css";
import withdraw from "../../assets/images/virtual_card 1.png";
import info from "../../assets/images/Vector (6).png";
import { useTranslation } from "react-i18next";

const Withdraw = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <>
        <div className="container col-xxl-12 py-md-4 py-4  text-primay_globle">
          <div className="col-12 col-md-12 col-xxl-12">
            <h1 className="display-4 ">{t("Withdraw")}</h1>
          </div>
          <div className="row d-flex align-items-center flex-md-row-reverse">
            <div className="col-12 col-md-7 col-xxl-7 my-md-4 my-2 text-center ">
              <div className="d-flex justify-content-end align-items-center px-lg-5  py-4">
                <img className="img-fluid" src={withdraw} alt="Commission" />
              </div>
            </div>
            <div className="col-12 col-md-5 col-xxl-5 my-md-4 my-2 text-start sec_z_index1">
              <div className="container USDT_Purchase px-lg-5  py-4">
                <h4 className="text-center ">{t("etaWithdraw")}</h4>
                <div className="">
                  <h6 className=" small text-start">{t("Youwillget")}</h6>
                  <div className="d-flex my-3 input_style">
                    <input
                      className="form-control form-control-lg"
                      type="number"
                      placeholder="0 ETA"
                      readOnly
                    />
                  </div>
                </div>

                <div className="row d-flex text-center">
                  <div className="col-12 col-md-12 col-xxl-12 my-md-2 my-2">
                    <div className="">
                      <button
                        className="btn btn btn-outline Withdraw_button py-2 px-5"
                        style={{ width: 100 + "%" }}
                      >
                        {t("WithdrawETA")}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row d-flex text-center align-items-center">
                  <div className="col-12 col-md-12 col-xxl-12 my-md-2 my-2">
                    <div className="text-start text-color-info">
                      <img className="img-fluid" src={info} alt="info" />
                      {/* <i
                        className="fa fa-info-circle"
                        style={{ fontSize: 20 }}
                      /> */}

                      <span className="small ms-2">
                        {t("withdrawlNotification")}
                      </span>
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

export default Withdraw;
