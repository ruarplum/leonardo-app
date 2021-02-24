import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Profile", "Settings", "Help Center"];
const defaultOption = options[0];
<Dropdown
  options={options}
  onChange={this._onSelect}
  value={defaultOption}
  placeholder="User Option"
/>;
