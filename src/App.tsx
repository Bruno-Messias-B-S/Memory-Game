import { useEffect, useState } from 'react'
import { Button } from './components/Button'
import { InfoItem } from './components/InfoItem'
import { GridItemType } from './types/GridItemType'
import { GridItem } from './components/GridItem'
import { items } from './data/items'
import { formatTime } from './helpers/formatTime'
import { Record } from './components/Record'
import logoImage from './assets/devmemory_logo.png'
import RestartIcon from './svgs/restart.svg'
import * as C from './App.styles'

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);
  const [recTime, setRecTime] = useState<number>(0);
  const [recMoves, setRecMoves] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);

  useEffect( () => resetAndCreateGrid(), []);

  useEffect( () => {
    const timer = setInterval(() => {
      if(playing) {
        setTime(time + 1);
      }
    }, 1000);
    return () => clearInterval(timer)
  }, [playing, time]);

  useEffect( () => {
    if (shownCount === 2) {
      let opened = gridItems.filter(item => item.shown === true);
      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          let tmpGrid = [...gridItems];
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanent = true;
              tmpGrid[i].shown = false;
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0)
        } else {
          setTimeout( () => {
            let tmpGrid = [...gridItems];
            for (let i in tmpGrid) {
              tmpGrid[i].shown = false;
            }
            setGridItems(tmpGrid);
            setShownCount(0)
          }, 1000);
        }

        setMoves(moves => moves + 1)
      }
    }
  }, [shownCount, gridItems])

  useEffect( () => {
    if (moves > 0 && gridItems.every(item => item.permanent === true)) {
      setPlaying(false);
      setCounter(counter + 1 / 2)
      if ( counter === 0 ) {
        setRecTime(time)
        setRecMoves(moves)
      }
      if ( counter > 0 && time && moves < recTime && recMoves ) {
        setRecTime(time)
        setRecMoves(moves)
      }
    }
  }, [moves, gridItems])

  const resetAndCreateGrid = () => {
    setTime(0);
    setMoves(0);
    setShownCount(0);

    let tmpGrid: GridItemType[] = [];
    for (let i = 0; i < items.length * 2; i++) {
      tmpGrid.push({
        item: null,
        shown: false,
        permanent: false,
      });
    }

    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tmpGrid[pos].item = i;
      }
    }

    setGridItems(tmpGrid);

    setPlaying(true)
  }

  const handleItemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItems];

      if (tmpGrid[index].permanent === false && tmpGrid[index].shown === false) {
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }

      setGridItems(tmpGrid)
    }
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width="200" alt=""/>
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value={formatTime(time)}/>
          <InfoItem label="Movimentos" value={moves.toString()}/>
        </C.InfoArea>
        <Record rTime={formatTime(recTime)} rMoves={recMoves} counter={counter}/>

        <Button label='Reiniciar' icon={RestartIcon} onClick={resetAndCreateGrid}/>
      </C.Info>
      <C.GridArea>
        <C.Grid>
          {gridItems.map( (item, index) => (
            <GridItem key={index} item={item} onClick={() => handleItemClick(index)}/>
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  )
}

export default App;