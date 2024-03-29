import React, { Component } from 'react'
import { Client } from '../contentful'

const LearningContext = React.createContext();

class LearningProvider extends Component {

    state = {
        learningVideos: [],
        featuredLearning: [],
        sortedLearning: [],
        loading: true,

        name: '',
        age: 'all',
        language: 'all',
        category: 'all',
    }

    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "movieToonsLearning"
            });
            let learningVideos = this.formatData(response.items);
            let featuredLearning = learningVideos.filter(learning => learning.featured === true)
            this.setState({
                learningVideos,
                featuredLearning,
                sortedLearning: learningVideos,
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
            let image = item.fields && item.fields.image && item.fields.image.fields && item.fields.image.fields.file && item.fields.image.fields.file.url
            let learningVideo = { ...item.fields, id, imageUrl: image };
            return learningVideo;
        })
        return tempItems;
    }

    getVideo = (videoName) => {
        const tempVideos = [...this.state.learningVideos]
        const tempVideo = tempVideos.find(video => video.name === videoName)
        return tempVideo
    }

    handleChange = event => {
        event.preventDefault();
        const target = event.target;
        const name = event.target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        }, this.filterVideos);
    }

    filterVideos = () => {
        let {
            learningVideos, name, age, language, category
        } = this.state;
        let tempVideos = [...learningVideos];

        if (name.length > 0) {
            tempVideos = tempVideos.filter(item => {
                let tempSearch = name.toLowerCase();
                let tempTitle = item.name.toLowerCase().slice(0, name.length);
                return tempTitle === tempSearch;
            })
        }

        if (age !== "all") {
            const minAge = age.split("-")[0]
            const maxAge = age.split("-")[1]
            tempVideos = tempVideos.filter((item) => {
                return ((maxAge >= item.maxAge) && (minAge <= item.minAge))
            })
        }

        if (language !== 'all') {
            tempVideos = tempVideos.filter(item => item.language === language)
        }

        if (category !== 'all') {
            tempVideos = tempVideos.filter(item => item.category.toLowerCase() === category.toLowerCase())
        }

        this.setState({
            sortedLearning: tempVideos
        })
    }

    render() {
        return (
            <LearningContext.Provider value={{
                ...this.state,
                getVideo: this.getVideo,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </LearningContext.Provider>
        )
    }
}

const LearningConsumer = LearningContext.Consumer;

export { LearningProvider, LearningConsumer, LearningContext };


