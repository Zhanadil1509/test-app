import './Card.css';

interface Props {
    className?: string;
    name: string;
    year: string;
    imageUrl?: string;
    imdbId?: string;
    type?: string;
}

export const Card: React.FC<Props> = ({className, name, year, imageUrl, imdbId, type}) => {
    return (
        <div className="card">
            {imageUrl && (
                <div className="card-image">
                    <img src={imageUrl} alt={name}/>
                </div>
            )}
            <div className="card-body">
                <p className="card-title">{name}</p>
                <p className="card-title">{year}</p>
                <p className="card-title">{imdbId}</p>
                <p className="card-title">{type}</p>
            </div>
        </div>
    );
};