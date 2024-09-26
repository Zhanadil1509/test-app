import './Pagination.css';

interface Props {
    className?: string;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({className, currentPage, totalPages, onPageChange}) => {

    const getPages = (): (number | string)[] => {
        const pages: (number | string)[] = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...');
            }

            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(totalPages - 1, currentPage + 1);

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push('...');
            }

            pages.push(totalPages);
        }

        return pages;
    };

    const handleClick = (page: number | string) => {
        if (typeof page === 'number' && page !== currentPage && page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="pagination">
            <button
                className="pagination__button"
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}>
                Prev
            </button>

            {getPages().map((page, index) => (
                <button
                    key={index}
                    className={`pagination__button ${currentPage === page ? 'active' : ''}`}
                    onClick={() => handleClick(page)}
                    disabled={page === '...'}>
                    {page}
                </button>
            ))}

            <button
                className="pagination__button"
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};