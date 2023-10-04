import { ModalParent } from "./modal-parent";
import { UserList } from "./components/Userlist/userlist";
import { useState } from "react";
import { IntegrationWithBackend } from "./components/integration";

export function App() {
  const [showUserList, setShowUserList] = useState(false);
  return (
    <>
      <IntegrationWithBackend />
      <ModalParent />
      {showUserList ? (
        <button
          type="button"
          onClick={() => {
            setShowUserList(false);
          }}
        >
          Hide Users
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setShowUserList(true);
          }}
        >
          Show Users
        </button>
      )}

      {showUserList ? <UserList /> : null}
    </>
  );
}
