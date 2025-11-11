"use client";

import { useState } from "react";

const currencyDummy = [
    {
        id: "1",
        label: "IDR",
    },
    {
        id: "2",
        label: "USD",
    },
    {
        id: "3",
        label: "BNB",
    },
    {
        id: "4",
        label: "BTC",
    },
    {
        id: "5",
        label: "ALTS",
    },
];

export default function FavoritesFe() {
    const [selectedCurrency, setSelectedCurrency] = useState<string>("1");

    return (
        <div className="flex flex-row gap-[35px] items-center">
            <h2>Favorit</h2>
            {currencyDummy.map((el) => (
                <span
                key={el.id}
                    className={`py-4 font-bold cursor-pointer ${
                        selectedCurrency === el.id
                            ? "text-[#D57C17] border-b-2 border-b-[#D57C17]"
                            : "currency"
                    } `}
                    onClick={() => setSelectedCurrency(el.id)}
                >
                    {el.label}
                </span>
            ))}
        </div>
    );
}
