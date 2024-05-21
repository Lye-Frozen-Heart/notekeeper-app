import { Card } from "antd";
import "./Note.css";
import {
  EditTwoTone,
  DeleteTwoTone,
  HeartFilled,
  HeartOutlined,
} from "@ant-design/icons";
import { NoteStatusIcon } from "./NoteStatusIcon";

const Note = ({ note, showModal, handleDeleteEntry }) => {
  return (
    <>
      <Card
        key={note.id}
        title={note.name}
        extra={note.important ? <HeartFilled /> : <HeartOutlined />}
        style={{ margin: "15px" }}
        actions={[
          <EditTwoTone
            key="edit"
            onClick={() => {
              showModal();
            }}
          />,
          <DeleteTwoTone
            key="delete"
            onClick={() => {
              handleDeleteEntry(note.id);
            }}
          />,
        ]}
      >
        <p>{note.description}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p style={{ textDecoration: "underline" }}>Status</p>
          <NoteStatusIcon status={note.status} />
        </div>
      </Card>
    </>
  );
};

export default Note;
