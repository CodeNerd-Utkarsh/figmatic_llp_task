import "./SideBar.css"
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function SideBar() {
    return (
        <div className='sideBar' >
            <div className="sideBar__upper">
                <p className="logo">FIGMATIC LLP</p>
                <div><HomeIcon /> dashboard</div>
                <div><SchoolIcon />knowledge</div>
                <div><PeopleIcon />members</div>
                <div><Diversity3Icon />teams</div>
                <div><FolderSharedIcon />vault</div>
                <div><ChatIcon />chat</div>
            </div>
            <div className="sideBar__lower">
                <div><SettingsIcon />settings</div>
                <div><ApartmentIcon />company</div>
                <div><AccountCircleIcon />my profile</div>
            </div>
        </div>
    )
}

export default SideBar