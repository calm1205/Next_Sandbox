import Link from 'next/link';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
      <h1>welcome to next.js</h1>

      <Link href="/about">Go to /about</Link>
      <br />
      <Link href="/detail">Go to /Detail</Link>
      <br />
      <Link href="/dynamic/1">Go to /dynamic/1</Link>
    </>
  );
};

export default HomePage;
