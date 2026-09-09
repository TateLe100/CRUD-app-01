import {getNoteById} from "@/lib/api";
import HomeButton from "@/app/components/HomeButton";

export default async function ViewPage({params}: {params: Promise<{id: string}>} ){
    const {id} = await params;
    const note = await getNoteById(id);


    return (
        <div className="flex flex-col items-center gap-6 mt-10 max-w-2xl mx-auto p-8 bg-blue-300 rounded-2xl">
            <h1 className="text-3xl font-bold mb-2">{note.title}</h1>
            <p className="text-sm text-black mb-6">By {note.creator}</p>
            <p className="whitespace-pre-wrap">{note.content}</p>
            <HomeButton></HomeButton>
        </div>
    );
}

