import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Loading from '../Components/Loading'
import Title from '../Components/Title'
import { LearningConsumer } from '../Context/LearningContext'

const LearningVideoPage = ({ match }) => {
    const learningVideoName = match.params.name

    return (
        <EpisodeWrapper>
            <LearningConsumer>
                {value => {
                    const { getVideo, loading } = value
                    const learningVideo = getVideo(learningVideoName)

                    if (!learningVideo) {
                        return <div className="error">
                            <h3>No Video Found</h3>
                            <Link to='/learning' className="btn-secondary">Back to Seasons</Link>
                        </div>
                    }

                    const { video, courtesy } = learningVideo

                    if (loading) {
                        return <Loading title={`Loading ${learningVideoName}`} />
                    }

                    return (
                        <EpisodeWrapper>
                            <div className="single-episode">
                                <section style={{ paddingTop: '1rem' }}>
                                    <Title title={learningVideoName} />
                                    <p>(Courtesy: {courtesy || "Youtube"})</p>
                                </section>
                                <div className="video-container">
                                    <ReactPlayer
                                        className="video-player"
                                        url={video}
                                        controls
                                        pip
                                        playing
                                        width={window.screen.width < 800 ? "80%" : "50%"}
                                        height="350px"
                                    />
                                </div>
                                <div className="btn-center">
                                    <Link to={'/learning'} className="btn-secondary">Back to Videos</Link>
                                </div>
                            </div>
                        </EpisodeWrapper>
                    )
                }}
            </LearningConsumer>
        </EpisodeWrapper>
    )
}

const EpisodeWrapper = styled.div`
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

export default LearningVideoPage
