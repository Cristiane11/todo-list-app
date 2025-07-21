import PropTypes from 'prop-types';
import {string} from 'prop-types'

const Teas =(props) =>{
    return(
        <div>
            <h3>Chás</h3>
            <h6>{props.customMessage}</h6>
            <p>Chá Verde</p>
            <p>Chá de Maracujá</p>
            <p>Chá de Camomila</p>
        </div>
    )
}

Teas.propTypes = {
    customMessage: string
};
export default Teas;