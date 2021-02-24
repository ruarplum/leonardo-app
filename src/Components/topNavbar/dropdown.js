import Dropdown from "react-dropdown";
import "./dropdown.css";

const options = ["Profile", "Settings", "Help Center"];
const defaultOption = options[0];
<label>
  <Dropdown
    options={options}
    onChange={this._onSelect}
    value={defaultOption}
    placeholder="User Option"
  />
</label>;
