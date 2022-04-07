import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../../assets/images/ncoop-logo.png";
import { useValidateLink } from "../../lib/query/user";
import { tempKey } from "../../utils/constants";
import storage from "../../utils/storage";

const ConfirmLink = () => {
  const history = useHistory();
  const path = history.location.pathname;
  const token = path.slice(17);

  const { data, status } = useValidateLink(token, {});

  React.useEffect(() => {
    if (status === "success") {
      toast.success(data?.message);
      history.push("/change-password");
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

export default ConfirmLink;
