import {React, useCallback, createRef, Component} from 'react';
import { Stage, Graphics, Container } from '@inlet/react-pixi'

export default function FooterAnimation (props) {
    return (
    <Stage height={300} width={window.innerWidth} options={{ backgroundColor: 0x222629}}>
        <Tesselation height={300} width={window.innerWidth} spacing={60} xOffset={30} yOffset={30}/>
    </Stage>
    )
}

class PowerNode extends Component {

    constructor(props) {
        super(props);
        this.timerId = null;
        this.neighbors = [];
        this.state = {'transitionTimer': 0};
        this.isEmptyNode = true;
        this.targetNeighbor = null;
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({
            'transitionTimer': this.state.transitionTimer - 100 / 6.0
        });
        if (this.state.transitionTimer <= 0) {
            this.stopTransition();
        }
    }

    transitionToFull() {
        this.isEmptyNode = false;
        this.targetNeighbor = null;
        this.startTransition();
    }

    transitionToEmpty() {
        this.isEmptyNode = true;
        if (this.neighbors.length > 0) {
            this.targetNeighbor = this.neighbors[Math.floor(Math.random() * this.neighbors.length)];
            if (!this.targetNeighbor.current.isEmptyNode) {
                setTimeout(() => {
                    this.transitionToEmpty();
                }, 500);
                return;
            }
            this.targetNeighbor.current.transitionToFull();
        }
        this.startTransition();
    }

    startTransition() {
        this.setState({
            'transitionTimer': 1000
        });
        if (!this.timerId) {
            this.timerId = setInterval(this.update, 100 / 6.0);
        }
    }

    stopTransition() {
        clearInterval(this.timerId);
        this.timerId = null;
        if (!this.isEmptyNode) {
            setTimeout(() => {
                this.transitionToEmpty();
            }, Math.random() * 3000 + 1000);
        }
    }

    render() {
        return (
            <Container>
                <Graphics draw={(g) => {
                    g.clear();
                    const outerCircleRadius = 10;
                    const innerCircleRadius = 8;
                    let fillRadius = 0;
                    const duration = 1000;
                    if (this.state.transitionTimer > 0) {
                        if (!this.isEmptyNode) {
                            fillRadius = outerCircleRadius * (1 - this.state.transitionTimer / duration);
                        } else {
                            fillRadius = outerCircleRadius * (this.state.transitionTimer / duration);
                        }
                    } else if (!this.isEmptyNode) {
                        fillRadius = outerCircleRadius;
                    }
                    g.beginFill(0x86C232, 1);
                    g.drawCircle(this.props.x, this.props.y, outerCircleRadius);
                    g.endFill();
                    g.beginFill(0x222629, 1);
                    g.drawCircle(this.props.x, this.props.y, innerCircleRadius);
                    g.endFill();
                    g.beginFill(0x86C232, 1);
                    g.drawCircle(this.props.x, this.props.y, fillRadius);
                    g.endFill();
                }}/>
                {
                    this.state.transitionTimer > 0 && this.isEmptyNode && <PowerTransferBeam x={this.props.x} y={this.props.y} 
                                                                                            endX={this.targetNeighbor.current.props.x} endY={this.targetNeighbor.current.props.y}/>
                }
            </Container>
        )    
    }
}


function PowerTransferBeam (props) {
    const draw = useCallback(g => {
        g.clear();
        g.beginFill(0x86C232, 1);
        g.lineStyle(4, 0x86C232, 1);
        g.moveTo(props.x, props.y);
        g.lineTo(props.endX, props.endY);
        g.endFill();
    });
    return (
        <Graphics draw={draw}/>
    )
}

class Tesselation extends Component {

    constructor (props) {
        super(props);
        this.hexagons = [];
        this.powerNodeRefs = [];
        this.coordinateToIndex = new Map();
        this.root3 = Math.sqrt(3);
    }

    componentDidMount() {
        for (let nodeRef of this.powerNodeRefs) {
            const x = nodeRef.current.props.x;
            const y = nodeRef.current.props.y;
            let newNeighbor = null;
            newNeighbor = this.coordinateToIndex.get(JSON.stringify({
                x: x + this.props.spacing,
                y: y
            }));
            if (newNeighbor) {
                nodeRef.current.neighbors.push(this.powerNodeRefs[newNeighbor]);
            }
            newNeighbor = null;

            newNeighbor = this.coordinateToIndex.get(JSON.stringify({
                x: x - this.props.spacing,
                y: y
            }));
            if (newNeighbor) {
                nodeRef.current.neighbors.push(this.powerNodeRefs[newNeighbor]);
            }
            newNeighbor = null;

            const newXOffset = this.props.spacing / 2;
            const newYOffset = this.props.spacing * this.root3 / 2;
            newNeighbor = this.coordinateToIndex.get(JSON.stringify({
                x: x - newXOffset,
                y: y - newYOffset
            }));
            if (newNeighbor) {
                nodeRef.current.neighbors.push(this.powerNodeRefs[newNeighbor]);
            }
            newNeighbor = null;

            newNeighbor = this.coordinateToIndex.get(JSON.stringify({
                x: x + newXOffset,
                y: y - newYOffset
            }));
            if (newNeighbor) {
                nodeRef.current.neighbors.push(this.powerNodeRefs[newNeighbor]);
            }
            newNeighbor = null;

            newNeighbor = this.coordinateToIndex.get(JSON.stringify({
                x: x - newXOffset,
                y: y + newYOffset
            }));
            if (newNeighbor) {
                nodeRef.current.neighbors.push(this.powerNodeRefs[newNeighbor]);
            }
            newNeighbor = null;

            newNeighbor = this.coordinateToIndex.get(JSON.stringify({
                x: x + newXOffset,
                y: y + newYOffset
            }));
            if (newNeighbor) {
                nodeRef.current.neighbors.push(this.powerNodeRefs[newNeighbor]);
            }
            newNeighbor = null;

            if (Math.random() < 0.3) {
                nodeRef.current.transitionToFull();
            }
        }
    }

    render () {
        for (let j = 0; j < this.root3 * this.props.height / this.props.spacing - 3; j++) {
            if (j % 2 == 0) {
                for (let i = 0; i < this.props.width / this.props.spacing; i++) {
                    const x = i * this.props.spacing + this.props.xOffset;
                    const y = j * this.props.spacing * this.root3 / 2 + this.props.yOffset;
                    this.powerNodeRefs.push(createRef());
                    this.hexagons.push(<PowerNode key={"X: " + x.toString() + " Y: " + y.toString()} x={x} y={y} ref={this.powerNodeRefs[this.powerNodeRefs.length - 1]}/>);
                    this.coordinateToIndex.set(JSON.stringify({
                        x: x,
                        y: y
                    }), this.powerNodeRefs.length - 1);
                }
            } else {
                for (let i = 0; i < this.props.width / this.props.spacing - 1; i++) {
                    const x = i * this.props.spacing + this.props.spacing / 2 + this.props.xOffset;
                    const y = j * this.props.spacing * this.root3 / 2 + this.props.yOffset;
                    this.powerNodeRefs.push(createRef());
                    this.hexagons.push(<PowerNode key={"X: " + x.toString() + " Y: " + y.toString()} x={x} y={y} ref={this.powerNodeRefs[this.powerNodeRefs.length - 1]}/>);
                    this.coordinateToIndex.set(JSON.stringify({
                        x: x,
                        y: y
                    }), this.powerNodeRefs.length - 1);
                }
            }
        }
        return (
            <Container>
                {this.hexagons}
            </Container>
        );
    }
}