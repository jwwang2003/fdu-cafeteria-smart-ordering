import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Copyright(props: any) {
  return (
    <Box pt={2}>
      <Typography  variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/jwwang2003">
          Jimmy Jun Wei Wang (王俊崴)
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}