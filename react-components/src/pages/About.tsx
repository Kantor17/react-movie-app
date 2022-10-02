import Header from 'components/Header';
import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Header />
        <main className="main">
          <div className="container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores pariatur
            sunt magni a iusto aspernatur eligendi. Quas laudantium incidunt exercitationem a, quia
            quam molestias recusandae dolore quidem rerum sequi temporibus ea nobis aliquam nisi non
            fugiat harum dolores provident eos blanditiis error voluptates reprehenderit facere?
            Praesentium ducimus sapiente rem?
          </div>
        </main>
      </div>
    );
  }
}
