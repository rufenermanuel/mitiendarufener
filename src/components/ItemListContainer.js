import React from 'react'
import { ItemConunt } from './ItemConunt'

export const ItemListContainer = (props) => {
  return (
    <><h3>ItemListContainer</h3>
     <p style={styles.greet}>{props.greeting}</p> 
     {/* Al modificar el prop cantidad a cero se inhabilitan los botones sumar y agregar al carrito */}
     <ItemConunt cantidad={5} initial={1}/>
    </>

  )
}
const styles = {
    greet: {
      
      padding: 20,
      color:'yellow'
  
    }}