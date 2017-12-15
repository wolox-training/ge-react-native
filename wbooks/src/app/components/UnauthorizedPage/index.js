import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import { ROOT } from '../../../config/routes';

const NotFoundPage = () =>
  <div className="not-found">
    <h1 className="not-found-title">No Autorizado</h1>
    <p className="not-found-text">Inicia Sesi&oacute;n.</p>
    <p className="not-found-link-home"><Link to={ROOT}>Volver</Link></p>
  </div>

export default NotFoundPage;
