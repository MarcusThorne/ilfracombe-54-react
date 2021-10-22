import styled from 'styled-components'

export const VideoWrap = styled.div`
    overflow: hidden;
    height: 90vh;
    background-color: #131B23;
    position: relative;
    margin-top: 4rem;
    z-index: 0;

    iframe {
        height: 30rem;
        width: 54rem;
        opacity: 0.7;
        transform: translate(-50%, -25%);
        position: absolute;
        left: 50%;
        top: 0%;


        @media(min-width: 620px) {
            height: 40rem;
            width: 72rem;
        }

        @media(min-width: 768px) {
            height: 78rem;
            width: 108rem;
        }

        @media(min-width: 1440px) {
            height: 80rem;
        }
    }
`

export const VideoContent = styled.div`
    /* background-color: rgba(0,0,0,1); */
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(0,0,0,0.5);
    height: 100%;
    width: 100%;

    h1 {
        font-weight: 600;
        font-size: 40px;
        margin-top: 6rem;
        padding: 0 2rem;

        @media(min-width: 425px) {
            font-size: 50px;
        }
    }

    span {
        color: #D6A449;
    }

    img {
        width: 2.5rem;
        transition: 0.5s;

        @media(min-width: 425px) {
           width: 3rem;
        }

        &:hover {
            transform: scale(1.5);
        }
    }

    h5 {
        font-size: 14px;
        margin-top: 8rem;
        font-weight: 400;
        max-width: 600px;
        padding: 2rem;


        @media(min-width: 425px) {
            margin-top: 3rem;
        }

        @media(min-width: 620px) {
            margin-top: -10rem;
        }
    }
`

export const IconContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    margin-top: -2rem;

    @media(min-width: 620px) {
        margin-top: -6rem;
    }

    p {
        font-size: 10px;

        @media(min-width: 425px) {
            font-size: 14px
        }

        max-width: 200px;
    }
`

export const Icon = styled.div`
    align-items: center;
    text-align: center;
    border-right: ${props => props.border};
    padding: 1rem;
`
