import { useRouter } from 'next/router';
import React from 'react';

const Dynamic: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Dynamic {id}</h1>;
};

export default Dynamic;
