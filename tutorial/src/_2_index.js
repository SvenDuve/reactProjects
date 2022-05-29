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
    </section>);
}

// will also be read inside the funtion
const author = 'I am an idiot'
const booklink = 'https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL906_SR906,600_.jpg'

const Book = () => {
    const title = 'I am a stupid book'
  return( 
  <article className="book">
    <img src={booklink} alt="" />
    <h1>{title.toLowerCase()}</h1>
    <h4>{author}</h4>
  </article>)
};


// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
//   return <p>this is a great message</p>
// };

// const Greeting = () =>{
//   return React.createElement('h1',{},'hello I am a cockmuncher');
// }


ReactDOM.render(<BookList />, document.getElementById('root'));