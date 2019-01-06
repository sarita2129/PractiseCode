**Introduction to JSX**
- JSX
  JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.
  What does "syntax extension" mean?
  In this case, it means that JSX is not valid JavaScript. Web browsers can't read it!
  If a JavaScript file contains JSX code, then that file will have to be compiled. That means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.
- JSX Elements
  A basic unit of JSX is called a JSX element.This JSX element looks exactly like HTML! The only noticeable difference is that you would find it in a JavaScript file, instead of in an HTML file.
  JSX Elements acn be stored in a variable.

  const p = < p >Hello World</ p >

  JSX Elements have attribute
  syntax: atribute = "value" <br />
  const p = < p id="title">Hello World</ p >

- Nested JSX
  You can nest JSX elements inside of other JSX elements, just like in HTML.

  < a href="https://www.example.com">< h1 >Click me!</h1 ></ a><br />

  If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses. ()

- JSX Outer Elements
  JSX expression must have exactly one outermost element.The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!

- Render JSX
  * ReactDOM
    ReactDOM is the name of a JavaScript library. This library contains several React-specific methods, all of which deal with the DOM in some way or another.
    **ReactDOM.render()** is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM. That is the way to make a JSX expression appear onscreen.The first argument is appended to whatever element is selected by the second argument.

    <p style="margin-left:80px;">import React from 'react';</p>
    <p style="margin-left:80px;">import ReactDOM from 'react-dom';</p>
    <p style="margin-left:80px;">ReactDOM.render(< h1 >Render me!</ h1 >, document.getElementById('app'));</p>

 - Curly Braces in JSX
   Wrapping of code can be done using curly braces.
 - Variables in JSX
   Variables can be used to injecting Js code into JSX tags. This can be used in attribute, events etc..
 - Conditional Ifs in JSX
   You cannot inject ifs into JSX but there are situations when you can use it.
 - Components in React
   A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML

<p style="margin-left:80px;">import React from 'react';
<p style="margin-left:80px;">import ReactDOM from 'react-dom';

<p style="margin-left:80px;">class MyComponentClass extends React.Component {
  <p style="margin-left:80px;">render() {
  <p style="margin-left:80px;">  return < h1 >Hello world</ h1 >;
  <p style="margin-left:80px;">}
<p style="margin-left:80px;">};

<p style="margin-left:80px;">ReactDOM.render(
<p style="margin-left:80px;">  < MyComponentClass />,
<p style="margin-left:80px;">  document.getElementById('app')
<p style="margin-left:80px;">);
