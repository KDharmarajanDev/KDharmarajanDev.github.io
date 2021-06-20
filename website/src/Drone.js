import React from 'react';
import { DroneController } from './DroneController';
import DroneImage from './assets/DroneImage.png';
import { Sprite, useTick } from '@inlet/react-pixi';

export default function Drone(props) {
    const [x, setX] = React.useState(100);
    const [y, setY] = React.useState(100);
    const [theta, setTheta] = React.useState(0);

    const droneController = new DroneController();

    useTick(delta => {
        droneController.updatePosition(delta, setX, setY, setTheta);
    });

    return (
        <Sprite image={DroneImage} anchor={0.5} scale={[0.25, 0.25]} x={x} y={y} rotation={theta}>
        </Sprite>
    )
}