interface Props {
  name: string;
}
export const Greet = ({ name }: Partial<Props>) => {
  return <div>Hello {name}</div>;
};
