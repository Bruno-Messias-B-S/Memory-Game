import styles from 'styled-components';

export const Container = styles.div`
    margin:25px 0;
    margin-top:-9px;

    @media (max-width:750px) {

    }
`;

export const Time = styles.div`
    font-size:18px;
    font-weight:bold;
    color:#101C40;

    @media (max-width:750px) {
        text-align:center;
    }
`;

export const Movements = styles.div`
    font-size:18px;
    font-weight:bold;
    color:#101C40;

    @media (max-width:750px) {
        text-align:center;
    }
`;

export const RecordTitle = styles.div`
    font-size:15px;
    color: #6A7D8B;
    margin-bottom:10px;

    @media (max-width:750px) {
        text-align:center;
        margin-bottom:3px;
    }
`;

export const Partidas = styles.div`
    font-size:15px;
    margin-top:10px;

    @media (max-width:750px) {
        text-align:center;
    }
`;