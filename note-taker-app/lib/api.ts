const API_BASE = process.env.NEXT_PUBLIC_API_URL;


export interface Note {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string | null;
    creator: string;
}

// BASIC GET API CALL
// Promise is like task in c# and its going to return array of Notes
export async function getNotes(): Promise<Note[]> {
    // no-store means dont store the results in cache i.e. because we are constantly updating notes and dont want
    // stale results
    const res = await fetch(`${API_BASE}/notes`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch notes");
    return res.json();
}

// BASIC POST API CALL
// for a post also since id and other fields are being set in the backend you only need to pass the fields coming from
// the frontend which are title and content
// also if we use title and content a lot then we can pull it out into its own interface
export async function postNote(note: {title: string; content: string; creator: string}): Promise<Note> {
    // for post you need 3 method, headers, body
    const res = await fetch(`${API_BASE}/notes`, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(note)});
    if (!res.ok) throw new Error("Failed to create notes");
    return res.json();
}

// BASIC PUT API CALL
export async function putNote(noteId: string, note: {id: number; title: string; content: string; creator: string}) : Promise<void> {
    const res = await fetch(`${API_BASE}/notes/${noteId}`, {method: "PUT", headers: {"Content-Type": "application/json"}, body: JSON.stringify(note)});
    if (!res.ok) throw new Error("Failed to updating note at id: " + noteId);
    // return res.json();
}

// BASIC GET API CALL
export async function getNoteById(noteId: string): Promise<Note> {
    const res = await fetch(`${API_BASE}/notes/${noteId}`, {cache: "no-store"});
    if (!res.ok) throw new Error("Failed to fetch note at id: " + noteId);
    return res.json();
}


// BASIC DELETE API CALL
export async function deleteNote(noteId: string) : Promise<void> {
    const res = await fetch(`${API_BASE}/notes/${noteId}`, {method: "DELETE"});
    if (!res.ok) throw new Error("Failed to deleting note at id: " + noteId);
}