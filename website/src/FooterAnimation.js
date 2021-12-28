import {React, useCallback, createRef, Component} from 'react';
import { Stage, Graphics, Container } from '@inlet/react-pixi'

export default function FooterAnimation (props) {
    return (
    <Stage height={250} width={window.innerWidth} options={{ backgroundColor: 0x222629}}>
        <Tesselation height={250} width={window.innerWidth} spacing={60}/>
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
        this.currTransitionTimeout = null;
        this.emptyTransitionTimeout = null;
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
        this.emptyTransitionTimeout = null;
        if (this.neighbors.length > 0) {
            this.targetNeighbor = this.neighbors[Math.floor(Math.random() * this.neighbors.length)];
            if (!this.targetNeighbor.current.isEmptyNode) {
                this.emptyTransitionTimeout = setTimeout(() => {
                    this.transitionToEmpty();
                }, 500);
                return;
            }
            this.targetNeighbor.current.transitionToFull();
        }
        this.startTransition();
    }

    stopRunning() {
        this.isEmptyNode = true;
        this.setState({
            'transitionTimer': -1
        });
        this.stopTransition();
        if (this.currTransitionTimeout) {
            clearTimeout(this.currTransitionTimeout);
        }
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
            this.currTransitionTimeout = setTimeout(() => {
                this.transitionToEmpty();
            }, Math.random() * 3000 + 1000);
        }
    }

    componentWillUnmount () {
        if (this.currTransitionTimeout) {
            clearTimeout(this.currTransitionTimeout);
        }
        if (this.emptyTransitionTimeout) {
            clearTimeout(this.emptyTransitionTimeout);
        }
        clearInterval(this.timerId);
    }

    render() {
        return (
            <Container>
                <Graphics interactive={true} draw={(g) => {
                    g.clear();
                    const outerCircleRadius = this.props.outerCircleRadius;
                    const innerCircleRadius = this.props.innerCircleRadius;
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
                }} pointerdown={(event) => {
                        if (this.isEmptyNode) {
                            this.transitionToFull();
                        } else {
                            this.stopRunning();
                        }
                    }
                }/>
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
        this.state = {
            height: props.height,
            width: props.width
        }
        this.resetVars();
        this.root3 = Math.sqrt(3);
        window.addEventListener("resize", this.debounce(this.handleResize, 500));
    }

    resetVars () {
        this.hexagons = [];
        this.powerNodeRefs = [];
        this.coordinateToIndex = new Map();
    }

    componentDidMount() {
        this.createGraphAndStartPower();
    }

    componentDidUpdate() {
        this.createGraphAndStartPower();
    }

    createGraphAndStartPower () {
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

    debounce(fn, ms) {
        let timer;
        return _ => {
            clearTimeout(timer);
            timer = setTimeout(_ => {
                timer = null;
                fn.apply(this, arguments);
            }, ms);
        };
    }

    handleResize() {
        this.setState({
            width: window.innerWidth
        });
    }      

    render () {
        this.resetVars();
        const maxVerticesHeight = Math.floor((this.state.height - 15) / (this.root3 / 2 * this.props.spacing));
        const maxVerticesShiftedWidth = Math.floor((this.state.width - 15) / this.props.spacing);
        const maxVerticesWidth = maxVerticesShiftedWidth - 1;
        const yOffset = (this.state.height - maxVerticesHeight * this.root3 / 2 * this.props.spacing) / 2;
        const xOffset = (this.state.width - maxVerticesShiftedWidth * this.props.spacing) / 2 + this.props.spacing;
        for (let j = 0; j < maxVerticesHeight; j++) {
            if (j % 2 == 0) {
                for (let i = 0; i < maxVerticesWidth; i++) {
                    const x = i * this.props.spacing + xOffset;
                    const y = j * this.props.spacing * this.root3 / 2 + yOffset;
                    this.powerNodeRefs.push(createRef());
                    this.hexagons.push(<PowerNode key={"X: " + x.toString() + " Y: " + y.toString()} x={x} y={y} ref={this.powerNodeRefs[this.powerNodeRefs.length - 1]}
                                            outerCircleRadius={10} innerCircleRadius={8}/>);
                    this.coordinateToIndex.set(JSON.stringify({
                        x: x,
                        y: y
                    }), this.powerNodeRefs.length - 1);
                }
            } else {
                for (let i = 0; i < maxVerticesShiftedWidth; i++) {
                    const x = i * this.props.spacing - this.props.spacing / 2 + xOffset;
                    const y = j * this.props.spacing * this.root3 / 2 + yOffset;
                    this.powerNodeRefs.push(createRef());
                    this.hexagons.push(<PowerNode key={"X: " + x.toString() + " Y: " + y.toString()} x={x} y={y} ref={this.powerNodeRefs[this.powerNodeRefs.length - 1]}
                                            outerCircleRadius={10} innerCircleRadius={8}/>);
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