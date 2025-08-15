import { useAuth } from "../../../../contexts/FakeAuthContext";

function User() {
  const { user } = useAuth();

  return (
    <div className="flex items-center gap-2">
      <div className="flex h-[3rem] w-[3rem] items-center justify-between overflow-hidden rounded-full border border-gray-500">
        <img
          src={user?.avatar}
          alt="User Avatar"
          className="h-full w-full object-cover"
        />
      </div>
      <span className="font-medium">{user?.name}</span>
    </div>
  );
}

export default User;
