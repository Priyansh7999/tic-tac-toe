import Square from "./Square";

export default function Board({ squares, onSquareClick }) {

    return (
        <div className="grid grid-cols-3 gap-2">
            {squares.map((sq, i) => (
                <Square
                    key={i}
                    value={sq}
                    onClick={() => onSquareClick(i)}
                />
            ))}
        </div>
    );
}