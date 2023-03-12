import { MuiMode } from './components/mui';
import { Users } from './components/users';
import { AppProviders } from './providers';

const App = () => {
  return (
    <AppProviders>
      <div className='app'>
        <h1>Hello react testing with jest and typescript!!!!</h1>
        <MuiMode />
        <Users />
      </div>
    </AppProviders>
  );
};

export default App;
