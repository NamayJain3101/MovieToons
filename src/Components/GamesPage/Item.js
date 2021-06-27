import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Item = ({ game }) => {
    return (
        <ItemWrapper>
            <article className="game">
                <div className="img-container">
                    <img src={game.image} alt={game.name} className='img-fluid' />
                    <div className="sno-top">
                        <h6>{game.name}</h6>
                    </div>
                    <Link to={`${game.link}`} className="btn-secondary game-link">
                        Play
                    </Link>
                </div>
            </article>
        </ItemWrapper>
    )
}

const ItemWrapper = styled.article`
    width: 270px;
    margin: 1rem;
    .game {
        box-shadow: 0px 0px 30px green;
        transition: var(--mainTransition);
        margin: 2rem 1rem;
    }

    .game:hover {
        box-shadow: 0px 0px 30px navy;
    }

    .img-container {
        position: relative;
    }

    .img-container video {
        width: 100%;
        display: block;
        transition: var(--mainTransition);
    }

    .sno-top {
        position: absolute;
        top: -2rem;
        left: 50%;
        transform: translateX(-50%);
        background: cyan;
        color: black;
        padding: 0.6rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        width: 100%;
        font-size: 0.5rem;
        text-align: center;
        transition: var(--mainTransition);
    }

    .sno-top h6 {
        margin-bottom: 0;
        font-size: 1rem;
        font-weight: 500;
    }

    .game-link {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: scale(0);
        transition: all 0.3s linear;
    }

    .img-container:hover {
        background: rgba(255, 255, 0, 0.4);
    }

    .img-container:hover img {
        opacity: 0.3;
    }

    .img-container:hover .sno-top {
        opacity: 0;
    }

    .img-container:hover .game-link {
        transform: translate(-50%, -50%) scale(1);
    }

    .game-info {
        background: lime;
        color: black;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
        padding: 0.5rem;
        text-align: center;
        font-weight: 600;
        letter-spacing: var(--mainSpacing);
    }
`

export default Item