import Link from "next/link";

export default function HomeButton() {
    return (
        <Link href="/" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
            Home
        </Link>
    );
}