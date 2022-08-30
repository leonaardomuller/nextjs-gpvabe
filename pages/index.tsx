import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';

export default function Home({ repositories, date }) {
  useEffect(() => {}, []);
  return (
    <>
      <h1>{date}</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://api.github.com/users/leonaardomuller/repos'
  );
  const data = await response.json();
  const repositoriesNames = data.map((repo) => repo.name);

  return {
    props: {
      repositories: repositoriesNames,
      date: new Date().toISOString(),
    },
    revalidate: 60 * 60 * 4, // 4 hours
  };
};
