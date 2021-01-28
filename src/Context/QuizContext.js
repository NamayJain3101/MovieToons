import React, { Component } from 'react'
import { Client } from '../contentful'

const QuizzesContext = React.createContext();

class QuizzesProvider extends Component {

    state = {
        quizzes: [],
        featuredQuiz: [],
        sortedQuiz: [],
        loading: true,

        quizName: '',
        age: '',
        category: 'all'
    }

    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "movieToonsQuiz"
            });
            let quizzes = this.formatData(response.items);
            console.log(quizzes)
            let featuredQuiz = quizzes.filter(quiz => quiz.featured === true)
            this.setState({
                quizzes,
                featuredQuiz,
                sortedQuizzes: quizzes,
                loading: false
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getData();
    }

    formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let image = item.fields.image && item.fields.image.fields.file.url;
            let quiz = { ...item.fields, image, id };
            return quiz;
        })
        return tempItems;
    }

    handleChange = event => {
        event.preventDefault();
        const target = event.target;
        const name = event.target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        }, this.filterQuiz);
    }

    filterQuiz = () => {
        let {
            quizzes, quizName, age, category
        } = this.state;
        let tempQuizzes = [...quizzes];

        if (quizName.length > 0) {
            tempQuizzes = tempQuizzes.filter(item => {
                let tempSearch = quizName.toLowerCase();
                let tempTitle = item.name.toLowerCase().slice(0, quizName.length);
                return tempTitle === tempSearch;
            })
        }

        if (age) {
            tempQuizzes = tempQuizzes.filter(item => age >= item.minAge)
        }

        if (category !== 'all') {
            tempQuizzes = tempQuizzes.filter(item => item.category === category)
        }

        this.setState({
            sortedQuizzes: tempQuizzes
        })
    }

    getQuiz = (quizName) => {
        let tempQuizzes = [...this.state.quizzes];
        const quiz = tempQuizzes.find((quiz) => {
            return quiz.name === quizName;
        });
        return quiz;
    }

    render() {
        return (
            <QuizzesContext.Provider value={{
                ...this.state,
                handleChange: this.handleChange,
                getQuiz: this.getQuiz
            }}>
                {this.props.children}
            </QuizzesContext.Provider>
        )
    }
}

const QuizzesConsumer = QuizzesContext.Consumer;

export { QuizzesProvider, QuizzesConsumer, QuizzesContext };


