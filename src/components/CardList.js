import Card from "./Card";

function CardList({ profiles }) {
    return (
        <ul className="c-cards">
            {profiles.map(profile => {
                return (
                    <li className="c-cards__item">
                        <Card key={profile.id} {...profile} />
                    </li>
                )
            })}
        </ul>
    );
}

export default CardList;