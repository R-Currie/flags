import React from 'react';

class CountryGame extends React.Component {
    constructor(props){
        super(props);

        this.state = {countries: [], correctOption: undefined, options: [], questionState: undefined};
    }

    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(countries => {
                const correctOption = Math.floor(Math.random * countries.length);
                const options = this.getOptions(correctOption, countries);
                this.setState({
                    countries,
                    correctOption,
                    options
                })
            })
    }

    getOptions(correctOption, countries){
        let options = [correctOption];
        while(options.length < 4){
            let opt = Math.floor(Math.random * countries.length);
            if(options.indexOf(opt) === -1){
                options.push(opt);
            }
        }
        return options;
    }

    render(){
        return(
            <div>Country Game</div>
        )
    }
}

export default CountryGame;