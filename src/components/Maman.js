import { Component } from "react";
import Toto from "./Toto";
class Maman extends Component{

    state = {
        messageMaman: null,
        messageToto: null

    }

    ordreMaman = () => {
        this.setState({
            messageMaman: 'Va ranger ta chambre'
        })

    }

    reponseToto = () =>{
        this.setState({
            messageToto: "D'accod maman"
        })
        
    }


    render(){
        return(

            <div>
                <h1>Maman</h1>
                <button onClick={this.ordreMaman}>Ordre de la mére</button>
                <p>{this.state.messageMaman}</p>
                <hr/>
                <Toto name='Toto' reponseToto={this.reponseToto} leState={this.state}/>
            </div>
            
        )
    }
}

export default Maman;