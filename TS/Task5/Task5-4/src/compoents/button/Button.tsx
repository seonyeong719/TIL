export type BtnStyle = {
  variant: string;
  size: string;
  children: React.ReactNode;
  onClick?: () => void;
};

type ButtonStyle = Partial<BtnStyle>;

const Button: React.FC<ButtonStyle> = ({ variant, size, children, ...rest }) => {
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
