import "./styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import abc from "../../assets/Images/Vector.png";
import BlackCircle from "../../assets/Images/BlackCircle.png";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BelowMiddle from "./belowMiddle";
const MiddleSection = () => {
  return (
    <>
    <div className="dflex">
      <div className="developerTeamContainer">
        <Card
          sx={{ background: "#222", borderRadius: "20px", color: "#ffffff" }}
        >
          <CardContent sx={{ padding: "30px" }}>
            <div className="dflex flex-col" style={{ gap: 100 }}>
              <div className="dflex flex-col">
                <p className="creatFuture">Creating the Future</p>
                <div className="dflex align-items-center g30">
                  <p className="text">
                    Innovative AI
                    <br /> Developer Team
                  </p>
                  <div>
                    <img src={abc} alt="" />
                  </div>
                </div>
              </div>
              <div>
                <p className="creatFuture">
                  AI is revolutionizing the future of technology, and our
                  <br /> team of developers is motivated to push the boundaries
                  <br /> of what's possible with this incredible tool
                </p>
                <div className="plusContainer">
                  <AddCircleOutlineIcon sx={{ width: 100 }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="innovationContainer">
        <Card sx={{ background: "#ffffff", borderRadius: "15px" }}>
          <div className="blackButtonContainer">
            <img src={BlackCircle} />
          </div>
          <CardContent sx={{ padding: "30px" }}>
            <div>
              <p className="pinkText">
                Achieved through a variety of methods, <br />
                including experimentation, creative problem-solving
              </p>
              <p className="pinkText" style={{ fontSize: 36 }}>
                Innovate
              </p>
            </div>
          </CardContent>
        </Card>
        <div className="dflex">
          <div style={{ width: "70%", position: "relative" }}>
            <Card
              sx={{
                background: "#4800E2",
                borderRadius: "15px",
                color: "#ffffff",
              }}
            >
              <CardContent sx={{ padding: "30px" }}>
                <div className="blueContainerimage">
                  <img src={BlackCircle} />
                </div>
                <div>
                  <p className="pinkText" style={{ color: "#ffffff" }}>
                    Deploying robotics and <br /> other automation tools{" "}
                  </p>
                  <p
                    className="pinkText"
                    style={{ color: "#ffffff", fontSize: 36 }}
                  >
                    Automate
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card
              sx={{
                background: "#E3007B",
                borderRadius: "15px",
                color: "#ffffff",
              }}
            >
              <div className="blackButtonContainer">
                <img src={BlackCircle} />
              </div>
              <CardContent sx={{ padding: "30px" }}>
                <div>
                  <p className="pinkText" style={{ color: "#ffffff" }}>
                    Rethinking business models
                  </p>
                  <p
                    className="pinkText"
                    style={{ color: "#ffffff", fontSize: 36 }}
                  >
                    Transform
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <BelowMiddle />
    </>
  );
};

export default MiddleSection;
