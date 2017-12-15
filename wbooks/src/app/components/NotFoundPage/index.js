import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import { ROOT } from '../../../config/routes';

const NotFoundPage = () =>
	<div className="not-found">
		<h1 className="not-found-title">404</h1>
		<p className="not-found-text">No hay nada que ver aqu&iacute;.</p>
		<p className="not-found-link-home"><Link to={ROOT}>Volver</Link></p>
	</div>

export default NotFoundPage;
