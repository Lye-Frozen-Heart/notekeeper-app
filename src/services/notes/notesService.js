//API BaseURL
const baseUrl = import.meta.env.VITE_BASE_URL_NOTES;
//This function required the use of AI, but basically requires of an url to fetch,
//an optional method ( default is GET ) and an optional body.
//First we declare the method and the type of content we will get or pass to the API.
//Second we stringify the body ( if we give one ) to JSON format.
//Then we fetch to the given URL within the method and type of content we declared previously.
//If the response it's not okay we'll return an status of it.
//Finally if the response it's okay we'll await for the return of the response in JSON format.
const fetchData = async (url, method = "GET", body = null) => {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
    };
    if (body) options.body = JSON.stringify(body);

    const response = await fetch(url, options);

    if (!response.ok) {
      console.log(`HTTP Error! Status of the request: ${response.status}`);
      return null;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error al obtener las notas:", error);
    throw error;
  }
};
//Using getDate we get all the notes from the given URL.
const getAllNotes = async () => {
  return await fetchData(baseUrl);
};
//We send to the API the note data within POST method.
const addNewNoteEntry = async (body) => {
  const addedNote = await fetchData(baseUrl, "POST", body);
  return addedNote;
};
//We update the note with it's given id and it's new parameters.
const updateNoteEntry = async (id, body) => {
  const url = `${baseUrl}/${id}`;
  const updatedNote = await fetchData(url, "PUT", body);
  return updatedNote;
};
//We delete the note with it's given id.
const deleteNoteEntry = async (id) => {
  const url = `${baseUrl}/${id}`;
  const deletedNote = await fetchData(url, "DELETE");
  return deletedNote;
};

export default {
  getAllNotes,
  addNewNoteEntry,
  deleteNoteEntry,
  updateNoteEntry,
};
