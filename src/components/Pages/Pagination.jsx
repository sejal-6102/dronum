import { Button, Image, Modal } from "antd";
import { useState } from "react";

const Pagination = () => {
  const [show1, setShow1] = useState(false);
  return (
    <>
      <Image src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
        <Button
          onClick={() => {
            setShow1(true);
          }}
        >
          showModal
        </Button>
      </Image>

      <Modal
        open={show1}
        afterOpenChange={(open) => {
          setShow1(open);
        }}
        onCancel={() => {
          setShow1(false);
        }}
      ></Modal>
    </>
  );
};

export default Pagination;
