import "./styles.css";

type ButtonProps = {
  children: string | JSX.Element | JSX.Element[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function Button(props: ButtonProps) {
  const { children, onClick } = props;

  return (
    <button onClick={onClick} className="button__primary">
      {children}
    </button>
  );
}

export default Button;
