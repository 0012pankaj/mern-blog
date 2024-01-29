
import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className='bg-white text-[rgb(16,21,36)] dark:text-neutral-100 dark:bg-[rgb(5,9,21)] min-h-screen'>
        {children}
      </div>
    </div>
  );
}
  
