import React from 'react';
import { Layer, Rect, Line, Stage, Group } from 'react-konva';

class Valve extends React.Component{
    render(){
        return(
            //Задживка
            <Group draggable={true}>
                <Rect x={250} y={230} width={100} height={20} fill={'green'} stroke={'#000000'} strokeWidth={1} />
                <Rect x={295} y={300} width={10} height={-50} fill={'green'} stroke={'#000000'} strokeWidth={1} />
                <Line points={[300, 300, 350, 325, 350, 275]} closed={true} fill={'green'} stroke={'#000000'} strokeWidth={1}></Line>
                <Line points={[300, 300, 250, 275, 250, 325]} closed={true} fill={'green'} stroke={'#000000'} strokeWidth={1}></Line>
            </Group>
        );
    }
}

export default Valve;