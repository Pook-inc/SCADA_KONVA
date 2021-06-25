import React from 'react';
import { Layer, Line, Stage, Group } from 'react-konva';

class Flag extends React.Component{
    render(){
        return(
            <Group draggable>
                <Line 
                    points={[90, 50, 0, 0, 0, 100]}
                    stroke="black" strokeWidth="2"
                    fill="green"
                    closed
                />
                <Line 
                    points={[0, 175, 0, 0]}
                    stroke="black" strokeWidth="2"
                />
            </Group>
        );
    }
}

export default Flag;