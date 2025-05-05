
import useAuth from '../Hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hook/useAxiosSecure';
import { FaUtensils, FaShoppingCart, FaUsers, FaMoneyBillWave } from 'react-icons/fa';


export default function AdminDashboard() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stat = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/admin-stats');
      return data;
    }
  });

  return (
    <div>

    <div className="p-6 space-y-6 min-h-screen text-white">
      <div className="text-start text-sky-900">
        <h1 className='text-3xl font-bold'>Hi, Welcome {user?.displayName || "Back"}!</h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stat shadow-lg p-4 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg border border-gray-300 flex items-center">
          <FaUtensils className="text-white text-4xl mr-4" />
          <div>
            <div className="stat-title text-white text-lg font-semibold"> Meal</div>
            <div className="stat-value text-white">{stat.allmeal}</div>
            <p className="text-sm text-white opacity-80">Total number of meals served.</p>
          </div>
        </div>
        
        <div className="stat shadow-lg p-4 bg-gradient-to-r from-green-500 to-green-400 rounded-lg border border-gray-300 flex items-center">
          <FaShoppingCart className="text-white text-4xl mr-4" />
          <div>
            <div className="stat-title text-white text-lg font-semibold"> Meal Request</div>
            <div className="stat-value text-white">{stat.order}</div>
            <p className="text-sm text-white opacity-80">Total meal requests made by users.</p>
          </div>
        </div>
        
        <div className="stat shadow-lg p-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg border border-gray-300 flex items-center">
          <FaUsers className="text-white text-4xl mr-4" />
          <div>
            <div className="stat-title text-white text-lg font-semibold"> Users</div>
            <div className="stat-value text-white">{stat.allUser}</div>
            <p className="text-sm text-white opacity-80">Total registered users in the system.</p>
          </div>
        </div>
        
        <div className="stat shadow-lg p-4 bg-gradient-to-r from-red-500 to-red-400 rounded-lg border border-gray-300 flex items-center">
          <FaMoneyBillWave className="text-white text-4xl mr-4" />
          <div>
            <div className="stat-title text-white text-lg font-semibold"> Revenue</div>
            <div className="stat-value text-white">{stat.TotalRevenue}</div>
            <p className="text-sm text-white opacity-80">Total revenue generated from meals.</p>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
}
