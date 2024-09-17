import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();  // Use navigate for programmatic navigation

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
    navigate('/logout');  // Use navigate to handle route change
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center relative p-8 pl-7 pr-8">
      <div className="logo">
        <Link to="/">
          <img src={TeslaLogo} alt="Tesla Logo" className="h-8" />
        </Link>
      </div>

      <nav className="hidden tablet:flex space-x-4 gap-10">
        <Link to="/model-s" className="hover:text-gray-400 text-[16px] font-sf-ui">Model S</Link>
        <Link to="/model-3" className="hover:text-gray-400 text-[16px] font-sf-ui">Model 3</Link>
        <Link to="/model-x" className="hover:text-gray-400 text-[16px] font-sf-ui">Model X</Link>
        <Link to="/model-y" className="hover:text-gray-400 text-[16px] font-sf-ui">Model Y</Link>
        <Link to="/solar-roof" className="hover:text-gray-400 text-[16px] font-sf-ui">Solar Roof</Link>
        <Link to="/solar-panels" className="hover:text-gray-400 text-[16px] font-sf-ui">Solar Panels</Link>
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
        <Link to="/model-s" className="hover:text-gray-400 text-[16px] font-sf-ui">Model S</Link>
        <Link to="/model-3" className="hover:text-gray-400 text-[16px] font-sf-ui">Model 3</Link>
        <Link to="/model-x" className="hover:text-gray-400 text-[16px] font-sf-ui">Model X</Link>
        <Link to="/model-y" className="hover:text-gray-400 text-[16px] font-sf-ui">Model Y</Link>
        <Link to="/solar-roof" className="hover:text-gray-400 text-[16px] font-sf-ui">Solar Roof</Link>
        <Link to="/solar-panels" className="hover:text-gray-400 text-[16px] font-sf-ui">Solar Panels</Link>

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
