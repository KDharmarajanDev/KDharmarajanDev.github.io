import * as PIXI from 'pixi.js'
import { Stage, Sprite } from '@inlet/react-pixi'
import DroneImage from './assets/DroneImage.png'

export default function TitleFeature(props) {
    const CANVAS_HEIGHT = 400;
    const CANVAS_WIDTH = 1790;

    return (
        <div id="title-feature">
            <Stage width={CANVAS_WIDTH} height={CANVAS_HEIGHT} options={{backgroundColor: 0x1aaabb8}}>
                <Sprite image={DroneImage} anchor={0.5} scale={[0.25, 0.25]} x={100} y={100}>

                </Sprite>
            </Stage>
        </div>);
}