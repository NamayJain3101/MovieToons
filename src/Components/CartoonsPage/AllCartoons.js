import React from 'react'
import { CartoonsConsumer } from '../../Context/CartoonsContext';
import Loading from '../Loading';
import CartoonList from './CartoonList';
import CartoonsFilter from './CartoonsFilter';

const AllCartoons = () => {
    return (
        <div>
            <CartoonsConsumer>
                {value => {
                    const { loading, sortedCartoons, cartoons } = value;
                    if (loading) {
                        return <Loading title="Seasons" />
                    }
                    return (
                        <React.Fragment>
                            <CartoonsFilter cartoons={cartoons} />
                            <CartoonList cartoons={sortedCartoons} />
                        </React.Fragment>
                    );
                }}
            </CartoonsConsumer>
        </div>
    )
}

export default AllCartoons
