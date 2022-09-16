import Head from 'next/head';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function SignIn() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email: e.target.email.value,
      password: e.target.password.value,
    });

    if (result.ok) {
      router.replace('/');
      return;
    }
    
    alert('Credential is not valid');
  };

  return (
    <div>
      <Head>
        <title>Strapi - Next - NextAuth</title>
      </Head>
      <h1>Sign In</h1>
      
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
        <label
          style={{
            marginTop: 10,
          }}
          htmlFor="password"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
        />
        <button
          style={{
            marginTop: 15,
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}