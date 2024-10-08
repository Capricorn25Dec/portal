// import * as React from 'react';
// import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import getDashboardTheme from './theme/getDashboardTheme';
// import ToggleCustomTheme from './internals/components/ToggleCustomTheme';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import MainGrid from './components/MainGrid';
// import SideMenu from './components/SideMenu';

// export default function Dashboard() {
//   const [mode, setMode] = React.useState('light');
//   const [showCustomTheme, setShowCustomTheme] = React.useState(true);
//   const dashboardTheme = createTheme(getDashboardTheme(mode));
//   const defaultTheme = createTheme({ palette: { mode } });
//   // This code only runs on the client side, to determine the system color preference
//   React.useEffect(() => {
//     // Check if there is a preferred mode in localStorage
//     const savedMode = localStorage.getItem('themeMode');
//     if (savedMode) {
//       setMode(savedMode);
//     } else {
//       // If no preference is found, it uses system preference
//       const systemPrefersDark = window.matchMedia(
//         '(prefers-color-scheme: dark)',
//       ).matches;
//       setMode(systemPrefersDark ? 'dark' : 'light');
//     }
//   }, []);

//   const toggleColorMode = () => {
//     const newMode = mode === 'dark' ? 'light' : 'dark';
//     setMode(newMode);
//     localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
//   };

//   const toggleCustomTheme = () => {
//     setShowCustomTheme((prev) => !prev);
//   };

//   return (
//     <ThemeProvider theme={showCustomTheme ? dashboardTheme : defaultTheme}>
//       <CssBaseline />
//       <Box sx={{ display: 'flex' }}>
//         <SideMenu />
//         <Navbar mode={mode} toggleColorMode={toggleColorMode} />
//         {/* Main content */}
//         <Box
//           component="main"
//           sx={(theme) => ({
//             position: { sm: 'relative', md: '' },
//             top: { sm: '48px', md: '0' },
//             height: { sm: 'calc(100vh - 48px)', md: '100vh' },
//             flexGrow: 1,
//             pt: 2,
//             backgroundColor: alpha(theme.palette.background.default, 1),
//             overflow: 'auto',
//           })}
//         >
//           <Stack
//             spacing={2}
//             sx={{
//               alignItems: 'center',
//               mx: 3,
//               pb: 10,
//             }}
//           >
//             <Header mode={mode} toggleColorMode={toggleColorMode} />
//             <MainGrid />
//           </Stack>
//         </Box>
//         <ToggleCustomTheme
//           showCustomTheme={showCustomTheme}
//           toggleCustomTheme={toggleCustomTheme}
//         />
//       </Box>
//     </ThemeProvider>
//   );
// }


import * as React from 'react';
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import getDashboardTheme from './theme/getDashboardTheme';
// import ToggleCustomTheme from './internals/components/ToggleCustomTheme';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SideMenu from './components/SideMenu';

export default function Dashboard() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const dashboardTheme = createTheme(getDashboardTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  React.useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? dashboardTheme : defaultTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <Navbar mode={mode} toggleColorMode={toggleColorMode} />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            position: { sm: 'relative', md: '' },
            top: { sm: '48px', md: '0' },
            height: { sm: 'calc(100vh - 48px)', md: '100vh' },
            flexGrow: 1,
            pt: 2,
            backgroundColor: alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 10,
            }}
          >
            <Header mode={mode} toggleColorMode={toggleColorMode} />
            {/* Replace MainGrid with your custom content */}
            <Box>
              <h1>Your Custom Content Here</h1>
              <p>Add more components or custom content as needed.</p>
            </Box>
          </Stack>
        </Box>
        {/* <ToggleCustomTheme
          showCustomTheme={showCustomTheme}
          toggleCustomTheme={toggleCustomTheme}
        /> */}
      </Box>
    </ThemeProvider>
  );
}
