import Avator1 from "../Pics/avator1.jpg";
import Avator2 from "../Pics/avator2.jpg";
import Avator3 from "../Pics/avator3.jpg";
function AdminCards(){
    return(
        <div className="adminHold">
            <h3> ADMINISTRATORS </h3>
            <div className="admD">
                <ul>
                    <li>
                        <img src={Avator1} alt="DPO" className="iconProfile" />
                       <h3> DPO</h3> 
                       <p className="abou">
                            KHAITSA MARGARET
                       </p>
                       <p>
                           <button className="view_button"> View More </button>
                       </p>
                    </li>
                    <li>
                        <img src={Avator2} alt="Principal" className="iconProfile" />
                        <h3> PRINCIPAL</h3> 
                       <p className="abou">
                            OKELLO HUMPHREYS
                       </p>
                       <p>
                           <button className="view_button"> View More </button>
                       </p>
                    </li>
                    <li>
                        <img src={Avator3} alt="DPP" className="iconProfile" />
                        <h3> DPP</h3> 
                       <p className="abou">
                            ALINDA B. SALVATORE
                       </p>
                       <p>
                           <button className="view_button"> View More </button>
                       </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default AdminCards;