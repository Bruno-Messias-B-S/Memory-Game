import styles from 'styled-components';

export const Container = styles.div`
    width:100%;
    max-width:900px;
    height:450px;
    margin:auto;
    display:flex;
    padding:50px 0;

    @media (max-width:750px) {
        flex-direction:column;
    }
`;

export const Info = styles.div`
    display:flex;
    flex-direction:column;
    width:auto;

    @media (max-width:750px) {
        margin-bottom:50px;
        align-items:center;
    }
`;

export const LogoLink = styles.a`
    display:block;
`;

export const InfoArea = styles.div`
    width:100%;
    margin:10px 0;

    @media (max-width:750px) {
        display:flex;
        justify-content:space-around;
        text-align:center;
    }
`;

export const GridArea = styles.div`
    flex:1;
    display:flex;
    justify-content:flex-end;

    @media (max-width:750px) {
        justify-content:center;
        margin:0 20px;
    }
`;

export const Grid = styles.div`
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    gap:10px;

    @media (max-width: 424px) {
        grid-template-columns: repeat(2, 1fr);
        gap:10px 20px;
    }

    @media (min-width:425px) and (max-width:767px) {
        grid-template-columns: repeat(3, 1fr);
        gap:9px;
    }
`;