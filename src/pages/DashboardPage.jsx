import { useLogout } from "../hooks/useLogout";

const DashboardPage = () => {
  const { logout, isLoading } = useLogout();
  return <button onClick={logout}>Logout</button>;
};

export default DashboardPage;
