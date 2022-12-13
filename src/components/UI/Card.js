import "./Card.scss";
import {getImageUrl} from '../../utiles/utils';

import { firstWordCapital, formateId, getBackground, getTypes } from '../../utiles/utils';
function Card(props) {
  return (
    <>
      <div className="card card-border align-items-center justify-content-center" style={{ background: getBackground(getTypes(props.pokemon)) }}>
        <img src={getImageUrl(props.pokemon.id)} className="card-img-top img-size" alt="..." />
        <div className="card-body">
          <p className="text-center m-0 fw-bold">
            {firstWordCapital(props.pokemon.name)}
          </p>
          <p className="text-center m-0">{formateId(props.pokemon.id)}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
