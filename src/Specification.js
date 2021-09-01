import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMemory } from '@fortawesome/free-solid-svg-icons';
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';

export function Specification({ specs }) {
    console.log("soecs", specs);
    return (

        <ul className="list">
            <h3>specs</h3>
            <li>
                {specs.os === "IOS" ? <AppleIcon /> : <AndroidIcon />} {specs.os}</li>
            <li><FontAwesomeIcon icon={faMemory} /> {specs.ram}</li>
        </ul>
    
    );
}
