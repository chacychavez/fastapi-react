import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<Box>
			<Link to="/login">Login</Link>
		</Box>
	);
}

export default Home;
