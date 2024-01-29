import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';

export default function Dashboard() {
  const location = useLocation(); //give current path like "http://localhost:5173/dashboard?tab=profile"
  const [tab, setTab] = useState(''); //initially null
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search); //it extract path after ? like "?tab=profile"
    const tabFromUrl = urlParams.get('tab'); //it give value of tap which is "profile"
    if (tabFromUrl) {
      setTab(tabFromUrl); 
    }
  }, [location.search]); //every time path change it rerender and asign or set value to tab
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === 'profile' && <DashProfile />}
    </div>
  );
}