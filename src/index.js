import React from 'react';
import ReactDom from 'react-dom';

function BookList() {
  return (
    <section>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}

const Book = () => {
  return <article>
    <Image />
    <Title />
    <Author />
  </article>
};

const Image = () => (
  <img
    src='https://47caza48tvn318lyrs17w45k-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/baby-yoda-300x300.jpg'
    alt=''
  />
);

const Title = () => <h1>The Child</h1>
const Author = () => <p>Baby Yoda</p>


ReactDom.render(<BookList />, document.getElementById('root'));
