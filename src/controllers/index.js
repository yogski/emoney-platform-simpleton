import { version } from '../../package.json';
import { Router } from 'express';
import accountsSQL from './accounts.sql1';

export default ({ config, db }) => {
	let api = Router();

	// mount the resource
	api.use('/accounts-sql', accountsSQL( config, db.sql1));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
