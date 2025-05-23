import { useNavigate } from "react-router-dom";

export function ButtonLogoutComponent (){
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authtoken");
    navigate("/login"); 
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      Sair
    </button>
  );
};