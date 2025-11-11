import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

export default function HeaderFe() {
    return (
        <div className="h-[8vh] w-full flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 md:gap-4 lg:gap-6  items-center text-xs sm:text-2xl md:text-l md:text-xl">
                <div className="relative w-12 h-12 md:w-16 md:h-16">
                    <Image src={Logo} alt="Logo" fill className="object-contain" />
                </div>
                <p>Pasar</p>
                <p>Tentang Kami</p>
                <p>Kontak Kami</p>
            </div>
            <div className="flex gap-4">
                <Button>SIGN IN</Button>
                <Button>SIGN UP</Button>
            </div>
        </div>
    );
}
