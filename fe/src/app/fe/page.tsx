import HeaderFe from "./components/Header";
import TableFe from "./components/Table";
import FavoritesFe from "./components/Favorites";
import ChartFe from "./components/Chart";

export default function Fe() {
    return (
        <div className="lg:px-20 sm:px-8 px-4">
            <HeaderFe />
            <div className="mb-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Pasar</h1>
                <h3 className="text-xs sm:text-sm mt-4">
                    Harga Kripto dalam Rupiah Hari ini di Market Terbesar
                    Indonesia
                </h3>
            </div>
            <ChartFe />
            <FavoritesFe />
            <TableFe />
        </div>
    );
}
