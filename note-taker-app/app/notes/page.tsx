import { getNotes } from "@/lib/api";
import DeleteNoteButton from "@/app/notes/DeleteNoteButton";

export default async function NotesPage() {
    const notes = await getNotes();

    return (
        <div>
            <h1>My Notes</h1>
            {notes.length === 0 ? (
                <p>No notes yet. Create your first one!</p>
            ) : (
                <ul>
                    {notes.map((note) => (
                        <li key={note.id}>{note.title} <DeleteNoteButton noteId={note.id.toString()}></DeleteNoteButton> </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
