import React , { Component } from 'react';
class Listandkey extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         data: 
         [
            {
               component: 'Order Online',
               id: 1.
            },
				
            {
               component: 'Pay at Store',
               id: 2.
            },
				
            {
               component: 'CashOnDelivery',
               id: 3.
            }
         ]
      }

   }

   render() {
      return (
         <div>
            <div>
               {this.state.data.map((dynamicComponent, i) => <Content 
                  key = {i} componentData = {dynamicComponent}/>)}
            </div>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            {this.props.componentData.id} <b>{this.props.componentData.component}</b>    

         </div>
      );
   }
}

export default Listandkey;