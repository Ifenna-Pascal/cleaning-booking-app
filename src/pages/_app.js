import '../styles/globals.css';
import 'remixicon/fonts/remixicon.css';
import MainLayout from '../layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ServiceProvider } from '../context/ServiceProvider';
import BookingProvider from '../context/BookingProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ServiceProvider>
      <BookingProvider>
        <MainLayout>
          <Component {...pageProps} />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </MainLayout>
      </BookingProvider>
    </ServiceProvider>
  );
}

export default MyApp;
