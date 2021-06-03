import React from 'react'
import ReactDom from 'react-dom'
 
function UserList(){
  return (
    <User/>
  );
} 

const User = () =>{
  return (
    <article>
    <p>This is a User</p>
    <Image/>
  </article> );
}

const Image = () => (<img src="https://fundwiser.co/wp-content/uploads/2021/02/Elon_Musk-Rockets_behind-SpaceX.jpg" alt=""/>);
const  Title
// const Greeting = () => {
//   return React.createElement('h1',{},'hello world!!');
// };

ReactDom.render(<UserList />,document.getElementById('root'));