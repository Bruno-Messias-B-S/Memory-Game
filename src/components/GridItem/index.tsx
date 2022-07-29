import { GridItemType } from '../../types/GridItemType';
import { items } from '../../data/items';
import b7svg from "../../svgs/b7.svg"
import * as C from './styles';

type Props = {
    item: GridItemType,
    onClick: () => void;
}

export const GridItem = ( {item, onClick}: Props) => {
    return (
        <C.Container showBackground={item.permanent || item.shown} onClick={onClick}>
            {item.permanent === false && item.shown === false &&
                <C.Icon opacity={.1} src={b7svg} alt="" />
            }
            {( item.permanent || item.shown ) && item.item !== null &&
                <C.Icon src={items[item.item].icon} alt="" />
            }
        </C.Container>
    )
}