import React from 'react';
import { Layer, Line, Stage, Group } from 'react-konva';
import Block from './block';
import Flag from './flag';
import Valve from './gatevalve';
import Regulator from './regulator';
import Conteiner from './conteiner';
import Cistern from './cistern'

function Mainblock() {
    return(
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Block />
            <Flag />
            <Valve />
            <Regulator />
            <Conteiner />
            <Cistern />
          </Layer>
        </Stage>
    );
}

export default Mainblock;