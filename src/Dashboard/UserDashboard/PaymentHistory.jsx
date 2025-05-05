import useAxiosSecure from '../../Hook/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import useAuth from '../../Hook/useAuth'
import Loading from '../../components/Loading'
import { format } from 'date-fns'
import { Helmet } from 'react-helmet'

export default function PaymentHistory() {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()

  const { data: paymentHistory = [], isLoading } = useQuery({
    queryKey: ['paymentHistory', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/paymentHistory/${user?.email}`)
      return data
    },
    enabled: !!user?.email, // only run query when user.email exists
  })

  if (isLoading) return <Loading />

  return (
    <div>
      <Helmet>
        <title>Hostel Management | Payment History</title>
      </Helmet>

      <div>
        <h1 className='text-3xl font-semibold my-5'>
          Payment History for {user?.displayName}
        </h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr className='font-semibold text-[16px]'>
              <th>Name</th>
              <th>Email</th>
              <th>Package</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody className='font-semibold text-[14px]'>
            {paymentHistory.length > 0 ? (
              paymentHistory.map((payment) => (
                <tr className="bg-base-200" key={payment._id}>
                  <th>{user?.displayName}</th>
                  <td>{user?.email}</td>
                  <td>{payment.plan}</td>
                  <td>{format(new Date(payment.date), 'MMMM dd, yyyy')}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No payment history found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
