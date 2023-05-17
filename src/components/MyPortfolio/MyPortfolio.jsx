import React from "react";
import "./MyPortfolio.css";
import { dummydata } from "../../data/dummydata";
import { useTranslation } from "react-i18next";

const MyPortfolio = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <>
        <div
          id="Portfolio"
          className="container col-md-10 col-lg-10 col-xxl-12 py-md-4 py-4  text-primay_globle"
        >
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12 col-md-12 col-xxl-12">
              <h1 className="display-4 ">{t("myportfolio")}</h1>
            </div>
            <div className="col-8 col-md-8 col-xxl-8 my-2">
              <div className="row">
                <div className="col-12 col-md-4 col-xxl-4 my-md-4  text-start">
                  <h6 className=" fw-normal text-center">
                    {t("totlaEtaPurchased")}
                  </h6>
                  <div className="d-flex my-3 input_style">
                    <input
                      className="form-control form-control-lg"
                      type="number"
                      placeholder="$0.00"
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4 col-xxl-4 my-md-4  text-center">
                  <h6 className=" fw-normal text-center">
                    {t("totalUsdSpent")}
                  </h6>
                  <div className="d-flex my-3 input_style">
                    <input
                      className="form-control form-control-lg"
                      type="number"
                      placeholder="$0.00"
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4 col-xxl-4 my-md-4  text-end">
                  <h6 className=" fw-normal text-center">
                    {t("totalUsdtEarned")}
                  </h6>
                  <div className="d-flex my-3 input_style">
                    <input
                      className="form-control form-control-lg"
                      type="number"
                      placeholder="$0.00"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-xxl-12 my-md-4 my-2 mb-md-5 text-start">
              <div className=" withdraw_history_boxs  px-lg-5 px-1  py-4">
                <div className="" style={{ overflow: "auto" }}>
                  <table className="table table-borderless text-white  text-center">
                    <thead>
                      <tr>
                        <th scope="col" className="col-3 fw-semibold th_color">
                          {t("price")}
                        </th>
                        <th scope="col" className="col-3 fw-semibold th_color">
                          {t("ETAToken")}
                        </th>
                        <th scope="col" className="col-3 fw-semibold th_color">
                          {t("round")}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dummydata.map((data, index) => (
                        <tr key={index} className="row_style ">
                          <td className="border_radius_left">{data.no}$</td>
                          <td className="">{data.USD}$</td>
                          <td className="border_radius_right ">
                            {data.USDACE}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MyPortfolio;
