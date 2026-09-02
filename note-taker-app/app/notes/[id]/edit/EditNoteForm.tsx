"use client";
import { useState, FormEvent } from "react";
import {Note, putNote} from "@/lib/api";
import { useRouter } from "next/navigation";

export default function EditNoteForm({note}: {note: Note}) {

    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [creator, setCreator] = useState(note.creator);
    const router = useRouter();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try{
            await putNote(note.id.toString(), { id: note.id, title, content, creator });
            router.push("/notes")
        }catch(error){
            console.log(error);
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <input value={creator} onChange={(e) => setCreator(e.target.value)} />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            <button type="submit">Update Note</button>
        </form>
    )
}

