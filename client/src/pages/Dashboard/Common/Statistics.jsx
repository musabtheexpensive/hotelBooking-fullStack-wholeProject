import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics'
import { Helmet } from 'react-helmet-async'
import userRole from '../../../hooks/userRole'
// import GuestStatistics from '../../../components/Dashboard/Statistics/Guest/GuestStatistics'
// import HostStatistics from '../../../components/Dashboard/Statistics/Host/HostStatistics'

const Statistics = () => {
  const [role] = userRole()
  console.log(role)
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      {/* {role === 'guest' && <GuestStatistics />}
      {role === 'host' && <HostStatistics />}*/}
      {role === 'admin' && <AdminStatistics />}
    </div>
  )
}

export default Statistics