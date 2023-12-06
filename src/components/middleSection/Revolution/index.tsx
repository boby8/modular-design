import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./styles.css";
import Stone from "../../../assets/Images/Stone.png";
import { useEffect } from "react";
const Revolution = () => {
  useEffect(()=>{
    console.log('mount');
  },[])
  return (
    <div className="dflex flex-wrap">
      <div className="revolutionContainer">
        <Card
          sx={{ background: "#FFC700", borderRadius: "20px", color: "#ffffff" }}
        >
          <CardContent sx={{ padding: "30px" }}>
            <div className="dflex flex-col" style={{ gap: 40 }}>
              <div className="dflex flex-row">
                <p className="percentage">33.33%</p>
                <p className="percentage">Insurence</p>
              </div>

              <div className="imgContainer">
                <img src={Stone} alt="" />
              </div>

              <div className="dflex flex-row justify-content-between align-items-end">
                <p className="revolutionText">
                  Revolutionizing the Insurance Industry
                </p>
                <p className="aiText">
                  How an AI-Powered Chat Increased Sales by 33%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="caseStudyContainer">
        <Card sx={{ background: "#222", borderRadius: "15px" }}>
          <CardContent sx={{ padding: "30px" }}>
            <div className="dflex flex-col g30">
              <p className="caseStudy">Case Study</p>
              <p className="caseStudy">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                necessitatibus omnis, ab impedit facilis optio placeat maiores,
                adipisci odit quasi velit minus, cum ducimus labore laboriosam
                laudantium ullam! Ut, voluptates?
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Revolution;
