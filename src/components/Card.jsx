import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { color } from "@mui/system";
export function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.openSpots < 5) {
    badgeText = "HURRY!";
  } else {
    badgeText = "OPEN";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.image} alt="random" className="card--image" />
      <div className="card-body">
        <div className="upper-content">
          <LocationOnIcon className="location--icon" />
          <span>{props.location}</span>
          <div className="view-link">
            <a href={props.link}>View</a>
          </div>
        </div>
        <h2 className="card-title">{props.title}</h2>
        <div className="date-view">
          <span>
            {props.start_date}-----{props.end_date}
          </span>
        </div>
        <p className="card-text">{props.description}</p>
        <div className="card-rating">
          {[...Array(props.rating)].map((star, i) => (
            <StarIcon key={i} className="star--icon" />
          ))}
        </div>
      </div>
    </div>
  );
}
