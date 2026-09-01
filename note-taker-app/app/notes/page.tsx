import { getNotes } from "@/lib/api";

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
                        <li key={note.id}>{note.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
