import React from 'react';
import axios from 'axios';

const TOKEN = `xgaiiLxJWu226Pgujogj33OfRua3k0QHnaJubKy3KYB1PQFZfI7Sm6z7RbVS`;
const getSportMonksData = (param) => axios.get(`https://soccer.sportmonks.com/api/v2.0/${param}?api_token=${TOKEN}`);

export default class Countries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            leagues: [],
        };
    }

    componentDidMount() {
        getSportMonksData(`leagues`).then(resp => {
            const leagues = resp.data.data.map(obj => <li key={obj.id}>{obj.name}</li>);
            this.setState({leagues: leagues});
        });

        getSportMonksData(`countries`).then(resp => {
            const countries = resp.data.data.map(obj => <li key={obj.id}>{obj.name}</li>);
            this.setState({countries: countries});
        });
    }

    render() {
        const leaguesCountries = this.state.countries;
        const leaguesItems = this.state.leagues;

        return (
            <div>
                <ul>
                    {leaguesCountries}
                </ul>
                <ul>
                    {leaguesItems}
                </ul>
            </div>
        );
    }
}
