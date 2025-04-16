import React, { useState } from "react";
import { Tabs } from "antd";
import AllGrid from "./AllGrid";
import Environment from "./Environment";
import Architectural from "./Architectural";
import Scenery from "./Scenery";
import EnrollForm from "./Pages/EnrollForm";


const GaGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setModal = modal=>{
    setIsModalOpen(modal);
  }
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
                  children: <AllGrid setModal={setModal} />,
                },
                {
                  label: "Environment",
                  key: "2",
                  children: <Environment setModal={setModal}/>,
                },
                {
                  label: "Architectural",
                  key: "3",
                  children: <Architectural setModal={setModal}/>,
                },
                {
                  label: "Scenery",
                  key: "4",
                  children: <Scenery setModal={setModal}/>,
                },
              ]}
            />
            <EnrollForm isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />

          </div>
        </div>
      </div>
    </>
  );
};

export default GaGrid;
