import {
	DirectionsCarOutlined,
	MapOutlined,
	TopicOutlined,
} from '@mui/icons-material';

export interface NavLink {
	text: string;
	path: string;
	icon: string | React.ReactElement;
}

export const navLinks: NavLink[] = [
	{
		text: 'Dispatch',
		path: '/dispatch',
		icon: <DirectionsCarOutlined fontSize="small" />,
	},
	{
		text: 'Approvals',
		path: '/approvals',
		icon: <MapOutlined fontSize="small" />,
	},
	{
		text: 'Downloads',
		path: '/downloads',
		icon: <TopicOutlined fontSize="small" />,
	},
];
