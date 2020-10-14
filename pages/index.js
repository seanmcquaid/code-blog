import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';
import PostList from '../components/app/home/PostList';
import { H1, P } from '../components/universal';
import postsService from '../services/postsService';

export default function Home({ posts }) {
  const fakePosts = [
    { date: 'date', title: '', id: 0 },
    { date: 'date', title: '', id: 1 },
    { date: 'date', title: '', id: 5 },
    { date: 'date', title: '', id: 6 },
    { date: 'date', title: '', id: 7 },
    { date: 'date', title: '', id: 8 },
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const currentPosts = fakePosts.slice(currentPage * 5, (currentPage + 1) * 5);
  console.log(currentPosts);

  return (
    <HomePageContainer>
      <Head>Home</Head>;
      <Header>
        <H1>Sean McQuaid's Code Blog</H1>
        <P>
          Welcome to my blog! My name is Sean and I am currently a React
          Developer at Chick-fil-A. I will primarily post about coding best
          practices, general advice and how to successfully transition into the
          industry!
        </P>
        <PostList posts={currentPosts} />
      </Header>
    </HomePageContainer>
  );
}

// export async function getStaticProps() {
//   const posts = await postsService.getPosts();
//   return {
//     props: {
//       posts,
//     },
//   };
// }

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

const Main = styled.main`
  width: 60%;
`;
