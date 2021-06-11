import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Loading from '../Components/Loading'
import Title from '../Components/Title'
import { CartoonsConsumer } from '../Context/CartoonsContext'

const CartoonVideoPage = ({ match }) => {
    const cartoonName = match.params.name
    const Eno = Number(match.params.episodeNo)
    const [episodeNo, setEpisodeNo] = useState(Eno)

    const reload = (episodeNo) => {
        setEpisodeNo(episodeNo)
    }

    useEffect(() => {
        window.onpopstate = () => {
            setEpisodeNo(match.params.episodeNo)
        }
    }, [match])

    return (
        <EpisodeWrapper>
            <CartoonsConsumer>
                {value => {
                    const { getCartoon, getEpisode, loading } = value
                    const cartoon = getCartoon(cartoonName)
                    const episode = getEpisode(cartoonName, episodeNo)

                    if (!episode) {
                        return <div className="error">
                            <h3>No Episode Found</h3>
                            <Link to='/cartoons' className="btn-secondary">Back to Seasons</Link>
                        </div>
                    }

                    const { episode: url, episodename: name, episodeNo: eno } = episode
                    const { totalEpisodes, courtesy } = cartoon

                    if (loading) {
                        return <Loading title={`${cartoonName} - ${name}`} />
                    }

                    return (
                        <EpisodeWrapper>
                            <div className="single-episode">
                                <section style={{ paddingTop: '1rem' }}>
                                    <Title title={cartoonName + " Episode " + eno} />
                                    <p>(Courtesy: {courtesy || "Youtube"})</p>
                                </section>
                                <div className="video-container">
                                    <ReactPlayer
                                        className="video-player"
                                        url={url}
                                        controls
                                        pip
                                        playing
                                        width={window.screen.width < 800 ? "80%" : "50%"}
                                        height="auto"
                                    />
                                </div>
                                <div className="episode-change">
                                    <Link
                                        to={'/cartoons/' + cartoonName + "/" + (parseInt(episodeNo) - 1)}
                                        className={parseInt(episodeNo) === 1 ? "episode-link disabled" : "episode-link"}
                                        onClick={() => reload(parseInt(episodeNo) - 1)}
                                        title="Previous episode"
                                    >
                                        <FaAngleDoubleLeft />
                                    </Link>
                                    <Link
                                        to={'/cartoons/' + cartoonName + "/" + (parseInt(episodeNo) + 1)}
                                        className={parseInt(episodeNo) === totalEpisodes ? "episode-link disabled" : "episode-link"}
                                        onClick={() => reload(parseInt(episodeNo) + 1)}
                                        title="Next episode"
                                    >
                                        <FaAngleDoubleRight />
                                    </Link>
                                </div>
                                <div className="btn-center">
                                    <Link to={'/cartoons/' + cartoonName} className="btn-secondary">Back to {cartoonName}</Link>
                                </div>
                            </div>
                        </EpisodeWrapper>
                    )
                }}
            </CartoonsConsumer>
        </EpisodeWrapper>
    )
}

const EpisodeWrapper = styled.div`
    .episode-change {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .episode-change>.episode-link {
        background: aqua;
        width: auto;
        margin: 3rem 1rem 0rem 1rem;
        letter-spacing: 2px;
        border-radius: 0;
        font-size: 2rem;
        padding: 0.5rem;
        color: black;
    }

    .episode-change>.episode-link:hover {
        background: blueviolet;
        letter-spacing: 2px;
        color: white;
    }

    .disabled {
        cursor: not-allowed;
        text-decoration: none;
        background: rgba(128, 128, 128, 0.5) !important;
        color: black !important;
        pointer-events: none;
    }

    @media (min-width: 812px) {
        .episode-change>.episode-link {
            margin: 1.5rem 1rem 0rem 1rem;
        }
    }

    .single-episode {
        margin: 2rem auto;
    }

    .video-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding-top: 56.25%;
    }

    .video-player {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media (min-width: 801px) {
        .video-container {
            padding-top: 40%;
        }
    }
`

export default CartoonVideoPage
