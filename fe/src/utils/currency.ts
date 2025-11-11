export function toRupiah(value: number): string {
    const rupiah = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    })
        .formatToParts(value)
        .filter((part) => part.type === "integer" || part.type === "group")
        .map((part) => part.value)
        .join("");

        return rupiah
}
