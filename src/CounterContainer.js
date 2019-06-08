// CREATION d un CONTAINER POUR CONNECTE LE COMPOSANT AU STORE VIA LA FONCTION CONNECT
import React from "react";
import { connect } from "react-redux";

//Le principe de mapStateToProps est de passer les valeurs du state en props du composant. Leparamètre state aura  la valeur du state actuel du store

const mapStateToProps = state => ({
  counter: state // on donne au composant connecté la propriété counter
});
const CounterComponent = ({ counter, dispatch }) => (
  <div>
    <p>{counter}</p>
    <button onClick={() => dispatch({ type: 'ADD' })}>ADD</button>
    <button onClick={() => dispatch({ type: 'REMOVE' })}>REMOVE</button>
    <button onClick={() => dispatch({ type: 'ADD10' })}>ADD10</button>
    <button onClick={() => dispatch({ type: 'REMOVE10' })}>REMOVE10</button>
    <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
  </div>
);
export default connect(
    mapStateToProps)(CounterComponent);
