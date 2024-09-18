import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Close } from '@mui/icons-material';
import TeslaLogo from '../../assets/teslalogo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Kimg from "../../assets/user.jpg";
import './header.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Header({ onLinkClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [activeLink, setActiveLink] = useState(location.pathname);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    navigate('/logout');
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    if (onLinkClick) {
      onLinkClick(path); 
    }
    navigate(path); 
  };

  const modelSIsActive = (path) => activeLink === path ? 'border  border-[#0081FF] text-[#0081FF]  rounded-[85px]' : 'border-b-0';
  const model3IsActive = (path) => activeLink === path ? 'border  border-white text-[white]  rounded-[85px]' : 'border-b-0';
  const modelXIsActive = (path) => activeLink === path ? 'border  border-[#0081FF] text-[#0081FF]  rounded-[85px]' : 'border-b-0';
  const modelYIsActive = (path) => activeLink === path ? 'border  border-red-500 text-red-500  rounded-[85px]' : 'border-b-0';
  const solarRoofIsActive = (path) => activeLink === path ? 'border  border-green-500 text-green-500  rounded-[85px]' : 'border-b-0';
  const solarPanelsIsActive = (path) => activeLink === path ? 'border  border-yellow-500 text-yellow-500  rounded-[85px]' : 'border-b-0';

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center relative p-8 pl-7 pr-8">
      <div className="logo">
        <Link to="/">
          <img src={TeslaLogo} alt="Tesla Logo" className="h-8" />
        </Link>
      </div>

      <nav className="hidden tablet:flex space-x-4 gap-10">
        <Link to="/model-s" className={`p-2 ${modelSIsActive('/model-s')}`} onClick={() => handleLinkClick('/model-s')}>
          Model S
        </Link>
        <Link to="/model-3" className={`p-2 ${model3IsActive('/model-3')}`} onClick={() => handleLinkClick('/model-3')}>
          Model 3
        </Link>
        <Link to="/model-x" className={`p-2 ${modelXIsActive('/model-x')}`} onClick={() => handleLinkClick('/model-x')}>
          Model X
        </Link>
        <Link to="/model-y" className={`p-2 ${modelYIsActive('/model-y')}`} onClick={() => handleLinkClick('/model-y')}>
          Model Y
        </Link>
        <Link to="/solar-roof" className={`p-2 ${solarRoofIsActive('/solar-roof')}`} onClick={() => handleLinkClick('/solar-roof')}>
          Solar Roof
        </Link>
        <Link to="/solar-panels" className={`p-2 ${solarPanelsIsActive('/solar-panels')}`} onClick={() => handleLinkClick('/solar-panels')}>
          Solar Panels
        </Link>
      </nav>

      <div className="hidden tablet:flex space-x-4 items-center">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <button className="hover:text-gray-400" onClick={handleOpenUserMenu}>
          <Avatar alt="User Avatar" src={Kimg} />
        </button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>Account</MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>Dashboard</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>

      <button className="tablet:hidden" onClick={toggleMenu}>
        {menuOpen ? <Close fontSize="large" /> : <FormatListBulletedIcon fontSize="large" />}
      </button>

      <nav
        className={`${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out absolute top-0 left-0 w-full h-screen bg-black text-white p-6 space-y-4 flex flex-col gap-3 z-50 tablet:hidden`}
      >
        <button className="self-end mb-4" onClick={toggleMenu}>
          <Close fontSize="large" />
        </button>
        <Link to="/model-s" className={`py-2 ${modelSIsActive('/model-s')}`} onClick={() => handleLinkClick('/model-s')}>
          Model S
        </Link>
        <Link to="/model-3" className={`py-2 ${model3IsActive('/model-3')}`} onClick={() => handleLinkClick('/model-3')}>
          Model 3
        </Link>
        <Link to="/model-x" className={`py-2 ${modelXIsActive('/model-x')}`} onClick={() => handleLinkClick('/model-x')}>
          Model X
        </Link>
        <Link to="/model-y" className={`py-2 ${modelYIsActive('/model-y')}`} onClick={() => handleLinkClick('/model-y')}>
          Model Y
        </Link>
        <Link to="/solar-roof" className={`py-2 ${solarRoofIsActive('/solar-roof')}`} onClick={() => handleLinkClick('/solar-roof')}>
          Solar Roof
        </Link>
        <Link to="/solar-panels" className={`py-2 ${solarPanelsIsActive('/solar-panels')}`} onClick={() => handleLinkClick('/solar-panels')}>
          Solar Panels
        </Link>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <button className="hover:text-gray-400" onClick={handleOpenUserMenu}>
          <Avatar alt="User Avatar" src={Kimg} />
        </button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>Account</MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>Dashboard</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </nav>
    </header>
  );
}

export default Header;
