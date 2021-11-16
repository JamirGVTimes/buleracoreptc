import handover_poss from "../Pics/handover_poss.jpg";
function Content() {
  return (
    <div className="cont_data">
        Hello world...
          <h3> RECENT UPDATES </h3>
        <div className="r_updates">
        
          <img src={handover_poss} alt="hand" className="update-post" />
          <h4>BULERA CORE PTC GETS A NEW DPP</h4>
          <p>
            Mr. BYARUHANGA ALINDA SALVATORE is the new <b>Deputy Principal.</b> <br></br>
            Mr. TINGIRAMURUNGI GALIMAK LUAMI Officially handed over to Mr. Alinda on Wednesday 11th-November-2021 in the presence of Our beloved Principal Okello Humphreys, Ms. Khaitsa Magaret (DPO) and Ms. Evath Kaahwa (DOS). <br></br>
             <button>Read more...</button>
          </p>
        </div>
    </div>
  );
}

export default Content;
