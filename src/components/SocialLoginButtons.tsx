/**
 * A component that renders a horizontal list of social login buttons.
 * @module @sbom-harbor-ui/dashboard/components/SocialLoginButtons
 * @see {@link @sbom-harbor-ui/dashboard/components/Header} for usage.
 */
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Google from 'mdi-material-ui/Google'

const SocialLoginButtons = (): JSX.Element => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Grid
      spacing={3}
      container
      sx={{
        justifyContent: 'center',
      }}
    >
      <Grid item style={{ paddingTop: 0 }}>
        {/* TODO: implement with identity provider */}
        <Link to="/" reloadDocument>
          <Google sx={{ color: '#db4437' }} />
        </Link>
      </Grid>
    </Grid>
  </Box>
)

export default SocialLoginButtons
