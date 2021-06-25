import React from 'react';
import { Line, Ellipse, Stage, Group } from 'react-konva';

class Cistern extends React.Component{
    render(){
        return(
            <Group draggable={true}>
                <Ellipse x={450} y={430} radiusX={125} radiusY={25} fill={'#ffffff'} stroke={'#000000'} strokeWidth={1}></Ellipse>
                <Group>
                    <Line points={[325, 430, 325, 550]} closed='true' stroke={'#000000'} strokeWidth={1}  fill='white'></Line>
                    <Line points={[575, 430, 575, 550]} stroke={'#000000'} strokeWidth={1}></Line>
                    <Line points={[325, 550, 575, 550]} stroke={'#000000'} strokeWidth={1}  ></Line>
                </Group>
            </Group> 
        )
    }
}

export default Cistern;