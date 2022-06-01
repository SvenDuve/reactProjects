 import React from 'react'
 
 // will also be read inside the funtion
// two possible ways
// const Book = ({imageSource, title, author}) => {
const Book = (props) => {
    // check obect how it comes in console. for example here we need props.book!!
    // if using the splat operator, simply use props
    console.log(props)
    const {booklink, title, author} = props;
//   console.log(props);
    // attribute, eventHandler
    const clickHandler = () => {
        alert('Hello World, thiss is cräzy');
    }
    const complexExample = (author) => {
        console.log(author)
    }
  return( 
  <article className="book" onMouseOver={() => {
      console.log(title)
  }} style={{color:'black', fontSize:'20px'}} >
    <img src={booklink} alt="" />
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>some Button</button>
    <button type="button" onClick={() => complexExample(author)}>more complex example</button>
  </article>)
};
 
 export default Book
 