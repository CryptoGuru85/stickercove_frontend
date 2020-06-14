import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"


export const Loader = () => (
  <div className="loading flex flex-column">
    <FontAwesomeIcon icon={faSpinner} />
    <span>Loading...</span>
  </div>
)

 Loader
