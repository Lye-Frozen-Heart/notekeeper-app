import { FloatButton } from "antd";

const Button = ({ showModal }) => {
  return (
    <>
      <FloatButton tooltip={<div>Create Note</div>} onClick={showModal} />
    </>
  );
};

export default Button;
