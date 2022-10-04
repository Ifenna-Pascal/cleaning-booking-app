import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../components/shared/Button';
import { adminLogin } from '../../db/dbMethods';

function AdminLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState({
    email: '',
    password: '',
  });
  const [show, setShow] = useState(false);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      console.log(loading, 'loading');
      adminLogin(admin?.email, admin?.password)
        .then(() => {
          toast.success('Admin Signed In');
          setLoading(false);
          router.push('/admin/orders');
        })
        .catch(() => {
          setLoading(false);
          toast.error('Unauthorized Access. Confirm admin details');
          router.push('/');
        });
    } catch (error) {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full">
      <div className="lg:max-w-[700px] flex felx-col items-center  bg-white relative mb-12 z-[50] -mt-[120px] mx-auto border min-h-[300px] h-full lg:w-full w-[90%] border-gray-200 rounded-[10px]">
        <div className=" flex flex-col justify-center w-full px-4 lg:px-0 lg:max-w-[400px] mx-auto  items-center ">
          <h1 className="font-semibold text-[18px] lg:text-[28px] leading-[18px] lg:leading-[24px] text-gray-700  font-poppins py-4 mb-2">
            Admin Login
          </h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="relative w-full flex mb-3 items-center">
              <div className="absolute bg-gray-200 h-full rounded-l-[8px] flex items-center justify-center p-3">
                <i className="ri-mail-line  text-xl  text-gray-500"></i>
              </div>
              <input
                type="email"
                name="email"
                className="w-full rounded-[8px] text-gray-500 pl-12 focus:outline-none border border-gray-300 bg-transparent"
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative w-full flex  items-center">
              <div className="absolute bg-gray-200 h-full rounded-l-[8px] flex items-center justify-center p-3">
                <i
                  className={`${
                    show ? 'ri-eye-off-line' : 'ri-eye-line '
                  } text-xl cursor-pointer  text-gray-500`}
                  onClick={() => setShow(!show)}
                ></i>
              </div>
              <input
                type={show ? 'text' : 'password'}
                name="password"
                className="w-full rounded-[8px] text-gray-500 pl-12 focus:outline-none border border-gray-300 bg-transparent"
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full mt-4">
              {' '}
              <Button
                text={loading ? 'Loading...' : 'Login'}
                background="bg-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
