import {useGetProducts} from "../../api/useGetProducts.ts";
import {Pagination} from "../../components/pagination/Pagination.tsx";
import {useState} from "react";
import {Card} from "../../components/card/Card.tsx";
import './HomePage.css'

export function HomePage() {

    const { data, error, isLoading } = useGetProducts();
    const [page, setPage] = useState(1);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return "An error has occurred: " + error;
    }

    return (
        <div className="container">
            {/* Можно как отдельный компонент вытащить, много чего можно было идеально сделать, но задача затянется */}
            <div className="card-list">
                {data?.Search.map((item, id) => (
                    <Card key={item.Title + id} name={item.Title} year={item.Year} imageUrl={item.Poster} imdbId={item.imdbId} />
                ))}
            </div>
            <Pagination totalPages={data?.totalResults} currentPage={1} onPageChange={setPage} />
        </div>
    );
}
