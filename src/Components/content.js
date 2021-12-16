import UpdatesCore from "./updates";
import logo from "../Pics/BULERA_LOGO.png";
import AdminCards from "./adminCards";
function Content() {
  return (
    <div className="cont_data">
        <div className="img_slider">
           
           <div className="img_slide_content">
              <img src={logo} alt="bulera_logo" className="logob" /> 
              <p>
                <h2> BULERA CORE PTC - HOIMA </h2>
                 <h4>P.O BOX 200, HOIMA (U) </h4>
                 <hr className="border_g" />
                 "Education For Responsibility"
              </p>
           </div>
        </div>
        <div className="cards">
          <AdminCards />
        </div>

        <div className="updatesy">
            <h3> RECENT UPDATES </h3>
              <div className="up1">
                <UpdatesCore />
                
              </div>
        </div>
            
    </div>
  );
}

export default Content;
