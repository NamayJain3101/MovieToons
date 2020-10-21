import React from 'react'
import styled from 'styled-components'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ItemsCarouselData } from '../../Context/ItemsCarouselData'
import { withRouter } from 'react-router-dom';

const ItemsCarousel = ({ history, match }) => {
    return (
        <ItemscarouselWrapper>
            <OwlCarousel className={'owl-theme'}
                loop={true}
                margin={10}
                nav={false}
                dots={true}
                autoplay={true}
                autoplayTimeout={3000}
                autoplaySpeed={1000}
                dotsSpeed={1000}
                items={9}
                responsive={{
                    0: {
                        items: 1,
                        stagePadding: 0
                    },
                    500: {
                        items: 1,
                        stagePadding: 100
                    },
                    900: {
                        items: 1,
                        stagePadding: 200
                    }
                }}
            >
                {ItemsCarouselData.map(item => {
                    return (
                        <div key={item.id}
                            className={'item'}
                            onClick={() => history.push(`${match.url}${item.link}`)}
                        >
                            <img src={item.image} alt={item.text} />
                        </div>
                    )
                })}
            </OwlCarousel>
        </ItemscarouselWrapper>
    )
}

const ItemscarouselWrapper = styled.div`
    /* padding: 2rem; */
    .owl-theme {
        padding: 0;
        text-align: justify;
        /* width: 90vw;
        margin: auto; */
    }
    .owl-theme .owl-dots .owl-dot span {
        border: 1px solid blue;
        width: 30px;
        height: 5px;        
        outline: none !important;
        margin: 0;
        background: white;
    }
    .owl-theme .owl-dots .owl-dot.active span, 
    .owl-theme .owl-dots .owl-dot:hover span {
        outline: none !important;
        background: blue;
        border: none;
    }
    .owl-item {
        margin-right: 0;
    }
    .item {
        box-shadow: 0px 2.5px 10px grey;
        border-radius: 2rem;
        width: calc(100% - 10px) !important;
        margin: 1rem 0 !important;
    }

    .owl-dot {
        margin: 0 0.5rem;
    }
    .item {
        height:50vh;
    }
    .item h3 {
        line-height: 1.5;
        text-transform: capitalize;
    }
    .item img {
        width: 100%;
        height: 100%;
        border-radius: 2rem;
    }
    @media(min-width: 701px) {
        .item {
            height:50vh;
            /* width: 80%;
            margin: 0 auto; */
        }
    }
`

export default withRouter(ItemsCarousel)
