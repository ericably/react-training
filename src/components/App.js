import React from 'react';
import '../App.css';
import Client from './Client';
import ClientForm from './ClientForm';

class App extends React.Component {
    clientInput = React.createRef();

    state = {
        clients: [
            {id: 1, nom: "ABLY eric "},
            {id: 2, nom: "Patrick chauve"},
            {id: 3, nom: "Honoré Biran"},
            {id: 4, nom: "Peter steve"}
        ],
    }

    handleDelete = (id) => {
        const clients = [...this.state.clients];
        const index = clients.findIndex(client =>client.id === id)

        clients.splice(index, 1);
        this.setState({clients});
    }

    handleAdd = (client) => {
        const clients = [...this.state.clients];
        clients.push(client)

        this.setState({clients});
    }

    render() {
        const title = "Liste des clients";
        return (
            <div className="App">
                <h1>{title}</h1>
                <div>
                    <ul>
                        {this.state.clients.map(client =>(
                            <Client details={client} onDelete={this.handleDelete} />
                        ))}
                    </ul>
                    <ClientForm onClientAdd={this.handleAdd} />
                </div>
            </div>
        );
    }
}

export default App;
