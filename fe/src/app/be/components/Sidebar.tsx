import Dashboard from "@/assets/Dashboard.svg";
import Deposit from "@/assets/Deposit.svg";
import Withdraw from "@/assets/Withdraw.svg";
import Member from "@/assets/Member.svg";
import Verification from "@/assets/Verification.svg";
import Reset from "@/assets/Reset.svg";
import Daily from "@/assets/Daily.svg";
import Setting from "@/assets/Settings.svg";
import Image from "next/image";

const DataNavbar = [
    {
        id: "1",
        label: "Dashboard",
        icon: Dashboard,
    },
    {
        id: "2",
        label: "Deposit",
        icon: Deposit,
    },
    {
        id: "3",
        label: "Withdraw",
        icon: Withdraw,
    },
    {
        id: "4",
        label: "Member",
        icon: Member,
    },
    {
        id: "5",
        label: "Verification (KYC)",
        icon: Verification,
    },
    {
        id: "6",
        label: "Reset 2FA Request",
        icon: Reset,
    },
    {
        id: "7",
        label: "Daily Report",
        icon: Daily,
    },
    {
        id: "8",
        label: "Setting",
        icon: Setting,
    },
];

export default function SidebarBe() {
    return (
        <div className="w-[15vw] bg-[#050911] pl-8 overflow-y-auto pt-12">
            <ul>
                {DataNavbar.map((el) => (
                    <li className="flex flex-row gap-3 mt-4" key={el.id}>
                        <Image
                            src={el.icon}
                            alt={el.label}
                            width={20}
                            height={20}
                        />
                        <span className="text-slate-400">{el.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
