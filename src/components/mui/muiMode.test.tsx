import { render, screen, logRoles } from '../../testUtils';
import { MuiMode } from './MuiMode';
import { AppProviders } from '../../providers';

//test with context providers like theme
describe('<MuiMode />', () => {
  test('should renders text correctly', () => {
    // render(<MuiMode />, {
    //     wrapper: AppProviders
    // });
    render(<MuiMode />);
    const headingElement = screen.getByRole('heading', { level: 2 });
    expect(headingElement).toHaveTextContent('dark mode');
  });
});
