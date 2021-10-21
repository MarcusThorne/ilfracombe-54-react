import styled from 'styled-components'

export const InfoWrap = styled.div`
    background-color: #131B23;
    color: white;
    text-align: center;
    padding: 2rem;
    margin-bottom: 2rem;

    @media(min-width: 768px){
        display: ${props => props.display};
        grid-template-columns: 1fr 1fr;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media(min-width: 1024px){
        display: flex;
        flex-direction: ${props => props.flexDirection};
    }
`

export const GridItem = styled.div`
    margin: 4rem 0;

    a {
        color: #D6A449;
    }

    h1 {
        font-size: ${props => props.itemTitle};
        margin-bottom: -0.5rem;
        font-weight: 500;

        span {
            color: #D6A449;
        }

        @media(min-width: 425px) {
            font-size:  ${props => props.responsiveItemTitle};
        }
    }

    p {
        font-size: 14px;
        max-width: 30rem;
        margin: 1rem auto;
    }

    img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid white;
    }

    &:last-child {
        grid-column: 1 / span 2;
    }

    @media(min-width: 768px){
        margin: 1rem 2rem;

        p {
            max-width: 25rem;
        }
    }
`

export const InfoTitle = styled.h1`
    width: 100%;
    background-color: #131B23;
    margin: 0;
    color: white;
    padding-top: 2rem;
    font-weight: 500;
    font-size: 38px;
    display: ${props => props.display};
    justify-content: center;

    span {
        color: #D6A449;
    }
`

InfoWrap.defaultProps = {
    display: "flex",
    flexDirection: "row"
}

InfoTitle.defaultProps = {
    display: "none"
}

GridItem.defaultProps = {
    itemTitle: "38px",
    responsiveItemTitle: "40px"
}
