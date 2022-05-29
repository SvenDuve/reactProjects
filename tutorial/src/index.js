import React from "react";
import * as ReactDOM from "react-dom";

// CSS
import './index.css';

// setup vars

const firstBook ={
  booklink: 'https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL906_SR906,600_.jpg',
  author: 'I am an idiot',
  title: 'I am a stupid book'
}
const secondBook ={
  booklink: 'https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL906_SR906,600_.jpg',
  author: 'I am a second idiot',
  title: 'I am a even more stupid  book'
}

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
    <section className="booklist">
      <Book title={firstBook.title} author={firstBook.author} imageSource={firstBook.booklink} />
      <Book title={secondBook.title} author={secondBook.author} imageSource={secondBook.booklink}/>
    </section>);
}

// will also be read inside the funtion

const Book = (props) => {
  console.log(props);
  return( 
  <article className="book" style={{color:'blue', fontSize:'50px'}} >
    <img src={props.imageSource} alt="" />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
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