import React from 'react';
import { Layer, Rect, Stage, Group } from 'react-konva';

class Conteiner extends React.Component{
    render(){
        return(
            <Group draggable={true}>
                <Rect x={50} y={100} width={200} height={100} fill={'green'} stroke={'#000000'} strokeWidth={1} cornerRadius={[25, 25, 25, 25]}></Rect>
                <Rect x={75} y={95} width={10} height={110} fill={'#696969'} stroke={'#000000'} strokeWidth={1} ></Rect>
            </Group>
        );
    }
}

export default Conteiner;