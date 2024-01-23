import NewDelhi from "./images/NewDelhi.jpg";
import Gurgaon from "./images/Gurgaon.jpg";
import Pune from "./images/Pune.jpg";
import Kolkata from "./images/Kolkata.jpg";
import Chennai from "./images/Chennai.jpg";
import Hyderabad from "./images/Hyderabad.jpg";
import Bengaluru from "./images/Bengaluru.jpg";
import Coimbatore from "./images/Coimbatore.jpg";
import Bhubaneswar from "./images/Bhubaneswar.jpg";
import Ourstoredata from "../ourstore.json";
// const Ourstoredata =

const updatedOurstoredata = Ourstoredata.map((item) => ({
  ...item,  //sread operator  to copy object
  imgdata: getImagePath(item.imgdata)
}));

function getImagePath(imgdata) {
  switch (imgdata) {
    case "NewDelhi":
      return NewDelhi;
    case "Gurgaon":
      return Gurgaon;
    case "Pune":
      return Pune;
    case "Kolkata":
      return Kolkata;
    case "Chennai":
      return Chennai;
    case "Hyderabad":
      return Hyderabad;
    case "Bengaluru":
      return Bengaluru;
    case "Coimbatore":
      return Coimbatore;
    case "Bhubaneswar":
      return Bhubaneswar;
    default:
      return ""; // Default to an empty string or handle accordingly
  }
}

export default updatedOurstoredata;
