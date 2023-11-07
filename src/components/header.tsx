import { AppBar, Stack, Tab, Tabs as MuiTabs } from '@mui/material';
import { navLinks } from '../utils/links';
import { Link, useLocation } from 'react-router-dom';
export const headerStyles = {
	borderBottomWidth: 1,
	borderBottomStyle: 'solid',
	borderColor: 'grey.200',
	boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.06)',
	px: 5,
	height: 64,
};

const tabSx = {
	minHeight: 64,
	'.MuiTab-iconWrapper': {
		mr: 2,
	},
};

export function Header(): JSX.Element {
	return (
		<AppBar position="fixed" color="inherit" sx={headerStyles}>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				height="100%"
			>
				
				<Stack direction="row" spacing={6} display={{ xs: 'none', sm: 'flex' }}>
					<Tabs />
				</Stack>
				<Stack display={{ xs: 'none', sm: 'flex' }}>
          Account Menu
				</Stack>
				<Stack display={{ xs: 'flex', sm: 'none' }}>
          Drawer
				</Stack>
			</Stack>
		</AppBar>
	);
}

function Tabs() {
	const location = useLocation();

	const links = navLinks;
	const currentNavLinkValue = links.find(link =>
		location.pathname.includes(link.path),
	)?.path;

	return (
		<MuiTabs value={currentNavLinkValue ?? false}>
			{links.map(link => (
				<Tab
					key={link.path}
					label={link.text}
					value={link.path}
					to={link.path}
					component={Link}
					icon={link.icon}
					sx={tabSx}
				/>
			))}
		</MuiTabs>
	);
}
