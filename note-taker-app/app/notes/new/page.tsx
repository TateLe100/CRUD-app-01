"use client"
// this turns server -> browser component
import { useState, FormEvent } from "react";
import {postNote} from "@/lib/api";
import { useRouter } from "next/navigation";
import HomeButton from "@/app/components/HomeButton";


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
        <div className={"max-w-2xl mx-auto p-8 "}>
            <h1 className="text-3xl font-bold mb-6">New Note</h1>
            <form onSubmit={handleSubmit}>
                <div className={"mb-4"}>
                    <label className={"block text-sm font-medium mb-1"} htmlFor="title">Title</label>
                    <input id={"title"} className={"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={"mb-4"}>
                    <label className={"block text-sm font-medium mb-1"} htmlFor="creator">Creator</label>
                    <input id={"creator"} className={"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"} value={creator} onChange={(e) => setCreator(e.target.value)} />
                </div>
                <div className={"mb-4"}>
                    <label className={"block text-sm font-medium mb-1"} htmlFor="content">Content</label>
                    <textarea id={"content"} rows={4} className={"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"} value={content} onChange={(e) => setContent(e.target.value)} />
                </div>

                <button className={"bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-blue-600"} type="submit">Save Note</button>
                <HomeButton></HomeButton>
            </form>
        </div>
    );
}