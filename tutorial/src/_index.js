import React from "react";
import * as ReactDOM from "react-dom";

// CSS
import './index.css';

// stateless fucntiona component
// always return JSX I mean alwas return somehtiung

// JSX Rules
//  return a single element
// div / section / article or Fragment
//  use camelCase for html attribute
// className instead of class
// close every element
// formatting

// afte return either the opening tag or ( opening bracket

// Nested Components, React Tools


function BookList() {
  return( 
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>);
}

const Book = () => {
  return( 
  <article className="book">
    <Image />
    <Title />
    <Author />
  </article>)
};


const Title = () => <h1>Ugly Love: A Novel</h1>
// inline style in {{}} double brackest, normal CSS doesnt work, values have to be in quotation marks
const Author = () => <h4 style={{color:'#617d98', fontSize:'30px', margin:'30px'}}>Colleen Hoover</h4>

const Image = () => (<img src="https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL906_SR906,600_.jpg" alt="" />)

// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
//   return <p>this is a great message</p>
// };

// const Greeting = () =>{
//   return React.createElement('h1',{},'hello I am a cockmuncher');
// }


ReactDOM.render(<BookList />, document.getElementById('root'));