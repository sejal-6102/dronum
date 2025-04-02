import React from "react";
import { Accordion } from "react-bootstrap";

const FaqItems = (props) => {

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={props.value.key}>
          <Accordion.Header> {props.value.title} </Accordion.Header>
          <Accordion.Body>{props.value.des}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default FaqItems;
