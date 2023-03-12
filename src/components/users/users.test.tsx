import { render, screen } from '@testing-library/react';
import { Users } from './Users';
import { rest } from 'msw';
import { server } from '../../mocks/server';

describe('Users', () => {
    test('renders correctly', async() => {
        render(<Users />);
        const textElement = screen.getByText('Users');
        expect(textElement).toBeInTheDocument();
        screen.debug();
    });

    

    // test('renders error', async () => {
    //     server.use(
    //         rest.get(
    //             'https://jsonplaceholder.typicode.com/users',
    //             (req, res, ctx) => {
    //                 return res(ctx.status(500));
    //             }
    //         )
    //     );
    //     render(<Users />);
    //     const error = await screen.findByText('Error fetching users');
    //     expect(error).toBeInTheDocument();
    // });
});
