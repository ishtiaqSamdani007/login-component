import React from "react";
import Typography from "../Atoms/Typography";
import Icon from "../Atoms/Icon";
interface Props {
  src: string;
  authProvider: string;
}
function AuthCard({ src, authProvider }: Props) {
  return (
    <>
      <div className="auth-card">
        <Icon
          src={src}
          alt="social-icon"
          width="20px"
          height="20px"
          margin="0 auto"
        />
        <Typography
          text={authProvider}
          fontWeight="500"
          fontSize="14px"
          color="#333"
          lineHeight="20px"
        />
      </div>
    </>
  );
}

export default AuthCard;
