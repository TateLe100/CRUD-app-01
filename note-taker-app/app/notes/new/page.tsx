"use client"
// this turns server -> browser component
import { useState, FormEvent } from "react";
import {postNote} from "@/lib/api";
import { useRouter } from "next/navigation";


export default function NewNotePage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [creator, setCreator] = useState("");
    const router = useRouter();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try{
            await postNote({title, content, creator});
            router.push("/notes")
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <input value={creator} onChange={(e) => setCreator(e.target.value)} />
                <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                <button type="submit">Save Note</button>
            </form>
        </div>
    );
}