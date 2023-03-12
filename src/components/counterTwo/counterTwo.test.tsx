import { render, screen } from '@testing-library/react';
import { CounterTwo } from './CounterTwo';
import user from '@testing-library/user-event';

//mocking functions with jest
describe('<CounterTwo />', () => {
  test('should first', () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText('Counter Two');
    expect(textElement).toBeInTheDocument();
  });

  test('should handlers are called', async () => {
    //we mock the functions and pass them to the component
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });

    //we use user.click to call the buttons and thus the functions
    await user.click(incrementButton);
    await user.click(decrementButton);

    //expect that the mocked functions have been called
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
