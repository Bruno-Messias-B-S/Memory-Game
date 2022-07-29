import * as C from './styles';

type Props = {
    rTime: string;
    rMoves: number;
    counter: number;
}

export const Record = ( {rTime, rMoves, counter}: Props ) => {
    return (
        <C.Container>
            <C.RecordTitle>Recorde</C.RecordTitle>
            <C.Time>
                <div>Tempo: {rTime}</div>
            </C.Time>
            <C.Movements>
                <div>Movimentos: {rMoves}</div>
            </C.Movements>
            <C.Partidas>Partidas: {counter}</C.Partidas>
        </C.Container>
    )
}