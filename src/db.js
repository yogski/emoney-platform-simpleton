import { EnvCmd } from 'env-cmd';
import postgres from 'postgres';

export default callback => {
	// connect to a database if needed, then pass it to `callback`:

	const sql1 = postgres({
		host: process.env.DB_SQL1_HOST,
		port: process.env.DB_SQL1_PORT,
		username: process.env.DB_SQL1_USERNAME,
		password: process.env.DB_SQL1_PASSWORD,
		database: process.env.DB_SQL1_DATABASE
	})
	callback({sql1});
}
