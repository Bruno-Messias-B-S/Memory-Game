import styles from 'styled-components';

type ContainerProps = {
    showBackground: boolean;
}

export const Container = styles.div<ContainerProps>`
    background-color: ${props => props.showBackground ? '#1550FF' : '#E2E3E3'};
    height:130px;
    width:130px;
    border-radius:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
`;

type IconProps = {
    opacity?: number;
}

export const Icon = styles.img<IconProps>`
    width:40px;
    height:40px;
    opacity: ${props => props.opacity ? props.opacity : 1};
`;