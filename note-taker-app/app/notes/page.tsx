import { getNotes } from "@/lib/api";
import DeleteNoteButton from "@/app/notes/DeleteNoteButton";

export default async function NotesPage() {
    const notes = await getNotes();

    return (
        <div className={"p-8 max-w-2xl mx-auto"}>
            <h1 className={"text-3xl font-bold mb-6"}>My Notes</h1>
            {notes.length === 0 ? (
                <p>No notes yet. Create your first one!</p>
            ) : (
                <ul className={"list-none"}>
                    {notes.map((note) => (
                        <li className={"bg-blue-300 p-4 shadow rounded-lg mb-3 flex items-center justify-between"} key={note.id}>
                            <span className={"font-bold"}>{note.title}</span>
                            <DeleteNoteButton noteId={note.id.toString()}></DeleteNoteButton>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
