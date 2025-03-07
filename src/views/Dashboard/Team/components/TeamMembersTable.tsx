/**
 * A component that renders a table of team members with their details.
 * @module @sbom-harbor-ui/dashboard/views/Dashboard/Team/TeamMembersTable
 */
import { type ReactElement } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CogIcon from 'mdi-material-ui/Cog'
import AccountIcon from 'mdi-material-ui/AccountOutline'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import UserAvatar from '@/components/UserAvatar'
import { TeamMemberRole, TeamMemberTableRow } from '@/types'

type UserRoleToIconObject = {
  [key: string]: ReactElement
}

/**
 * @constant {RoleIconsObject} roleIcons Mapping of user roles to their icons.
 */
const roleIcons: UserRoleToIconObject = Object.freeze({
  [TeamMemberRole.TEAM_LEAD]: <CogIcon sx={{ mr: 1, color: 'error.main' }} />,
  [TeamMemberRole.MEMBER]: (
    <AccountIcon sx={{ mr: 1, color: 'primary.main' }} />
  ),
})

type RenderCellProps = {
  row: TeamMemberTableRow
}

/**
 * The configuration object for the columns of the team members table,
 *  where each row represents a user that is a member of the team.
 * @constant {GridColDef[]} columns The columns for the team members table
 * @constant {GridColDef} columns[0] The first column with the user's avatar.
 * @constant {GridColDef} columns[1] The second column with the user's display
 *  name. Currently, this displays the part of the email before the '@' symbol.
 * @constant {GridColDef} columns[2] The third column with the user's email.
 * @constant {GridColDef} columns[3] The fourth column with the user's role.
 */
const columns: GridColDef[] = [
  {
    flex: 0.05,
    field: 'avatarSrc',
    headerName: '',
    renderCell: ({ row }: RenderCellProps) => <UserAvatar {...row} />,
  },
  {
    flex: 0.33,
    field: 'id',
    headerName: 'ID',
  },
  {
    flex: 0.165,
    field: 'name',
    headerName: 'User',
    renderCell: ({ row }: RenderCellProps) => (
      <Typography variant="body2" sx={{ color: 'text.primary' }}>
        {row.email.split('@')[0]}
      </Typography>
    ),
  },
  {
    flex: 0.2,
    field: 'email',
    headerName: 'Email',
    renderCell: ({ row: { email } }: RenderCellProps) => (
      <Typography variant="body2">{email}</Typography>
    ),
  },
  {
    flex: 0.165,
    minWidth: 130,
    field: 'role',
    headerName: 'Role',
    renderCell: ({
      // if the user's "isTeamLead" property is true, then set the user's
      // role to "admin". otherwise, set the user's role to "member".
      row: {
        isTeamLead = false,
        role = isTeamLead ? TeamMemberRole.TEAM_LEAD : TeamMemberRole.MEMBER,
      },
    }: RenderCellProps) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {roleIcons[role]}
        <Typography
          sx={{ color: 'text.secondary', textTransform: 'capitalize' }}
        >
          {role}
        </Typography>
      </Box>
    ),
  },
]

type InputProps = {
  members: TeamMemberTableRow[]
}

/**
 * A component that renders a table of team members with their details.
 * @param {InputProps} props Input props for the TeamMembersTable component.
 * @param {TeamMemberTableRow[]} props.members - The list of team members.
 * @returns {JSX.Element} A component that renders a datagrid table of team members.
 */
const TeamMembersTable = ({ members }: InputProps) => (
  <Card>
    <DataGrid
      autoHeight
      hideFooter
      rows={members}
      columns={columns}
      disableSelectionOnClick
      pagination={undefined}
    />
  </Card>
)

TeamMembersTable.displayName = 'TeamMembersTable'

export default TeamMembersTable
