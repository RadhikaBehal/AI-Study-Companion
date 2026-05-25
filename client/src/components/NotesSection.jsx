import axios from "axios";

import { useState, useEffect } from "react";

function NotesSection() {

  const [notes, setNotes] = useState(() => {
    const savedNotes =
      localStorage.getItem("notes");

    return savedNotes
      ? JSON.parse(savedNotes)
      : [];
  });

  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = () => {
    if (input.trim() === "") return;

    const newNote = {
      id: Date.now(),
      text: input,
    };

    setNotes([newNote, ...notes]);
    setInput("");
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(
      (note) => note.id !== id
    );

    setNotes(updatedNotes);
  };

const summarizeNotes = async () => {

  if (notes.length === 0) return;

  try {

    setLoading(true);

    const combinedNotes = notes
      .map((note) => note.text)
      .join("\n");

    const response = await axios.post(
      "http://localhost:5000/summarize",
      {
        text: combinedNotes,
      }
    );

    setSummary(response.data.summary);

  } catch (error) {

    console.log(error);

    alert("Failed to summarize notes");

  } finally {

    setLoading(false);

  }

};

  return (
    <div className="mt-12 bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 text-white">

      <h2 className="text-3xl font-bold">
        Study Notes
      </h2>

      <div className="flex gap-3 mt-6">

        <textarea
          placeholder="Write your notes..."
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          className="flex-1 bg-black border border-zinc-700 rounded-2xl px-4 py-4 text-white outline-none min-h-[120px]"
        />

      </div>

      <button
        onClick={addNote}
        className="mt-4 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        Save Note
      </button>
      <button
  onClick={summarizeNotes}
  className="mt-4 ml-4 bg-purple-500 px-6 py-3 rounded-xl font-semibold hover:bg-purple-400 transition"
>
  {loading
    ? "Summarizing..."
    : "Summarize with AI"}
</button>

      <div className="mt-8 flex flex-col gap-4">

        {notes.map((note) => (

          <div
            key={note.id}
            className="bg-black border border-zinc-800 rounded-2xl p-5"
          >

            <p className="text-zinc-200 whitespace-pre-wrap">
              {note.text}
            </p>

            <button
              onClick={() =>
                deleteNote(note.id)
              }
              className="mt-4 text-red-400 hover:text-red-300"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

      {summary && (

  <div className="mt-8 bg-black border border-zinc-800 rounded-2xl p-6">

    <h3 className="text-2xl font-bold mb-4">
      AI Summary
    </h3>

    <p className="text-zinc-300 whitespace-pre-wrap">
      {summary}
    </p>

  </div>

)}

    </div>
  );
}

export default NotesSection;