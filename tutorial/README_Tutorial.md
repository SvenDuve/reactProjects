# Setup

general project setup with

```
npx create-react-app my-app
cd my-app
npm start
```

gets you started, do that within the github repo.

# Component

Create a file ```Component.js```

then in there type "rafce" that will automaticall generate an exportable component.

# general import statements

```
import React from "react";
import * as ReactDOM from "react-dom";
```

```
import './index.css';
```

Works as expected

In index.js at the bottom, replace booklist with whatever.

```
ReactDOM.render(<BookList />, document.getElementById('root'));
```

Some rules:

// stateless fucntiona component
// always return JSX I mean alwas return somehtiung

JSX Rules

- return a single element
- div / section / article or Fragment
- use camelCase for html attribute
- className instead of class
- close every element
- formatting
- after return either the opening tag or ( opening bracket , need to open and close at the highest level.

inline style in {{}} double brackest, normal CSS doesnt work, values have to be in quotation marks

All variables need be in {} within the return statement.

```className``` instead of ```class```.

# Props

Props are given in the tag declaration, as name value pairs:

```
<Book title={firstBook.title} author={firstBook.author} imageSource={firstBook.booklink} />
```

But within the Book:

```
const Book = (props) => {
  console.log(props);
  return( 
  <article className="book" style={{color:'blue', fontSize:'50px'}} >
    <img src={props.imageSource} alt="" />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>)
};
```

props can also be destructured by

```
{prop1, prop2, prop4, ....}
´´´

then use names directly instead of object notation.

```children``` can be anything, an additional variable to the props. Check lesson 27 for how ith works.


next components with, check out .map and {...book}, which acts like a composer of the name:values

have to destructrur in component, or use object notation.


```

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
```
