const Card = ({ hintValue }) => {
    return (
        <div className="card">
            {hintValue || 'N/A'}
        </div>
    );
};

export default Card;