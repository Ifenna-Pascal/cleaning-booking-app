import '../styles/globals.css';
import 'remixicon/fonts/remixicon.css';
import MainLayout from '../layout';

function MyApp({ Component, pageProps }) {
  return <MainLayout><Component {...pageProps} /></MainLayout>
}

export default MyApp
