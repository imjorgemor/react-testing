import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Counter2 } from './Counter2';

//keyboard interactions

describe('<Counter2 />', () => {
  test('should render a count of 10 after clicking set button ', async () => {
    user.setup();
    render(<Counter2 />);
    const amountInput = screen.getByRole('spinbutton');
    await user.type(amountInput, '10');
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole('button', {
      name: 'Set'
    });
    await user.click(setButton);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('10');
  });

  test('elements are focused in the right order', async () => {
    user.setup();
    render(<Counter2 />);
    const amountInput = screen.getByRole('spinbutton');
    const setButton = screen.getByRole('button', {
      name: 'Set'
    });
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();

    //utility apis
    //await user.selectOptions() for a combobox
    //await user.upload(input, file) for a combobox

    //clipboard api
    //copy()
    //cut()
    //paste()

    //keyboardApi
    //keyboard('test')
  });
});
