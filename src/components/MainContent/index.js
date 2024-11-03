import React, {Component } from 'react';

class MainContent extends Component {
   
    constructor (props) {
        super(props)
        this.state = {
            isItReady: false,
        }
    }

    handleButtonClick = () => {
        console.log('Botón presionado')
        setTimeout( () => this.setState({isItReady: true}), 3000) 
        
    }
    
    render () {
        return (
            <main>
                <h2>Contenido Principal</h2>
                <button onClick={this.handleButtonClick}>Validate Profile</button>
                <p>{this.state.isItReady ? ' Datos Verificados Correctamente' : 'Datos no Verificados'}</p>
                
            </main>
        )
    }
}

export default MainContent; 