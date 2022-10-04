import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';
import { ServiceContext } from '../../context/ServiceProvider';
// import { useAuth } from '../../db/dbMethods'
import Header from '../../layout/adminHero/Header';
import BookingTable from '../../section/admin/AdminBookingTable';

function AdminPage() {
  const router = useRouter();
  // const {user} = useAuth();
  const { currentUser } = useContext(ServiceContext);
  // useEffect(()=> {
  //     console.log(currentUser)
  //     !currentUser ? router.push('/') : router.push('/admin/orders')
  // }, [])
  return (
    <div className="min-h-[70vh] h-full">
      <Header user={currentUser?.email} />
      <div className="w-full  py-12 h-full flex-col ">
        <BookingTable />
      </div>
    </div>
  );
}

export default AdminPage;
