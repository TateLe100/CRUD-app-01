import { getNotes } from "@/lib/api";
import DeleteNoteButton from "@/app/notes/DeleteNoteButton";
import Link from "next/link";
import HomeButton from "@/app/components/HomeButton";

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
                        <li className={"bg-blue-300 p-4 shadow rounded-lg mb-3 flex items-center justify-between gap-8"} key={note.id}>

                            <span className={"font-bold flex-1 min-w-0"}>{note.title}</span>
                            <div className={"flex gap-3 shrink-0"}>
                                <Link href={`/notes/${note.id}/edit`} className={"bg-blue-900 text-white px-4 py-2 rounded-md"}>
                                    Edit
                                </Link>

                                <Link href={`/notes/${note.id}`} className={"bg-blue-900 text-white px-4 py-2 rounded-md"}>
                                    View
                                </Link>
                                <DeleteNoteButton noteId={note.id.toString()}></DeleteNoteButton>
                            </div>

                        </li>
                    ))}
                </ul>
            )}
            <HomeButton></HomeButton>
        </div>
    );
}
