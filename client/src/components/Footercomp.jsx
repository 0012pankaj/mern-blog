import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Footercomp() {
  return (
    <Footer container className='border border-t-8 border-indigo-500'>

    <div className='w-full max-w-7xl mx-auto'>

      <div className='grid w-full justify-between sm:flex md:grid-cols-1'>

        <div className='mt-5'>
          <Link
            to='/'
            className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
          >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
           You
            </span>
           Express
          </Link>
        </div>

        <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>

           <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/0012pankaj">Github</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Resources" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Blog</Footer.Link>
                <Footer.Link href="#">News</Footer.Link>
              </Footer.LinkGroup>
            </div>

          <div>
            <Footer.Title title='Legal' />
            <Footer.LinkGroup col>
              <Footer.Link href='#'>Privacy Policy</Footer.Link>
              <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>

        </div>
      </div>


      <Footer.Divider />
      <div className='w-full sm:flex sm:items-center sm:justify-between'>
        <Footer.Copyright
          href='#'
          by="You Express "
          year={new Date().getFullYear()} //give current year
        />

        <div className="flex gap-10 sm:mt-0 mt-4 sm:justify-center">
          <Footer.Icon href='#' icon={BsFacebook}/>
          <Footer.Icon href='https://www.instagram.com/pankaj_atri_0012/' icon={BsInstagram}/>
          <Footer.Icon href='https://twitter.com/PankajAtri0012' icon={BsTwitter}/>
          <Footer.Icon href='https://github.com/0012pankaj' icon={BsGithub}/>
        </div>
      </div>

    </div>
  </Footer>
  )
}
