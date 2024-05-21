const baseUrl = import.meta.env.VITE_BASE_URL_NOTES;

const getData = async (url, method = "GET", body = null) => {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
    };
    if (body) options.body = JSON.stringify(body);

    const response = await fetch(url, options);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error al obtener las notas:", error);
    throw error;
  }
};

const getAllNotes = async () => {
  return await getData(baseUrl);
};
const addNewNoteEntry = async (body) => {
  await getData(baseUrl, "POST", body);
};
const updateNoteEntry = async (id, body) => {
  const url = `${baseUrl}/${id}`;
  await getData(url, "PUT", body);
};

const deleteNoteEntry = async (id) => {
  const url = `${baseUrl}/${id}`;
  await getData(url, "DELETE");
};

export default {
  getAllNotes,
  addNewNoteEntry,
  deleteNoteEntry,
  updateNoteEntry,
};
