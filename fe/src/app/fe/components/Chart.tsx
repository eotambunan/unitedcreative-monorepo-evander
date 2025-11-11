"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        id: "1",
        name: "TKO/IDR",
        value: "Rp 5,261.3",
        percentage: -3.82,
        volume: "2,258 IDR",
        detail: [
            { time: "1", value: 8 },
            { time: "2", value: 12 },
            { time: "3", value: 4 },
            { time: "4", value: 9 },
            { time: "5", value: 0 },
        ],
    },
    {
        id: "2",
        name: "TKO/IDR",
        value: "Rp 5,261.3",
        percentage: -3.82,
        volume: "2,258 IDR",
        detail: [
            { time: "1", value: 8 },
            { time: "2", value: 12 },
            { time: "3", value: 4 },
            { time: "4", value: 9 },
            { time: "5", value: 0 },
        ],
    },
    {
        id: "3",
        name: "TKO/IDR",
        value: "Rp 5,261.3",
        percentage: 3.82,
        volume: "2,258 IDR",
        detail: [
            { time: "1", value: 0 },
            { time: "2", value: 9 },
            { time: "3", value: 4 },
            { time: "4", value: 12 },
            { time: "5", value: 8 },
        ],
    },
    {
        id: "4",
        name: "TKO/IDR",
        value: "Rp 5,261.3",
        percentage: 3.82,
        volume: "2,258 IDR",
        detail: [
            { time: "1", value: 0 },
            { time: "2", value: 9 },
            { time: "3", value: 4 },
            { time: "4", value: 12 },
            { time: "5", value: 8 },
        ],
    },
];

export default function ChartFe() {
    return (
        <div className="lg:overflow-x-visible overflow-x-auto overflow-y-hidden">
            <div className="flex flex-row gap-12">
                {data.map((el) => (
                    <div
                        className="bg-[#1E1E2F]/50 p-4 h-[130px] flex flex-row w-[25vw] min-w-60"
                        key={el.id}
                    >
                        <div className="flex justify-between mb-2 basis-2/5">
                            <div className="lg:text-xl text-m">
                                <p>{el.name}</p>
                                <p>{el.value}</p>
                                <span
                                    className={` ${
                                        el.percentage < 0
                                            ? "text-red-500"
                                            : "text-green-500"
                                    }`}
                                >
                                    {el.percentage}%
                                </span>
                            </div>
                        </div>
                        <div className={"basis-3/5"}>
                            <ResponsiveContainer width="100%" height={80}>
                                <LineChart data={el.detail}>
                                    <Line
                                        type="linear"
                                        dataKey="value"
                                        stroke={
                                            el.percentage < 0 ? "red" : "green"
                                        }
                                        strokeWidth={2}
                                        dot={false}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                            <div className="text-xs text-[#959595] text-center">
                                Volume : {el.volume}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
