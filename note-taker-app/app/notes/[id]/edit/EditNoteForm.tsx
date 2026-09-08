"use client";
import { useState, FormEvent } from "react";
import {Note, putNote} from "@/lib/api";
import { useRouter } from "next/navigation";
import HomeButton from "@/app/components/HomeButton";

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
        <div className={"max-w-2xl mx-auto p-8 "}>
            <h1 className="text-3xl font-bold mb-6">Edit Note</h1>
            <form onSubmit={handleSubmit}>
                <div className={"mb-4"}>
                    <label className={"block text-sm font-medium mb-1"} htmlFor="title">Title</label>
                    <input id={"title"} value={title} className={"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={"mb-4"}>
                    <label className={"block text-sm font-medium mb-1"} htmlFor="creator">Creator</label>
                    <input id={"creator"} value={creator} className={"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"} onChange={(e) => setCreator(e.target.value)} />
                </div>
                <div className={"mb-4"}>
                    <label className={"block text-sm font-medium mb-1"} htmlFor="content">Content</label>
                    <textarea rows={4} id={"content"} value={content} className={"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"} onChange={(e) => setContent(e.target.value)} />
                </div>


                <button className={"bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"} type="submit">Update Note</button>
                <HomeButton></HomeButton>
            </form>
        </div>

    )
}

