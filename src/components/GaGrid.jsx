import React from "react";
import { Tabs } from "antd";
import AllGrid from "./AllGrid";
import Environment from "./Environment";
import Architectural from "./Architectural";
import Scenery from "./Scenery";

const GaGrid = () => {
  return (
    <>
      <div className="gallery-outer">
        <div className="container">
          <div className="gallery-inner">
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  label: "All",
                  key: "1",
                  children: <AllGrid />,
                },
                {
                  label: "Environment",
                  key: "2",
                  children: <Environment/>,
                },
                {
                  label: "Architectural",
                  key: "3",
                  children: <Architectural/>,
                },
                {
                  label: "Scenery",
                  key: "4",
                  children: <Scenery/>,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GaGrid;
