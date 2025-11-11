import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full flex h-screen flex-row gap-20 justify-center items-center">
            <Link href="/fe" className="block">
                <div className="h-[25vh] w-[25vw] bg-red-500 rounded-4xl flex flex-col items-center justify-center hover:bg-red-600 transition-colors cursor-crosshair">
                    <p className="text-white text-4xl font-bold">FE</p>
                </div>
            </Link>

            <Link href="/be" className="block">
                <div className="h-[25vh] w-[25vw] bg-green-500 rounded-4xl flex flex-col items-center justify-center hover:bg-green-600 transition-colors cursor-help">
                    <p className="text-white text-4xl font-bold">BE</p>
                </div>
            </Link>
        </div>
    );
}
