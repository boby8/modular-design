import "./styles.css";
import { Avatar } from "@mui/material";
const Header = () => {
  interface listType {
    name: string;
  }
  const lists: listType[] = [
    { name: "About" },
    { name: "Our team" },
    { name: "Project" },
    { name: "Contacts" },
  ];
  return (
    <div>
      <div className="wrapper">
        <p className="developer">AI Developer Team</p>
        <div className="dflex g20">
          {lists.map((res) => (
            <div className="">{res.name} </div>
          ))}
        </div>
        <div className="userProfile">
          <div className="joinTeam">Join team</div>
          <Avatar
            alt="Bobby"
            sx={{ bgcolor: "white", color: "black" }}
            src="/broken-image.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
