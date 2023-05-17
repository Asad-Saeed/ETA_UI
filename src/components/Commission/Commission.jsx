import React from "react";
import "./Commission.css";
import commission from "../../assets/images/digital_wallet (1) 1.png";
import { useTranslation } from "react-i18next";
const Commission = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <>
        <div
          id="commission"
          className="container col-xxl-12 py-md-4 py-4 text-primay_globle"
        >
          <div className="col-12 col-md-12 col-xxl-12">
            <h1 className="display-4 ">{t("commission")}</h1>
          </div>
          <div className="row d-flex align-items-center flex-md-row-reverse">
            <div className="col-12 col-md-7 col-xxl-7 my-md-4 my-2 text-center ">
              <div className="d-flex justify-content-end align-items-center px-lg-5 py-4">
                <img className="img-fluid" src={commission} alt="Commission" />
              </div>
            </div>
            <div className="col-12 col-md-5 col-xxl-5 my-md-4 my-2 text-start sec_z_index">
              <div className="container commission_boxs px-lg-5  py-4">
                <h4 className="text-center ">{t("referral")}</h4>
                <div className="">
                  <h6 className=" text-start">USDT</h6>
                  <div className="d-flex my-3 input_style">
                    <input
                      className="form-control form-control-lg"
                      type="number"
                      placeholder="0.00 USDT"
                      readOnly
                    />
                  </div>
                </div>
                <div className="">
                  <h6 className=" text-start">USDACE$</h6>
                  <div className="d-flex my-3 input_style">
                    <input
                      className="form-control form-control-lg"
                      type="number"
                      placeholder="0.00 USDACE$"
                      readOnly
                    />
                  </div>
                </div>
                <div className="row d-flex text-center">
                  <div className="col-12 col-md-12 col-xxl-12 my-md-2 my-2">
                    <div className="">
                      <button
                        className="btn btn btn-outline Withdraw_com_button py-2 px-5"
                        style={{ width: 100 + "%" }}
                      >
                        {t("withdrawCommission")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container commission_boxs mt-4 px-lg-5  py-4">
                <h4 className="text-center mb-4 ">{t("totalCommissionEar")}</h4>
                <div className="d-flex mb-3">
                  <div className="col-6 col-md-6 col-xxl-6 mx-lg-2">
                    <h6 className=" text-center">USDT</h6>
                    <div className="d-flex mt-3 input_style">
                      <input
                        className="form-control form-control-lg "
                        type="number"
                        placeholder="0.00 $"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-6 col-md-6 col-xxl-6 mx-lg-2">
                    <h6 className=" text-center">USDACE$</h6>
                    <div className="d-flex mt-3 input_style">
                      <input
                        className="form-control form-control-lg"
                        type="number"
                        placeholder="0.00 $"
                        readOnly
                      />
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

export default Commission;
