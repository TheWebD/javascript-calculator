import React from "react"

class JsCalculator extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            outputScreen: "",
            displayTotal: "",
            number: ""
        }
    }
    
    nineCtrl(){      
        this.setState({
            outputScreen: this.state.outputScreen + 9,
            displayTotal: "",
            number: this.state.number + "9"
        })
    }
    eightCtrl(){
        this.setState({
            outputScreen: this.state.outputScreen + 8,
            displayTotal: "",
            number: this.state.number + "8"
        })
    }
    sevenCtrl(){
        this.setState({
            outputScreen: this.state.outputScreen + 7,
            displayTotal: "",
            number: this.state.number + "7"
        })
    }
    sixCtrl(){
        this.setState({
            outputScreen: this.state.outputScreen + 6,
            displayTotal: "",
            number: this.state.number + "6"
        })
    }
    fiveCtrl(){
        this.setState({
            outputScreen: this.state.outputScreen + 5,
            displayTotal: "",
            number: this.state.number + "5"
        })
    }
    fourCtrl(){
        this.setState({
            outputScreen: this.state.outputScreen + 4,
            displayTotal: "",
            number: this.state.number + "4"
        })
    }
    threeCtrl(){
        this.setState({
            outputScreen: this.state.outputScreen + 3,
            displayTotal: "",
            number: this.state.number + "3"
        })
    }
    twoCtrl(){
        this.setState({
            outputScreen: this.state.outputScreen + 2,
            displayTotal: "",
            number: this.state.number + "2"
        })
    }
    oneCtrl(){
        this.setState({
            outputScreen: this.state.outputScreen + 1,
            displayTotal: "",
            number: this.state.number + "1"
        })
    }
    zeroCtrl(){
        this.setState({
            outputScreen: this.state.outputScreen + 0,
            displayTotal: "",
            number: this.state.number + "0"
        })
    }
    clearCtrl(){
        this.setState({
            outputScreen: "",
            displayTotal: "",
            number: ""
        })
    }
    multiplyCtrl(){
        let strToArr = this.state.outputScreen.slice('')
        let toStr = this.state.outputScreen

        this.state.outputScreen === "*" || this.state.outputScreen === "+" || this.state.outputScreen === "/"
        || this.state.outputScreen === "-"  
        ?
        this.setState({
            outputScreen: "*",
            displayTotal: "X"
        })
        :
            strToArr[toStr.length - 1] === "*" 
            ?
            this.setState({
                outputScreen: this.state.outputScreen,
                displayTotal: "X"
            })
            :
            this.setState({
                outputScreen: this.state.outputScreen + "*",
                displayTotal: "X",
                number: ""
            })
    }
    divideCtrl(){
        let strToArr = this.state.outputScreen.slice('')
        let toStr = this.state.outputScreen
        this.state.outputScreen === "/" || this.state.outputScreen === "+" || this.state.outputScreen === "-"
        || this.state.outputScreen === "*" 
         ?
        this.setState({
            outputScreen: "/",
            displayTotal: "/"
        })
        :
        strToArr[toStr.length - 1] === "/" 
            ?
            this.setState({
                outputScreen: this.state.outputScreen,
                displayTotal: "/"
            })
            :
            this.setState({
                outputScreen: this.state.outputScreen + "/",
                displayTotal: "/",
                number: ""
            })
    }
    addCtrl(){
        let strToArr = this.state.outputScreen.slice('')
        let toStr = this.state.outputScreen
        this.state.outputScreen === "+" || this.state.outputScreen === "-" || this.state.outputScreen === "/"
        || this.state.outputScreen === "*"  
        ?
        this.setState({
            outputScreen: "+",
            displayTotal: "+"
        })
        :
         strToArr[toStr.length - 1] === "+" 
            ?
            this.setState({
                outputScreen: this.state.outputScreen,
                displayTotal: "+"
            })
            :
            this.setState({
                outputScreen: this.state.outputScreen + "+",
                displayTotal: "+",
                number: ""
            })
    }
    subtractCtrl(){
        let strToArr = this.state.outputScreen.slice('')
        let toStr = this.state.outputScreen
        this.state.outputScreen === "-" || this.state.outputScreen === "+" || this.state.outputScreen === "/"
        || this.state.outputScreen === "*" 
        ?
        this.setState({
            outputScreen: "-",
            displayTotal: "-"
        })
        :
        strToArr[toStr.length - 1] === "-" 
            ?
            this.setState({
                outputScreen: this.state.outputScreen,
                displayTotal: "-"
            })
            :
            this.setState({
                outputScreen: this.state.outputScreen + "-",
                displayTotal: "-",
                number: ""
            })
        
    }
    decimalCtrl(){
       let strToArr = this.state.outputScreen.slice('')
        let toStr = this.state.outputScreen
        this.state.outputScreen === "-" || this.state.outputScreen === "+" || this.state.outputScreen === "/"
        || this.state.outputScreen === "*" || this.state.outputScreen === "." 
        ?
        this.setState({
            outputScreen: "."
        })
        :
        strToArr[toStr.length - 1] === "." 
            ?
                this.state.outputScreen === "" 
                ?
                this.setState({
                    outputScreen: this.state.outputScreen
                })
                :
                this.setState({
                    outputScreen: this.state.outputScreen
                })
            :
            this.state.outputScreen === ""
                ?
                this.setState({
                    outputScreen: this.state.outputScreen + "0.",
                    number: this.state.number + "0."
                })
                :
                this.setState({
                    outputScreen: this.state.outputScreen + ".",
                    number: this.state.number + "."
                })
    }
    equalsCtrl(){
        function addbits(s) {
            let result = eval(s)
            return result
          }
        this.state.outputScreen === "" && this.state.displayTotal === "" ?
        this.setState({
            outputScreen: "MAN=MAN",
            displayTotal: "MAN"
        })
        :
          this.setState({
            displayTotal: addbits(this.state.outputScreen),
            outputScreen: this.state.outputScreen + "=" + addbits(this.state.outputScreen)
          })
    }
    render(){
        return(
            <div>
               <div className="jsCalculator-outerbody">
                 <div className="jsCalculator">
                    <div className="header-display">
                        <h4 style={{
                            height: this.state.outputScreen >= 18 ? "auto" : "1rem"
                        }}>
                            {this.state.outputScreen}
                        </h4>
                        <h2>
                            {
                            this.state.displayTotal === "" 
                            ? 
                            <span>{this.state.outputScreen.length >= 18 
                                ? 
                                "DIGIT LIMIT MET" 
                                :
                                this.state.outputScreen === "" 
                                    ? 
                                    0 
                                    :
                                    this.state.number}
                            </span> 
                            :
                            <span>{this.state.displayTotal}</span>
                        } 
                        </h2>
                    </div>
                    <div className="calculator-buttons">
                        <div onClick={this.clearCtrl.bind(this)} id="clear" className="clear">AC</div>
                        <div onClick={this.divideCtrl.bind(this)} id="divide" className="divide">/</div>
                        <div onClick={this.multiplyCtrl.bind(this)} id="multiply" className="multiply">X</div>
                        <div onClick={this.subtractCtrl.bind(this)} id="subtract" className="subtract">-</div>
                        <div onClick={this.addCtrl.bind(this)} id="add" className="add">+</div>
                        <div onClick={this.nineCtrl.bind(this)} id="nine" className="nine">9</div>
                        <div onClick={this.eightCtrl.bind(this)} id="eight" className="eight">8</div>
                        <div onClick={this.sevenCtrl.bind(this)} id="seven" className="seven">7</div>
                        <div onClick={this.sixCtrl.bind(this)} id="six" className="six">6</div>
                        <div onClick={this.fiveCtrl.bind(this)} id="five" className="five">5</div>
                        <div onClick={this.fourCtrl.bind(this)} id="four" className="four">4</div>
                        <div onClick={this.threeCtrl.bind(this)} id="three" className="three">3</div>
                        <div onClick={this.twoCtrl.bind(this)} id="two" className="two">2</div>
                        <div onClick={this.oneCtrl.bind(this)} id="one" className="one">1</div>
                        <div onClick={this.zeroCtrl.bind(this)} id="zero" className="zero">0</div>
                        <div onClick={this.equalsCtrl.bind(this)} id="equals" className="equals">=</div>
                        <div onClick={this.decimalCtrl.bind(this)} id="decimal" className="decimal">.</div>
                    </div>
                </div>
                <div className="redesign-recoded">
                        <h3>Re-designed and Re-coded by <br />Kent Miciano</h3>
                </div>
               </div>
            </div>
        )
    }
}

export default JsCalculator