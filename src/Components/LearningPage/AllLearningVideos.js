import React from 'react'
import { LearningConsumer } from '../../Context/LearningContext';
import Loading from '../Loading';
import LearningVideosFilter from './LearningVideoFilter';
import LearningVideoList from './LearningVideoList';

const AllLearningVideos = () => {
    return (
        <div>
            <LearningConsumer>
                {value => {
                    const { loading, sortedLearning, learningVideos } = value;
                    if (loading) {
                        return <Loading title="Seasons" />
                    }
                    return (
                        <React.Fragment>
                            <LearningVideosFilter learning={learningVideos} />
                            <LearningVideoList learning={sortedLearning} />
                        </React.Fragment>
                    );
                }}
            </LearningConsumer>
        </div>
    )
}

export default AllLearningVideos
