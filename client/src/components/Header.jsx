
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function Header() {
    const path = useLocation().pathname;  //assign current page path in path variable help in sowing "active" nav icon 
      const { currentUser } = useSelector((state) => state.user); //fetch curent user detail from redux store state to show info and profile

    return (
    <Navbar className='border-b-2'>

      {/* header icon with link tag of react router dom to move to req page*/}
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
         You
        </span>
        Express
      </Link>

   {/* Search bar section  use react-icons AiOutlineSearch and and Flobit-react ui components */}
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'   
        />  {/* make responsive when large screen show  this for search */}
      </form>

      <Button className='w-12 h-10 lg:hidden' color='gray' pill> {/*make responsive when small screen show this for search(pill-->round) */}
        <AiOutlineSearch />
      </Button>


       {/* Sign in button and display colorchange button "md:order-2" order in flex  */}
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 ' color='gray' pill>
          <FaMoon /> {/* moon icon */}
        </Button>
        {/* if user login than show detail an profile pic else show Sign in button */}
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToPink' outline>
              Sign In
            </Button>
          </Link>
        )}

        <Navbar.Toggle />   {/* hamberger for toggling during screen size change */}
       
      </div>

      {/*  <Navbar.Toggle /> &   <Navbar.Collapse> work together acc to Screen size */}
      <Navbar.Collapse>
        <Navbar.Link href='/'  active={path === '/'}>{/* active={path === "/"} if path match to given page show it coloured->active */}
          Home
        </Navbar.Link>
        <Navbar.Link href='/about' active={path === '/about'}>
          About
        </Navbar.Link>
        <Navbar.Link href='/projects' active={path === '/projects'}>
            Projects
        </Navbar.Link>
      </Navbar.Collapse>
  


    </Navbar>
  );
}