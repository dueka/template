import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../../assets/images/ncoop-logo.png";
import { useValidateSignupLink } from "../../lib/query/user";
import { Routes } from "../../routes/routes-constants";
import { tempKey } from "../../utils/constants";
import storage from "../../utils/storage";

const ConfirmSignup = () => {
  const history = useHistory();
  const path = history.location.pathname;
  const token = path.slice(21);

  const { data, status } = useValidateSignupLink(token, {});

  React.useEffect(() => {
    if (status === "success") {
      toast.success(data?.message);
      history.push({
        pathname: Routes.SignUp,
        state: { username: data.username }
      });
    }

    if (status === "error") {
      toast.error(data?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.message, status]);

  React.useEffect(() => {
    storage.remove(tempKey);
  }, []);

  return (
    <div className="validate-link">
      <img src={Logo} alt="logo" />

      <h4>Validating link...</h4>
    </div>
  );
};

export default ConfirmSignup;
