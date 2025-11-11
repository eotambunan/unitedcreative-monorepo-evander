import Image from "next/image";
import Logo from "@/assets/logo.svg";


export default function HeaderBe() {
    return (
        <div className="h-[10vh] w-full bg-[#13213F]/20 px-8 flex justify-between items-center">
            <Image src={Logo} alt="Logo" width={68} height={68} />
            <p>Keluar</p>
        </div>
    );
}
