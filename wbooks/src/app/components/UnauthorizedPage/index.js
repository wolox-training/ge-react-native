import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import { ROOT } from '../../../config/routes';

const NotFoundPage = () =>
	<div className="not-found">
		<h1 className="not-found-title">Not authorized</h1>
		<p className="not-found-text">Sorry, there is nothing to see here.</p>
		<p className="not-found-link-home"><Link to={ROOT}>Login</Link></p>
	</div>

export default NotFoundPage;
