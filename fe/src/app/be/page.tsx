import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import BarChartBe from "./components/BarChart";
import HeaderBe from "./components/Header";
import SidebarBe from "./components/Sidebar";
import MainContentBe from "./components/MainContent";

export default function Be() {
    return (
        <div className="h-screen w-screen bg-black flex flex-col overflow-hidden">
            <HeaderBe />
            <div className="flex flex-row flex-1 overflow-hidden">
                <SidebarBe />
                <MainContentBe/>
            </div>
        </div>
    );
}
