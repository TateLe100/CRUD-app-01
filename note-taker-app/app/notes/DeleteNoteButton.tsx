"use client"
import { deleteNote } from "@/lib/api";
import { useRouter } from "next/navigation";

import React from 'react'

export default function DeleteNoteButton({ noteId }: { noteId: string }) {
    const router = useRouter();

    async function handleDelete(){
        const confirmed = confirm("Are you sure you want to delete note?");

        if (!confirmed) return;
        try {
            await deleteNote(noteId);
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button className={"text-red-600 hover:text-red-800 text-sm font-medium"} onClick={() => handleDelete()}>Delete</button>
    )
}
