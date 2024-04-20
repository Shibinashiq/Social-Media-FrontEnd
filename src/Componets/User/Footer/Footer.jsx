import { Home, Search, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Footer() {
const navigate = useNavigate()
const goToUserprofilepage = () => {
  navigate('/Userprofile');
};
const goToUserHomepage = () => {
  navigate('/');
};
  return (
    <div className="fixed bottom-0 left-0 w-full">
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  py-6 text-center bg-black">
      <Home  onClick={goToUserHomepage}/>
          <Search />
        
          <User onClick={goToUserprofilepage} />
      </footer>
    </div>
  );
}
