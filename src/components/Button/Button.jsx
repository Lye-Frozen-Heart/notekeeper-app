// Renders a floatting button which on click shows an Ant Design Modal, non AI Used
import { FloatButton } from "antd";
const Button = ({ showModal }) => {
  return (
    <>
      <FloatButton tooltip={<div>Create Note</div>} onClick={showModal} />
    </>
  );
};

export default Button;
