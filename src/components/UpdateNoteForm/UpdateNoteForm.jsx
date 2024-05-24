//A modal form where you can update a note, non AI Used
//Needs a note to show it's data
import {
  Modal,
  Form,
  Input,
  Button as AntButton,
  Select,
  Switch,
  DatePicker,
} from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

export const UpdateNoteForm = ({
  onFinish,
  handleCancel,
  handleOk,
  isModalVisible,
  note,
}) => {
  return (
    <Modal
      title="Update Note"
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        layout="horizontal"
        onFinish={onFinish}
        initialValues={{
          name: note.name,
          description: note.description,
          important: !!note.important,
          status: note.status,
          dueDate: note.dueDate && dayjs(note.dueDate),
        }}
      >
        <Form.Item
          label="Note Name"
          name="name"
          rules={[{ required: true, message: "Please input the note name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input the note description!" },
          ]}
        >
          <Input.TextArea style={{ resize: "none" }} />
        </Form.Item>
        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: "Please input the note status!" }]}
        >
          <Select
            options={[
              { value: "pending", label: <p>pending</p> },
              { value: "in progress", label: <p>in progress</p> },
              { value: "done", label: <p>done</p> },
            ]}
          />
        </Form.Item>
        <Form.Item label="Important" name="important" valuePropName="checked">
          <Switch
            checkedChildren={<HeartFilled />}
            unCheckedChildren={<HeartOutlined />}
          />
        </Form.Item>
        <Form.Item
          label="Due Date"
          name="dueDate"
          rules={[{ required: true, message: "Please input the note date!" }]}
        >
          <DatePicker format="DD/MM/YYYY" />
        </Form.Item>
        <Form.Item>
          <AntButton type="primary" htmlType="submit">
            Submit
          </AntButton>
        </Form.Item>
      </Form>
    </Modal>
  );
};
