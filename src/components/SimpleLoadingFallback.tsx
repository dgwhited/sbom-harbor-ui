/**
 * @module @sbom-harbor-ui/dashboard/hooks/SimpleLoadingFallback
 */
import Container from '@mui/material/Container'

const Fallback = (): JSX.Element => (
  <Container data-testid="simple-loading-fallback">Loading...</Container>
)

export default Fallback
