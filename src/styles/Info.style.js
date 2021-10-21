import styled from 'styled-components'

export const InfoWrap = styled.div`
    background-color: #131B23;
    color: white;
    text-align: center;
    padding: 2rem;

    @media(min-width: 768px){
        display: ${props => props.display};
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-items: center;
    }

    @media(min-width: 1024px){
        display: flex;
    }
`

export const GridItem = styled.div`
    margin: 4rem 0;

    h1 {
        font-size: 20px;
        margin-bottom: -0.5rem;
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

InfoWrap.defaultProps = {
    display: "flex"
}
