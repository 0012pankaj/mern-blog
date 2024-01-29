import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}

{/* <Outlet /> :- Outlet is a component used in combination with the useRoutes hook to render child routes. 
The Outlet component acts as a placeholder in your route layout where child routes will be rendered.

useNavigate is a hook that returns a function for programmatic navigation, while 
Navigate is a component that is used to navigate imperatively based on conditions within your JSX.
*/}