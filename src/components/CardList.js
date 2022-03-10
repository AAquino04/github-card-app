import Card from "./Card";

function CardList({ data }) {
    return (
        <ul className="c-cards">
            {data.map(profile => {
                return (
                    <li className="c-cards__item">
                        <Card {...profile} />
                    </li>
                )
            })}
        </ul>
    );
}

export default CardList;