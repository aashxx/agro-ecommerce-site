import '../styles/globals.css';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';
import AuthState from '../context/AuthContext';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [progress, setProgress] = useState(0);

  return (
    <AuthState setProgress={setProgress}>
      <StateContext>
        <Toaster />
        <LoadingBar color='#008037' progress={progress} height={4} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </AuthState>
  )
}

export default MyApp
