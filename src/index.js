import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css'
// Setup variables
const author = 'Grogu'
const title = 'The child';
const img = 'https://47caza48tvn318lyrs17w45k-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/baby-yoda-300x300.jpg'
function BookList() {
  return (
    <section className='book-list'>
      <Book job='developer'/>
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return <article className='book'>
    <img
      src={img}
      alt={title}
    />
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
};

ReactDom.render(<BookList />, document.getElementById('root'));
