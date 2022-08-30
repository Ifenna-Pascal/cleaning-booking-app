import '../styles/globals.css';
import 'remixicon/fonts/remixicon.css';
import MainLayout from '../layout';
import { ServiceProvider } from '../context/ServiceProvider';

function MyApp({ Component, pageProps }) {
  return <ServiceProvider>
    <MainLayout><Component {...pageProps} /></MainLayout>
  </ServiceProvider>
}

export default MyApp
