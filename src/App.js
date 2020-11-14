import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends React.Component
{
  state = 
  {
    response: [],
    estado: null
  };

  handlerFind(f)
  {
    var find = f.target.value;
    this.setState({value : find});
  }  

  handlerButton = () => 
  {
    var buscar = this.state.value; 
    if(buscar==null)
    { 
    axios.get( 'https://api.openbrewerydb.org/breweries')
        .then( dato => {
        console.log(dato.data); 
          
        
        this.setState({
          response: dato.data,
          estado: true
        }) 
        console.log(this.state)
    });
    } 

  }


  render () 
  {

    if(this.state.estado !== true )
    {
    return (
      <div className="App">
      <header className="App-header">
      <div>
        <div>
            <p>Buscar cervecería por nombre</p>
            <input type="text" name="name" placeholder="[a-z]" onChange={this.handlerFind.bind(this)}/>
            <input type="button" value="Buscar" onClick={this.handlerButton.bind(this)}/>
        </div>
        <div>
          <p>Nombre: {this.state.response.name}</p>
          <p>Tipo de cerveceria: {this.state.response.brewery_type}</p>
          <p>Direccion: {this.state.response.street}</p>
          <p>Ciudad: {this.state.response.city}</p>
          <p>Pais: {this.state.response.country}</p>
          <p>Telefono: {this.state.response.phone}</p>
          <p>Pagina Web: {this.state.response.website_url}</p>
        </div>
      </div>
      </header>
    </div>  
    );
    }
  }  

}

export default App;
