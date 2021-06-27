import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Title from '../Title'
import Item from './Item'
import Pagination from "react-js-pagination";

const LearningVideoList = ({ learning }) => {
    const [pageNumber, setPageNumber] = useState(1)
    const pages = Math.ceil(learning.length / 15)
    const [videos, setVideos] = useState(learning)

    const getPageVideos = () => {
        const lIndex = (pageNumber - 1) * 15;
        const rIndex = pageNumber * 15;
        setVideos(learning.filter((video, index) => index >= lIndex && index < rIndex))
    }

    useEffect(() => {
        setPageNumber(1)
        getPageVideos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [learning])

    useEffect(() => {
        getPageVideos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber])

    if (learning.length === 0) {
        return (
            <div className="empty-search">
                <h3>No Video matched your search parameters !!!</h3>
            </div>
        )
    }
    return (
        <LearningVideoListWrapper>
            <section className="learningVideoList">
                <section>
                    <Title title="Learning Videos" />
                </section>
                <div className="learningVideoList-center">
                    {
                        videos.map(item => {
                            return <Item key={item.id} learning={item} />
                        })
                    }
                </div>
            </section>
            {pages > 1 && (
                <Pagination
                    hideDisabled
                    hideFirstLastPages
                    pageRangeDisplayed={4}
                    activePage={pageNumber}
                    itemsCountPerPage={15}
                    totalItemsCount={learning.length}
                    onChange={(page) => setPageNumber(page)}
                    itemClass='page-item'
                    linkClass='page-link'
                    prevPageText='<'
                    nextPageText='>'
                    firstPageText='<<'
                    lastPageText='>>'
                />
            )}
        </LearningVideoListWrapper>
    )
}

const LearningVideoListWrapper = styled.div`
    .learningVideoList {
        padding: 5rem 0;
        padding-top: 1rem;
    }

    .learningVideoList section {
        margin-bottom: 2rem;
    }

    .learningVideoList-center {
        width: 80vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 30px;
    }

    @media screen and (min-width: 776px) {
        .learningVideoList-center {
            width: 90vw;
            grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
        }
    }

    @media screen and (min-width: 992px) {
        .learningVideoList-center {
            width: 95vw;
            max-width: 1170px;
        }
    }
    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .page-item {
        width: 38px !important;
        height: 38px !important;
        margin: 0 7px;
        margin-bottom: 10px;
    }
    .page-link {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .page-item, .page-link {
        border-radius: 50% !important;
        color: navy;
        border-color: navy;
    }
    .page-item.active .page-link {
        background-color: navy;
        border-color: navy;
        color: white;
    }
    .page-link:focus {
        box-shadow: 0 0 0 0.2rem rgba(0, 23, 128, 0.3);
    }
    .page-link:hover {
        background-color: rgba(0, 23, 128, 0.3);
    }
`

export default LearningVideoList
