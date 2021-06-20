import { Stage, AppConsumer, Container } from '@inlet/react-pixi';
import React from 'react';
import Drone from './Drone';

export default function TitleFeature(props) {
    const CANVAS_HEIGHT = 400;
    const CANVAS_WIDTH = 1790;
    
    return (
        <div id="title-feature">
            <Stage width={CANVAS_WIDTH} height={CANVAS_HEIGHT} options={{backgroundColor: 0x1aaabb8}}>
                <Drone></Drone>
            </Stage>
        </div>);
}