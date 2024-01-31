import { Sidebar } from 'flowbite-react';
import { HiUser, HiArrowSmRight } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function DashSidebar() {
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
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiUser}
              label={'User'}
              labelColor='dark'
              as='div'
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer'>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}