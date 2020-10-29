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
    }
    .owl-theme .owl-dots .owl-dot span {
        border: 1px solid green;
        width: 30px;
        height: 7px;        
        outline: none !important;
        margin: 0;
        background: white;
    }
    .owl-theme .owl-dots .owl-dot.active span, 
    .owl-theme .owl-dots .owl-dot:hover span {
        outline: none !important;
        background: green;
        border: none;
    }
    .owl-item {
        margin-right: 0;
        padding: 0 15px;
    }
    .item {
        box-shadow: 0px 2.5px 10px grey;
        border-radius: 2rem;
        width: 100% !important;
        margin: 1rem 0 !important;
        height: 30vh;
        overflow: hidden;
    }
    .item:hover {
        cursor: pointer;
    }
    .owl-dot {
        margin: 0 0.5rem;
    }
    .owl-theme .owl-dots {
        margin: 0 !important;
    }
    .item h3 {
        line-height: 1.5;
        text-transform: capitalize;
    }
    .item img {
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        transition: all 1s ease-in-out;
    }
    .item:hover img {
        transform: scale(1.1);
    }
    @media(min-width: 801px) {
        .item {
            height:40vh;
        }
    }
`

export default withRouter(ItemsCarousel)
