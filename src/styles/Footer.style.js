import styled from 'styled-components'

export const FooterWrap = styled.div`
    text-align: center;
    padding-top: 2rem;

    h1 {
        font-size: 16px;
        font-weight: 600;
    }

    img {
        width: 5rem;
        margin: auto;
    }

    a {
        text-decoration: none;
        color: rgb(100, 100, 100);
        text-decoration: underline;
    }
`

export const Copyright = styled.div`
    font-size: 12px;
    color: rgb(100, 100, 100);
    padding-top: 2rem;

    p {
        margin: 0;
    }
`

export const Links = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 360px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media(min-width: 768px) {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: start;
    }
`

export const LinkSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    @media(min-width: 768px) {
        margin: 1rem 2rem;

        &:first-child {
            margin-right: 3rem;
        }
    }

    @media(min-width: 1024px) {
        &:first-child {
            margin-right: 10rem;
        }
    }
`
