import { useState, useEffect } from "react";
import Note from "../Note/Note";
import Button from "../Button/Button";
import { Spin, List, message } from "antd";
import { CreateNoteForm } from "../CreateNoteForm/CreateNoteForm";
import { UpdateNoteForm } from "../UpdateNoteForm/UpdateNoteForm";

export const NotesList = ({
  notes,
  loading,
  handleNewNoteEntry,
  handleDeleteEntry,
  handleUpdateNoteEntry,
}) => {
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [notificationInfo, setNotificationInfo] = useState(null);

  const handleDeleteEntryNotification = async (id) => {
    try {
      await handleDeleteEntry(id);
      setNotificationInfo({
        type: "success",
        content: "Note Deleted Successfully!",
      });
    } catch (error) {
      setNotificationInfo({
        type: "error",
        content: `An error occurred deleting the note: ${error.message}`,
      });
    }
  };

  const showCreateModal = () => {
    setIsCreateModalVisible(true);
  };

  const handleOkCreate = () => {
    setIsCreateModalVisible(false);
  };

  const handleCancelCreate = () => {
    setIsCreateModalVisible(false);
  };

  const showUpdateModal = (note) => {
    setSelectedNote(note);
    setIsUpdateModalVisible(true);
  };

  const handleOkUpdate = () => {
    setIsUpdateModalVisible(false);
  };

  const handleCancelUpdate = () => {
    setIsUpdateModalVisible(false);
    setSelectedNote(null);
  };

  const onFinishCreate = async (values) => {
    try {
      await handleNewNoteEntry(values);
      setNotificationInfo({
        type: "success",
        content: "Note Created Successfully!",
      });
    } catch (error) {
      setNotificationInfo({
        type: "error",
        content: `An error occurred creating the note: ${error.message}`,
      });
    } finally {
      setCurrentPage(notes.length);
      setIsCreateModalVisible(false);
    }
  };

  const onFinishUpdate = async (noteValues) => {
    try {
      await handleUpdateNoteEntry(selectedNote.id, noteValues);
      setNotificationInfo({
        type: "success",
        content: "Note Updated Successfully!",
      });
    } catch (error) {
      setNotificationInfo({
        type: "error",
        content: `An error occurred updating the note: ${error.message}`,
      });
    } finally {
      setIsUpdateModalVisible(false);
      const newIndex = notes.findIndex((note) => note.id === selectedNote.id);
      setCurrentPage(Math.ceil((newIndex + 1) / 1));
      setSelectedNote(null);
    }
  };

  useEffect(() => {
    if (notificationInfo) {
      const { type, content } = notificationInfo;
      message[type](content);
      setNotificationInfo(null);
    }
  }, [notificationInfo]);

  return (
    <>
      {loading ? (
        <Spin
          size="large"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%",
          }}
        />
      ) : (
        <>
          <Button showModal={showCreateModal} />
          <List
            className="white"
            itemLayout="vertical"
            style={{ width: "50%", margin: "auto" }}
            pagination={{
              pageSize: 1,
              align: "center",
              current: currentPage,
              onChange: (page) => setCurrentPage(page),
            }}
            dataSource={notes}
            renderItem={(note) => (
              <List.Item key={note.id}>
                <Note
                  key={note.id}
                  note={note}
                  showModal={() => showUpdateModal(note)}
                  handleDeleteEntry={handleDeleteEntryNotification}
                />
              </List.Item>
            )}
          />
          <CreateNoteForm
            onFinish={onFinishCreate}
            handleCancel={handleCancelCreate}
            handleOk={handleOkCreate}
            isModalVisible={isCreateModalVisible}
          />
          {selectedNote && (
            <UpdateNoteForm
              onFinish={onFinishUpdate}
              handleCancel={handleCancelUpdate}
              handleOk={handleOkUpdate}
              isModalVisible={isUpdateModalVisible}
              note={selectedNote}
            />
          )}
        </>
      )}
    </>
  );
};
