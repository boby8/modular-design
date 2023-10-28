import "./styles.css";
import GradeIcon from "@mui/icons-material/Grade";
const BelowMiddle = () => {
  return (
    <div className="dflex flex-col wrapper">
      <div className="dflex justify-content-between container">
        <p className="textStyle">We offer a range of innovative solutions </p>
        <p className="subText">
          Our solutions can help our clients to automate
          <br /> their operations, optimize their workflows, and <br />
          transform their businesses.{" "}
        </p>
      </div>
      <div className="borderContainer"></div>
      <div className="dflex">
        <div className="dflex flex-col wl g10">
          <div className="dflex g10">
            <div className="listText">
              <p className="m0">Predictive analytics</p>
              <GradeIcon />
            </div>
          </div>
          <div className="dflex g10">
            <div className="listText">
              <p className="m0">AI development</p>
              <GradeIcon />
            </div>
            <div className="listText">
              <p className="m0">Industry 4.0</p>
              <GradeIcon />
            </div>
          </div>
          <div className="dflex g10">
            <div className="listText">
              <p className="m0">Deep learning</p>
              <GradeIcon />
            </div>
            <div className="listText">
              <p className="m0">Neural networks</p>
              <GradeIcon />
            </div>
            <div className="listText">
              <p className="m0">Big data</p>
              <GradeIcon />
            </div>
          </div>
        </div>

        <div className="wr">
          <p>Meet the CtF</p>
          <p>
            Our team of skilled developers and engineers has expertise in a
            variety of cutting-edge technologies, including machine learning,
            natural language processing, computer vision, and robotics.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BelowMiddle;
