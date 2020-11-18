import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Loading from '../Components/Loading'
import Title from '../Components/Title'
import { CartoonsConsumer } from '../Context/CartoonsContext'

const CartoonsEpisodesPage = ({ match }) => {
    const cartoonName = match.params.name
    return (
        <CartoonsWrapper>
            <CartoonsConsumer>
                {value => {
                    const { getCartoon, loading } = value
                    const cartoon = getCartoon(cartoonName)

                    if (!cartoon) {
                        return <div className="error">
                            <h3>No Season Found</h3>
                            <Link to='/cartoons' className="btn-secondary">Back to Cartoons</Link>
                        </div>
                    }
                    if (loading) {
                        return <Loading title={cartoon.name} />
                    }

                    const { name, episodes } = cartoon
                    return (
                        <React.Fragment>
                            <section style={{ paddingTop: '1rem' }}>
                                <Title title={name} />
                            </section>
                            <React.Fragment>
                                {episodes ? episodes.map((item, index) => {
                                    return (
                                        <div className="episode-container" key={index} >
                                            <Link to={'/cartoons/' + name + "/" + item.episodeNo} className="episode-link">
                                                <span className="Eno">
                                                    {item.episodeNo}
                                                </span>&nbsp;&nbsp;
                                                            <span className="Ename">
                                                    {item.episodeName}
                                                </span>
                                            </Link>
                                        </div>
                                    )
                                }) : (
                                        <div className="error">
                                            <h3>No Episodes Found</h3>
                                        </div>
                                    )
                                }
                            </React.Fragment>
                            <div className="btn-center">
                                <Link to='/cartoons' className="btn-secondary">Back to Cartoons</Link>
                            </div>
                        </React.Fragment>
                    )
                }}
            </CartoonsConsumer>
        </CartoonsWrapper>
    )
}

const CartoonsWrapper = styled.div`
    .episode-container {
        width: 40vw;
        margin: 1.4rem auto;
        text-align: center;
        outline: none;
        display: flex;
        background: rgba(238, 130, 238, 0.3);
        align-items: center;
        justify-content: center;
    }

    .episode-link {
        text-decoration: none;
        width: 100%;
        border: 1px solid rgb(144, 220, 144);
        padding: 0.5rem 1rem;
        text-align: left;
        display: flex;
        align-items: center;
        font-size: 0.9em;
    }

    .Eno {
        color: black;
        font-size: 1.3em;
        border: 1.5px solid black;
        border-radius: 50%;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
        text-align: right;
        padding: 3px 7px;
        letter-spacing: 0px;
        margin-right: 10px;
    }

    .Ename {
        color: black;
        font-size: 1.3em;
        letter-spacing: 2px;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    @media (max-width: 812px) {
        .episode-container {
            width: 60vw;
        }
        .episode-link {
            font-size: 0.9em;
            padding: 0.5rem 1.4rem;
        }
    }

    @media (min-width: 813px) and (max-width: 1100px) {
        .episode-container {
            width: 60vw;
        }
    }

    @media (max-width: 600px) {
        .episode-container {
            width: 80vw;
        }
    }

    .episode-link:hover,
    .episode-link:focus {
        background: rgba(238, 130, 238, 0.8);
    }
`

export default CartoonsEpisodesPage
