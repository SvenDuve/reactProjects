import React from "react";
import * as ReactDOM from "react-dom";

// CSS
import './index.css';

import {books} from './books'
import Book from "./Book";

// setup vars
// const author = 'I am an idiot'
// const booklink = 'https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL906_SR906,600_.jpg'
// const title = 'I am a stupid book'


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
    <section className="booklist">{books.map((book, index) => {
        console.log(book)
        return (
            // using ... the splat operator splits up all the objects,
            <Book key={index} {...book}></Book>
        )
        })}
    </section>);
}




// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
//   return <p>this is a great message</p>
// };

// const Greeting = () =>{
//   return React.createElement('h1',{},'hello I am a cockmuncher');
// }


ReactDOM.render(<BookList />, document.getElementById('root'));