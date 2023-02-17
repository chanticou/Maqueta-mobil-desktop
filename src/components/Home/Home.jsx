import { Loguin } from "../Loguin/Loguin";
import homeImage from "../../assets/images/background-image.jpg";
import "./Home.css";
export const Home = () => {
  return (
    <>
      <div className="home_content_home">
        <div className="home_content_image">
          <img className="home_image" src={homeImage} alt="Home image"></img>
        </div>

        <div className="home_content_loguin">
          <Loguin />
        </div>
      </div>
    </>
  );
};
