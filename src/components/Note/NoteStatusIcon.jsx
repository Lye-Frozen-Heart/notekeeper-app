//Component which renders a different Icon considering the status of the note, non AI Used
import {
  EllipsisOutlined,
  CheckOutlined,
  Loading3QuartersOutlined,
} from "@ant-design/icons";

export const NoteStatusIcon = ({ status }) => {
  switch (status) {
    case "pending":
      return <EllipsisOutlined style={{ margin: "10px" }} />;
    case "done":
      return <CheckOutlined style={{ margin: "10px" }} />;
    case "in progress":
      return <Loading3QuartersOutlined style={{ margin: "10px" }} />;
  }
};
