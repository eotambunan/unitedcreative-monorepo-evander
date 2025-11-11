"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YellowStar from "@/assets/yellowstar.svg";
import WhiteStar from "@/assets/whitestar.svg";
import {
    faSort,
    faSortUp,
    faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";

const TableHeaderDummy = [
    {
        id: "1",
        value: "pasangan",
        label: "Pasangan",
    },
    {
        id: "2",
        value: "harga",
        label: "Harga",
    },
    {
        id: "3",
        value: "perubahan",
        label: "Perubahan",
    },
    {
        id: "4",
        value: "tertinggi",
        label: "Tertinggi",
    },
    {
        id: "5",
        value: "kapital",
        label: "Kapital",
    },
    {
        id: "6",
        value: "volume",
        label: "Volume",
    },
];

const TableDataDummy = [
    {
        id: "1",
        pasangan: "BTC/DAI",
        harga: "98,832.93 / Rp 1,612,213,281.72",
        perubahan: 3.89,
        tertinggi: "102,451.34 / Rp 94,288.07",
        kapital: "Rp 31,953.008T",
        volume: "1.538M",
    },
    {
        id: "2",
        pasangan: "ETH/DAI",
        harga: "98,832.93 / Rp 1,612,213,281.72",
        perubahan: 3.89,
        tertinggi: "102,451.34 / Rp 94,288.07",
        kapital: "Rp 31,953.008T",
        volume: "1.538M",
    },
    {
        id: "3",
        pasangan: "XRP/ETH",
        harga: "98,832.93 / Rp 1,612,213,281.72",
        perubahan: -3.89,
        tertinggi: "102,451.34 / Rp 94,288.07",
        kapital: "Rp 31,953.008T",
        volume: "1.538M",
    },
    {
        id: "4",
        pasangan: "BTC/DAI",
        harga: "98,832.93 / Rp 1,612,213,281.72",
        perubahan: 3.89,
        tertinggi: "102,451.34 / Rp 94,288.07",
        kapital: "Rp 31,953.008T",
        volume: "1.538M",
    },
    {
        id: "5",
        pasangan: "BTC/DAI",
        harga: "98,832.93 / Rp 1,612,213,281.72",
        perubahan: 3.89,
        tertinggi: "102,451.34 / Rp 94,288.07",
        kapital: "Rp 31,953.008T",
        volume: "1.538M",
    },
];

type SortOrder = "asc" | "desc" | null;

export default function TableFe() {
    const [sortConfig, setSortConfig] = useState<{
        key: string | null;
        order: SortOrder;
    }>({
        key: null,
        order: null,
    });

    const [favorites, setFavorites] = useState<string[]>(["1"]);

    const handleSort = (key: string) => {
        setSortConfig((prev) => {
            if (prev.key !== key) {
                return { key, order: "asc" };
            }

            const nextOrder: SortOrder =
                prev.order === "asc"
                    ? "desc"
                    : prev.order === "desc"
                    ? null
                    : "asc";

            return { key: nextOrder ? key : null, order: nextOrder };
        });
    };

    const getSortedData = () => {
        if (!sortConfig.key || !sortConfig.order) return TableDataDummy;

        return [...TableDataDummy].sort((a, b) => {
            const aValue = a[sortConfig.key as keyof typeof a];
            const bValue = b[sortConfig.key as keyof typeof b];

            if (sortConfig.order === "asc") {
                return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
            } else {
                return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
            }
        });
    };

    const getSortIcon = (key: string) => {
        if (sortConfig.key !== key) {
            return faSort;
        }

        switch (sortConfig.order) {
            case "asc":
                return faSortUp;
            case "desc":
                return faSortDown;
            default:
                return faSort;
        }
    };

    const isIconActive = (key: string) => {
        return sortConfig.key === key && sortConfig.order !== null;
    };

    const sortedData = getSortedData();

    const handleFavorite = (id:string)=>{
        const isFavorited = favorites.find(x=>x===id)

        if(isFavorited){
            setFavorites(favorites.filter(x => x !== id))
        } else {
            setFavorites([...favorites, id])
        }
    }

    return (
        <div className="w-full">
            <div className="md:overflow-x-visible overflow-x-auto">
                <Table className="min-w-[800px] md:min-w-full whitespace-nowrap">
                    <TableHeader>
                        <TableRow>
                            {TableHeaderDummy.map((el) => (
                                <TableHead
                                    key={el.id}
                                    onClick={() => {
                                        handleSort(el.value);
                                    }}
                                    className="cursor-pointer text-right whitespace-nowrap"
                                >
                                    {" "}
                                    <div
                                        className={`flex items-center gap-2 ${
                                            el.value === "pasangan"
                                                ? "justify-start"
                                                : "justify-end"
                                        }`}
                                    >
                                        <span className="whitespace-nowrap">
                                            {el.label}
                                        </span>
                                        <FontAwesomeIcon
                                            icon={getSortIcon(el.value)}
                                            className={`w-4 h-4 shrink-0 ${
                                                isIconActive(el.value) &&
                                                "text-[#D57C17]"
                                            }`}
                                        />
                                    </div>
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sortedData.map((el) => (
                            <TableRow key={el.id}>
                                <TableCell className="flex flex-row gap-4 whitespace-nowrap">
                                    <Image
                                        src={
                                            favorites.find((x) => x === el.id)
                                                ? YellowStar
                                                : WhiteStar
                                        }
                                        alt="Logo"
                                        width={15}
                                        height={15}
                                        className="shrink-0"
                                        onClick={() =>
                                            handleFavorite(el.id)
                                        }
                                    />
                                    {el.pasangan}
                                </TableCell>
                                <TableCell className="text-right whitespace-nowrap">
                                    {el.harga}
                                </TableCell>
                                <TableCell
                                    className={`text-right whitespace-nowrap ${
                                        el.perubahan > 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {el.perubahan > 0 && "+"}
                                    {el.perubahan}%
                                </TableCell>
                                <TableCell className="text-right whitespace-nowrap">
                                    {el.tertinggi}
                                </TableCell>
                                <TableCell className="text-right whitespace-nowrap">
                                    {el.kapital}
                                </TableCell>
                                <TableCell className="text-right whitespace-nowrap">
                                    {el.volume}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
