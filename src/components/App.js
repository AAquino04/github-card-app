import React from "react";
import CardList from "./CardList";

class App extends React.Component {
    testData = [
        { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
        { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
        { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
    ];

    render() {
        return (
            <>
                <header className="c-header">
                    <h1 className="c-header__title">{this.props.title}</h1>
                </header>

                <main className="c-main">
                    <CardList data={this.testData} />
                </main>
            </>
        )
    }
}

export default App;
