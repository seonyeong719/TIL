export type ButtonStyle = {
  variant: string;
  size: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type Colors = {
  variant: string;
  size: string;
};

const Button: React.FC<ButtonStyle> = ({ variant, size, children, onClick, ...rest }) => {
  return (
    <button
      style={{
        backgroundColor: variant === "primary" ? "blue" : "red",
        fontSize: size === "small" ? "10px" : "20px",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
