interface Props {
    className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};