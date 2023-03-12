import { render, screen, logRoles } from '@testing-library/react';
import { Skills } from './Skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];

  // getByRole
  test('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  //getByRoleAll
  test('should render a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });

  //getByText text match
  test('should render hello world', () => {
    render(<Skills skills={skills} />);
    const helloWorld = screen.getByText('Hello World');
    const helloWorldRegex = screen.getByText(/^hello world$/i);
  });

  //renders conditional
  test('should renders login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', {
      name: 'Login'
    });
    expect(loginButton).toBeInTheDocument();
  });

  //queryBy and queryAllBy useful for asserting an element is not in the dom
  //getBy could be subsituted by queryBy when an element is not present in the dom =>returns null if no element match
  test('should start leargnin button is not render', () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning'
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  //findBy returns a promise has a default timeout 1000 but you can change it with teh timeout prop. findby is usefull for async code
  test('should start learning button is eventually in the dom', async () => {
    const view = render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning'
      },
      {
        timeout: 2000
      }
    );
    //debuging
    //logRoles(view.container); //=> useful for debugging test
    //screen.debug();
    expect(startLearningButton).toBeInTheDocument();
  });
});
