import React from 'react';
import FlagQuestion, { QuestionStates } from './FlagQuestion';

class CountryGame extends React.Component {
    constructor(props){
        super(props);

        this.state = {countries: [], correctOption: undefined, options: [], questionState: undefined};
    }

    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(countries => {
                const correctOption = Math.floor(Math.random() * countries.length);
                const options = this.getOptions(correctOption, countries);
                this.setState({
                    countries,
                    correctOption,
                    options
                })
            })
    }

    onGuess(answer) {
        const {correctOption} = this.state;
        let questionState = answer === correctOption ?
            QuestionStates.ANSWER_CORRECT : QuestionStates.ANSWER_WRONG;

        this.setState({questionState});
    }

    nextQuestion() {
        const {countries} = this.state;
        const correctOption = Math.floor(Math.random() * countries.length);
        const options = this.getOptions(correctOption, countries);
        this.setState({
            countries,
            correctOption,
            options,
            questionState: QuestionStates.QUESTION
        });
    }

    getOptions(correctOption, countries){
        let options = [correctOption];
        while(options.length < 4){
            let opt = Math.floor(Math.random() * countries.length);
            if(options.indexOf(opt) === -1){
                options.push(opt);
            }
        }
        return options.sort(() => Math.random() - 0.5);
    }

    render(){
        let {
            countries, correctOption, options, questionState
        } = this.state;

        let output = <div>Loading...</div>;

        if(correctOption !== undefined){
            const {flag, name } = countries[correctOption];
            console.log(countries[2].name)
            let opts = options.map(opt => {
                return {
                    id: opt,
                    name: countries[opt].name
                };
            });
            output = (
                <FlagQuestion
                    answerText={name}
                    onGuess={this.onGuess}
                    onNext={this.nextQuestion}
                    options={opts}
                    questionState={questionState}
                    flag={flag} />
            );
        }

        return(
            <div style={{marginTop: '15px'}}>{output}</div>
        )
    }
}

export default CountryGame;