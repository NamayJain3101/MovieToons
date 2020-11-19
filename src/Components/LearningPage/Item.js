import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Item = ({ learning }) => {

    const { name, video } = learning;

    return (
        <ItemWrapper>
            <article className="cartoon">
                <div className="img-container">
                    <video src={video} autoPlay muted />
                    <div className="sno-top">
                        <h6>{name}</h6>
                    </div>
                    <Link to={`/learning/${name}`} className="btn-secondary cartoon-link">
                        View
                    </Link>
                </div>
            </article>
        </ItemWrapper>
    )
}

const ItemWrapper = styled.article`
    /* width: 200px; */
    .cartoon {
        box-shadow: 0px 0px 30px green;
        transition: var(--mainTransition);
        margin: 2rem 1rem;
        /* width: 200px; */
    }

    .cartoon:hover {
        box-shadow: 0px 0px 30px red;
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
        background: aqua;
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

    .cartoon-link {
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

    .img-container:hover .cartoon-link {
        transform: translate(-50%, -50%) scale(1);
    }

    .cartoon-info {
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