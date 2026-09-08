import {getNoteById} from "@/lib/api";
import EditNoteForm from "@/app/notes/[id]/edit/EditNoteForm";
import HomeButton from "@/app/components/HomeButton";

export default async function EditPage({params}: {params: Promise<{id: string}>} ){
    const {id} = await params;
    const note = await getNoteById(id);


    return (
        <div>
            <EditNoteForm note={note}></EditNoteForm>
        </div>
    );
}

