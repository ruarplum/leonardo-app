import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { AiOutlineUser } from "react-icons/all";

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
<label>
  <AiOutlineUser />
</label>;
