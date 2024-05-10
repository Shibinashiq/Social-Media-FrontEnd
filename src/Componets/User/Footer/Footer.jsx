import { Home, User } from "lucide-react";
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
    <div className="fixed bottom-0  w-full">
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  py-6 text-center bg-black">
      <div className="mr-14 flex felx-row gap-8 ">
        
      <Home  onClick={goToUserHomepage}/>
          {/* <Search /> */}
        
          <User onClick={goToUserprofilepage} />
      </div>
      </footer>
    </div>
  );
}
