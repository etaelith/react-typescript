import React from "react";
import styles from "@/styles/signupContainer.module.css";
import { AuthContainerProps } from "@/interfaces/interfaces";
const AuthContainer: React.FC<AuthContainerProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <div className={styles.div}>
      {childrenArray.map((item, index) => (
        <div key={index} className={styles.container}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default AuthContainer;
