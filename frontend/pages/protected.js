import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';

export default function Protected() {
  return (
    <div>
      <Head>
        <title>Authourised to Secure Job Home Page</title>
      </Head>
      <h1>Protected Page</h1>
      <Link href="/home">
        <button>Home - Secure Job</button>
      </Link>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  // Check if session exists or not, if not, redirect
  if (session == null) {
    return {
      redirect: {
        destination: '/auth/not-authenticated',
        permanent: true,
      },
    };
  }
  return {
    props: {},
  };
};