/**
 * Greet should render the text hello and if name is passed into the component
 * It should render hello followed by the name
 */

import { render, screen } from '@testing-library/react';
import { Greet } from './Greet';

describe('Greet', () => {
  //get by text
  test('should greet render correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    //using regex and ignoring text style
    expect(textElement).toBeInTheDocument();
    //to be in the document is a matcher of jest, check jest-dom for more matchers
  });

  test('Greet renders with a name', () => {
    render(<Greet name='buddy' />);
    const textElement = screen.getByText('Hello buddy');
    expect(textElement).toBeInTheDocument();
  });
});

//jest documentation suggest one describe per file
