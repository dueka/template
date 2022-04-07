import ReactTagInput from "@pathofdev/react-tag-input";
import React from "react";
import { Modal } from "react-bootstrap";
import "@pathofdev/react-tag-input/build/index.css";
import Select from "react-select";
import { useInviteUser } from "../../lib/query/user";
import { toast } from "react-toastify";

interface AddUsersModalProps {
  isAddUserModal: boolean;
  handleClose: Function;
}

const AddUsersModal: React.FC<AddUsersModalProps> = ({
  handleClose,
  isAddUserModal
}) => {
  const [emails, setEmails] = React.useState<string[]>([]);
  const [emailError, setEmailError] = React.useState("");
  const [userRole, setUserRole] = React.useState<any>({});

  // todo: consume endpoint to fetch list of roles
  const roleList = [
    { value: "ADMINISTRATOR", label: "Administrator" },
    { value: "AGENT", label: "Agent" }
  ];

  const { mutate, isLoading } = useInviteUser();

  async function handleUserCreation() {
    const payload: { type: string; invitations: { email: string }[] } = {
      type: userRole.value,
      invitations: []
    };

    emails.forEach((email) => payload.invitations.push({ email: email }));

    await mutate(payload, {
      onSuccess: async (response: { message: string }) => {
        toast.success(response.message);
        handleClose();
        setEmails([]);
      },
      onError: (err: any) => {
        toast.error(err);
      }
    });
  }

  return (
    <Modal show={isAddUserModal} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Invite user(s)</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="add-user-element">
          <label>Enter one or multiple email address</label>
          <ReactTagInput
            tags={emails}
            placeholder="Type and press enter"
            maxTags={3}
            editable={true}
            readOnly={false}
            removeOnBackspace={true}
            onChange={(emails) => setEmails(emails)}
            validator={(value) => {
              const isEmail = value.indexOf("@") !== -1;
              if (!isEmail) {
                setEmailError("Please enter an e-mail address");
              } else {
                setEmailError("");
              }
              return isEmail;
            }}
          />
          <p className="small text-danger">{emailError}</p>

          <label>Select role</label>
          <Select
            options={roleList}
            className="role-select mb-3"
            placeholder="Select a role"
            onChange={(e: any) => setUserRole(e)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-primary px-4"
          onClick={handleUserCreation}
          disabled={isLoading}
        >
          Invite users
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddUsersModal;
