import React from 'react';
import useAuth from '../../Hook/useAuth';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { FaEdit, FaStar } from 'react-icons/fa';

function MyProfile() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  
  const { data: myProfile = {} } = useQuery({
    queryKey: [user?.email, 'myProfile'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-profile/${user?.email}`);
      return data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Dashboard | My Profile</title>
      </Helmet>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg flex gap-6">
        {/* Profile Sidebar */}
        <div className="w-1/3 p-4 bg-gray-100 rounded-lg flex flex-col items-center">
          <img
            src={user?.photoURL || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
          />
          <h2 className="text-xl font-semibold mt-3">{user?.displayName || 'User Name'}</h2>
          <p className="text-gray-500 text-sm">{myProfile?.role || 'User'}</p>
          <div className="flex items-center gap-1 mt-2 text-yellow-500">
            <FaStar /> <span>{myProfile?.rating || '5.0'} (1)</span>
          </div>
          {/* <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">Close Account</button> */}
        </div>
        
        {/* Profile Details */}
        <div className="w-2/3">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
              <span className="text-gray-700">Email:</span>
              <span className="text-gray-600">{user?.email}</span>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
              <span className="text-gray-700">Phone:</span>
              <span className="text-gray-600">{myProfile?.phone || 'Not Provided'}</span>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
              <span className="text-gray-700">Address:</span>
              <span className="text-gray-600">{myProfile?.address || 'Not Provided'}</span>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
              <span className="text-gray-700">Badge:</span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${myProfile?.badge ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                {myProfile?.badge || 'No Badge'}
              </span>
            </div>
            {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2"> */}
              {/* <FaEdit /> Edit Profile */}
            {/* </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
