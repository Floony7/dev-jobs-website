import React, { useEffect, useState } from "react";

type Variant = "primary" | "success";
type ButtonProps = {
  variant: Variant;
  children: React.ReactNode;
};
const Button = ({
  variant = "primary",
  children,
}: ButtonProps): JSX.Element => {
  const [bgColor, setBgColor] = useState("#2557a7");

  useEffect(() => {
    switch (variant) {
      case "primary": {
        setBgColor("#2557a7");
      }
      case "success": {
        setBgColor("#2a863b");
      }
      default:
        break;
    }
  }, [variant]);

  return (
    <button className="p-6" style={{ backgroundColor: bgColor }}>
      {children}
    </button>
  );
};

export default Button;
