import { render, screen } from '@testing-library/react';
import { Application } from './Application';

describe('Application', () => {
  test('should renders correctly', () => {
    render(<Application />);

    //I. getByRole query should always be a preferece
    //heading
    const pageHeading = screen.getByRole('heading', {
      level: 1 //=> we can specify the level for role heading h1/h2 for headings instead of using name: "something"
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', {
      level: 2
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'Name'
    });
    expect(nameElement).toBeInTheDocument();

    //II. we can get an element getbylabeltext and pass selector key to specify the type input/selector...
    const nameElement2 = screen.getByLabelText(/name/i, {
      selector: 'input' //=> you can access the name with a string or regex
    });
    expect(nameElement2).toBeInTheDocument();

    //III. we can use the getByPlaceholderText for inputs

    //IV. we ca use getByText to find p, div or span elements
    const paragraphElement = screen.getByText('All fields are mandatory', {
      selector: 'p' //=> getByText also accesss a selector
    });
    expect(paragraphElement).toBeInTheDocument();

    //V. we ca use getByInputValue input value to find p, div or span elements

    //VI. we may use getByAltText for img input and area
    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

    //V. getByTitle title as param of a p span ...
    const closeElement = screen.getByTitle('close');
    expect(closeElement).toBeInTheDocument();

    //VI. getByTestId data-testid
    const dataTestElement = screen.getByTestId('custom-element');
    expect(dataTestElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio'
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole('button');
    expect(submitElement).toBeInTheDocument();
  });
});

/**Priority Order For Queries
 * getByRole
 * getByLabelText
 * getByPlaceholderText
 * getByText
 * getByDisplayValue
 * getByAltText
 * getByTitle (not consistent)
 *
 * getByTestId only recommended for dynamic text
 *
 */
