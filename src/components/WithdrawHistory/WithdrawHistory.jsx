import React from "react";
import "./WithdrawHistory.css";
import { dummydata } from "../../data/dummydata";
import { useTranslation } from "react-i18next";

const WithdrawHistory = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <>
        <div className="container col-md-10 col-lg-10 col-xxl-12 py-md-4 py-4 text-primay_globle">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12 col-md-12 col-xxl-12">
              <h1 className="display-4 ">{t("withdrawHistory")}</h1>
            </div>
            <div className="col-12 col-md-12 col-xxl-12 my-md-4 my-2 text-start">
              <div className=" withdraw_history_boxs  px-lg-5 px-1  py-4">
                <div className="" style={{ overflow: "auto" }}>
                  <table className="table table-borderless  text-center">
                    <thead>
                      <tr>
                        <th scope="col" className="col-3 fw-semibold th_color">
                          No.
                        </th>
                        <th scope="col" className="col-3 fw-semibold th_color">
                          USD
                        </th>
                        <th scope="col" className="col-3 fw-semibold th_color">
                          USDACE$
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dummydata.map((data, index) => (
                        <tr key={index} className="row_style">
                          <td className="border_radius_left">{index + 1}.</td>
                          <td>{data.USD}$</td>
                          <td className="border_radius_right">
                            {data.USDACE}$
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

export default WithdrawHistory;
