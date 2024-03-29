import React, { Component } from 'react'
import { Client } from '../contentful'

const CartoonsContext = React.createContext();

class CartoonsProvider extends Component {

    state = {
        cartoons: [],
        featuredCartoons: [],
        sortedCartoons: [],
        loading: true,

        cartoon: '',
        age: 'all',
    }

    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "movieToonsCartoons"
            });
            let cartoons = this.formatData(response.items);
            let featuredCartoons = cartoons.filter(cartoon => cartoon.featured === true)
            this.setState({
                cartoons,
                featuredCartoons,
                sortedCartoons: cartoons,
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
            let season = { ...item.fields, image, id };
            return season;
        })
        return tempItems;
    }

    getCartoon = (cartoonName) => {
        let tempcartoons = [...this.state.cartoons];
        const cartoon = tempcartoons.find((cartoon) => {
            return cartoon.name === cartoonName;
        });
        return cartoon;
    }

    getEpisode = (cartoonName, episodeNo) => {
        let tempcartoons = [...this.state.cartoons];
        const cartoon = tempcartoons.find((cartoon) => {
            return cartoon.name === cartoonName;
        });
        if (cartoon) {
            const { episodes } = cartoon
            const episode = episodes.find(item => item.episodeNo === episodeNo.toString())
            return episode
        }
    }

    handleChange = event => {
        event.preventDefault();
        const target = event.target;
        const name = event.target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        }, this.filterCartoons);
    }

    filterCartoons = () => {
        let {
            cartoons, cartoon, age
        } = this.state;
        let tempCartoons = [...cartoons];

        if (cartoon.length > 0) {
            tempCartoons = tempCartoons.filter(item => {
                let tempSearch = cartoon.toLowerCase();
                let tempTitle = item.name.toLowerCase().slice(0, cartoon.length);
                return tempTitle === tempSearch;
            })
        }

        if (age !== "all") {
            const minAge = age.split("-")[0]
            const maxAge = age.split("-")[1]
            tempCartoons = tempCartoons.filter((item) => {
                return ((maxAge >= item.maxAge) && (minAge <= item.minAge))
            })
        }

        this.setState({
            sortedCartoons: tempCartoons
        })
    }

    render() {
        return (
            <CartoonsContext.Provider value={{
                ...this.state,
                getCartoon: this.getCartoon,
                getEpisode: this.getEpisode,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </CartoonsContext.Provider>
        )
    }
}

const CartoonsConsumer = CartoonsContext.Consumer;

export { CartoonsProvider, CartoonsConsumer, CartoonsContext };


