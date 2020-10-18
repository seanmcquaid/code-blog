import Head from 'next/head';
import { useCallback, useState, useMemo } from 'react';
import styled from 'styled-components';
import PostList from '../components/app/home/PostList';
import { Button, H1, P } from '../components/universal';
import postsService from '../services/postsService';

export default function Home({ posts }) {
  const [currentPage, setCurrentPage] = useState(0);
  const currentPosts = posts.slice(currentPage * 5, (currentPage + 1) * 5);
  const totalPages = useMemo(
    () => Math.floor(posts.length / 5) + (posts % 5 !== 0 ? 1 : 0),
    [posts]
  );

  const prevButtonOnClick = useCallback(() => {
    setCurrentPage((pageNumber) => pageNumber - 1);
  }, []);

  const nextButtonOnClick = useCallback(() => {
    setCurrentPage((pageNumber) => pageNumber + 1);
  }, []);

  return (
    <HomePageContainer>
      <Head>Home</Head>
      <Header>
        <H1>Sean McQuaid's Code Blog</H1>
        <P>
          Welcome to my blog! My name is Sean and I am currently a React
          Developer at Chick-fil-A. I will primarily post about coding best
          practices, general advice and how to successfully transition into the
          industry!
        </P>
      </Header>
      <Main>
        <PostList posts={currentPosts} />
        <PageContainer>
          <Button onClick={prevButtonOnClick} disabled={currentPage === 0}>
            Prev
          </Button>
          <PageNumber>
            Page {currentPage + 1} of {totalPages}
          </PageNumber>
          <Button
            onClick={nextButtonOnClick}
            disabled={currentPage + 1 === totalPages}
          >
            Next
          </Button>
        </PageContainer>
      </Main>
    </HomePageContainer>
  );
}

export async function getStaticProps() {
  const posts = postsService.getSortedPosts();
  return {
    props: { posts },
  };
}

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

const PageContainer = styled.div``;

const PageNumber = styled.span``;
