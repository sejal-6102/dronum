import React from "react";
import ProductInfo from "./ProductInfo";
import ProductDes from "./ProductDes";
import { Tabs } from "antd";
import AdditionalInfo from "./AdditionalInfo";
import ReView from "./ReView";

const OneProduct = () => {
  return (
    <>
      <div className="single-product-outer">
        <div className="container">
          <div className="single-product-inner">
            <ProductInfo />
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  label: "Description",
                  key: "1",
                  children: <ProductDes />,
                },
                {
                  label: "Additional information",
                  key: "2",
                  children: <AdditionalInfo/>,
                },
                {
                  label: "Reviews (0)",
                  key: "3",
                  children: <ReView/>,
                }
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OneProduct;
