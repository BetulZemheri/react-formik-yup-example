import { deepPurple, indigo, green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[300],
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <LoginPage />   //eski hali(hepsi bir aradayken) */}
        <SignUpPage/>
      </ThemeProvider>
    </div>
  );
}
export default App;