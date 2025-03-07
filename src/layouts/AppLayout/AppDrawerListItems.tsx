/**
 * @module @sbom-harbor-ui/dashboard/views/App/AppDrawerListItems
 */
import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'

const MenuLink = ({
  title,
  to,
  icon,
}: {
  title: string
  to: string
  icon?: JSX.Element
}) => (
  <Link to={to} component={RouterLink}>
    <ListItemButton sx={{ margin: 'auto' }}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={title} />
    </ListItemButton>
  </Link>
)

const MenuListItems = () => (
  <React.Fragment>
    {/* Dashboard */}
    <MenuLink title="Dashboard" to="" icon={<DashboardIcon />} />
  </React.Fragment>
)

export default MenuListItems
