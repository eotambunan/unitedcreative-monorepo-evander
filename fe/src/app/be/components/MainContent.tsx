"use client";

import Image from "next/image";
import Chip from "@/assets/Chip.svg";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import BarChartBe from "./BarChart";
import { useGetBeMasterDataQuery } from "@/generated/graphql";
import { toRupiah } from "@/utils/currency";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

const FilterMonth = [
    { value: "0", label: "All" },
    { value: "1", label: "Januari" },
    { value: "2", label: "Februari" },
    { value: "3", label: "Maret" },
    { value: "4", label: "April" },
    { value: "5", label: "Mei" },
    { value: "6", label: "Juni" },
    { value: "7", label: "Juli" },
    { value: "8", label: "Agustus" },
    { value: "9", label: "September" },
    { value: "10", label: "Oktober" },
    { value: "11", label: "November" },
    { value: "12", label: "Desember" },
];

const FilterYear = [
    { value: "0", label: "All" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
];

export default function MainContentBe() {
    const [selectedMonth, setSelectedMonth] = useState<string>(FilterMonth[0].value);
    const [selectedYear, setSelectedYear] = useState<string>(FilterYear[0].value);

    const {
        data: {
            findRegistrationSummary = null,
            findDepositSummary = null,
        } = {},
        loading: beMasterDataLoading,
        error: beMasterDataError,
    } = useGetBeMasterDataQuery({
        variables: {
            filterMonth: selectedMonth,
            filterYear: selectedYear,
        },
    });

    return (
        <>
            {beMasterDataLoading && <Spinner />}
            <div className="flex-1 overflow-auto p-6 text-white">
                <div className="flex flex-row justify-between items-center border-b border-b-[#121B2E] pb-12">
                    <div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                            Welcome John Doe
                        </h1>
                        <h3 className="text-s mt-4">How are you today...</h3>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <span>Filter By: </span>
                        <Select
                            onValueChange={setSelectedMonth}
                            value={selectedMonth}
                            defaultValue={FilterMonth[0].value}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Date" />
                            </SelectTrigger>
                            <SelectContent>
                                {FilterMonth.map((el) => (
                                    <SelectItem value={el.value} key={el.value}>
                                        {el.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select
                            onValueChange={setSelectedYear}
                            value={selectedYear}
                            defaultValue={FilterYear[0].value}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                                {FilterYear.map((el) => (
                                    <SelectItem value={el.value} key={el.value}>
                                        {el.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="w-full h-[40vh] mt-20 flex flex-row">
                    <div className="bg-[#050911] size-1/2 h-full flex justify-center items-center">
                        <BarChartBe />
                    </div>

                    <div className="grid grid-cols-2 gap-4 size-1/2 h-full p-4">
                        <div className="bg-[#050911] rounded-lg shadow p-6">
                            <h3 className="text-gray-500 text-sm font-medium flex flex-row gap-2">
                                <Image
                                    src={Chip}
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                />
                                <span className="text-2xl">Total Deposit</span>
                            </h3>
                            <p className="text-2xl font-bold mt-2">
                                IDR{" "}
                                {toRupiah(findDepositSummary?.totalValue || 0)}
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                {findDepositSummary?.count} Deposit(s)
                            </p>
                        </div>

                        <div className="bg-[#050911] rounded-lg shadow p-6">
                            <h3 className="text-gray-500 text-sm font-medium flex flex-row gap-2">
                                <Image
                                    src={Chip}
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                />
                                <span className="text-2xl">Total Withdraw</span>
                            </h3>
                            <p className="text-2xl font-bold mt-2">IDR 0</p>
                            <p className="text-gray-400 text-sm mt-1">
                                Withdraw(s)
                            </p>
                        </div>

                        <div className="bg-[#050911] rounded-lg shadow p-6">
                            <h3 className="text-gray-500 text-sm font-medium flex flex-row gap-2">
                                <Image
                                    src={Chip}
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                />
                                <span className="text-2xl">
                                    Total Verified KYC
                                </span>
                            </h3>
                            <p className="text-2xl font-bold mt-2">IDR 0</p>
                            <p className="text-gray-400 text-sm mt-1">
                                Verified
                            </p>
                        </div>

                        <div className="bg-[#050911] rounded-lg shadow p-6">
                            <h3 className="text-gray-500 text-sm font-medium flex flex-row gap-2">
                                <Image
                                    src={Chip}
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                />
                                <span className="text-2xl">
                                    Total Registration
                                </span>
                            </h3>
                            <p className="text-2xl font-bold mt-2">
                                IDR{" "}
                                {toRupiah(
                                    findRegistrationSummary?.totalValue || 0
                                )}
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                {findRegistrationSummary?.count} Registered
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
