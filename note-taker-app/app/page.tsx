import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-10">
      <h1 className={"text-3xl font-bold"}>HOME Page</h1>
        <div className={"flex gap-5"}>
            <Link href="/notes" className={"bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-blue-600"}>My Notes</Link>
            <Link href={"/notes/new"} className={"bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-blue-600"}>Add Note</Link>
        </div>
    </div>
  );
}
