import React, {Component} from "react";
import Die from './Die'
import './RollDice.css'

class RollDice extends Component{
    static defaultProps ={
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props){
        super(props)
        this.state = {die1: "one", die2:"one", rolling: false}
        this.roll = this.roll.bind(this);
    }
    roll(){
        //pick 2 new rolls
        const new1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const new2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        // set state
        this.setState({die1: new1, die2:new2, rolling:true})
        //update conditional
        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000)
    }
    render(){
        return(
            <div className="RollDice">
                <div className="container">
                    <Die face={this.state.die1} rolling={this.state.rolling} />
                    <Die face={this.state.die2} rolling={this.state.rolling} />
                </div>
                    <button onClick={this.roll} disabled={this.state.rolling}>
                        {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                    </button>
            </div>
        )
    }
}

export default RollDice;