import { Outlet } from 'react-router-dom';
import { Decor } from './Decor'; import { Music } from './Music'; import { Nav } from './Nav';
export function Layout(){return <><Decor/><Nav/><Music/><main><Outlet/></main><footer className="footer">made with ♡ for <b>Mariam</b> · Sweetie</footer></>}
