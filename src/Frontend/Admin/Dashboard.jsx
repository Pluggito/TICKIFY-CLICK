
// import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faCalendarPlus, faChartBar,} from '@fortawesome/free-regular-svg-icons';
import { assets } from '../assets/asset';
import { useNavigate } from 'react-router';
// import { path } from 'motion/react-client';

const Dashboard = () => {
  // const [openNav, setOpenNav] = useState(false);

//  const customers = [
  //  { name: 'Jane Cooper', email: 'jane@microsoft.com', amount: '+$1,999.00', status: 'active' },
  //  { name: 'Floyd Miles', email: 'floyd@yahoo.com', amount: '+$1,999.00', status: 'inactive' },
    // Add more customer objects here
  // ];

  let navigate = useNavigate();

  return (
      <div className="flex flex-col lg:flex-row bg-gradient-to-r from-[#b30d0d] to-[#111] max-w-[1320px] p-5 m-auto rounded-2xl tracking-wide outline-none overflow-hidden">
        {/* Sidebar */}
        <aside className={`w-64 min-h-[45vw] bg-slate-100 flex flex-col justify-between rounded-2xl p-4 lg:block`}>
          <div>
            <div className="flex items-center space-x-3 mb-7 p-2 transition-all ease-out duration-500 rounded-lg hover:shadow-xl cursor-pointer">
              <div className="bg-slate-100 w-10 h-10 rounded-full border border-red-800"></div>
              <div>
                <p className="font-semibold">User</p>
                <p className="text-sm text-gray-500">Project Manager</p>
              </div>
            </div>
            <nav className="space-y-4">
              {[
                { label: 'Dashboard', icon: assets.home_icon, },
                { label: 'About', icon: assets.about_icon },
                { label: 'Events', icon: faCalendarCheck },
                { label: 'Sales', icon: faChartBar },
                { label: 'Promote', icon: assets.promote_icon },
                { label: 'Help', icon: assets.help_icon },
              ].map((item, index) => (
                <div key={index} className="flex hover:bg-gray-200 gap-1 items-center cursor-pointer">
                  {typeof item.icon === 'string' ? (
                    <img src={item.icon} alt={`${item.label}-icon`} className="w-5" />
                  ) : (
                    <FontAwesomeIcon icon={item.icon} className="mr-1" />
                  )}
                  <p className="p-1 rounded font-medium">{item.label}</p>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-5 mb-7 shadow-lg rounded-md h-auto">
          {/* Header */}
          <header className='text-white'>
            <h1 className="text-3xl font-bold mb-6">Hello User 👋</h1>
          </header>

          {/* Stats Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'Total Revenue', value: '₦451,500.68', change: '+16% this month', color: 'text-green-500' },
              { title: 'Ticket Sales', value: '1,893', change: '-1% this month', color: 'text-red-500' },
              { title: 'Upcoming Events', value: '3', change: '2 events this week', color: 'text-gray-500' },
              { title: 'Attendants', value: '189', change: '',},
            ].map((stat, index) => (
              <div key={index} className="bg-slate-100 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-sm text-left font-semibold">{stat.title}</h3>
                <p className="text-2xl font-bold mt-2 flex flex-col">
                  {stat.value}
                  {stat.change && <span className={`text-sm ${stat.color}`}>{stat.change}</span>}
                  {stat.indicator && <div className="rounded-full bg-green-500 w-3 h-3 inline-block ml-2"></div>}
                </p>
              </div>
            ))}
          </section>

          {/* Customers Table */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <div className='items-center justify-center m-auto py-11 px-9 text-center'>
                <h4 className='font-semibold text-sm mb-2'>Create events</h4>
                <FontAwesomeIcon icon={faCalendarPlus} className='text-[35px] border border-red-800 rounded-full p-3 hover:bg-black hover:text-white' onClick={()=> navigate('/createevents')} />
            </div>



            {/*------Display for the overall customer purchas----- */}
          {/*  <div className="flex flex-row justify-between items-center mb-14">
              <h2 className="text-xl font-semibold mb-4">All Customers</h2>
              <select className="p-3 rounded-2xl bg-gray-200">
                <option value="newest">Sort by: Newest</option>
                <option value="oldest">Sort by: Oldest</option>
                <option value="current">Sort by: Current</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2">Customer Name</th>
                    <th className="py-2">Email</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2">{customer.name}</td>
                      <td className="py-2">{customer.email}</td>
                      <td className="py-2">{customer.amount}</td>
                      <td className="py-2">
                        {customer.status === 'active' ? (
                          <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
                        ) : (
                          <FontAwesomeIcon icon={faCircleXmark} className="text-[#b30d0d]" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}
          </section>
        </main>
      </div>
  );
};

export default Dashboard;
