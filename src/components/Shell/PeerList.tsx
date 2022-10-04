import { PropsWithChildren } from 'react'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItemButton from '@mui/material/ListItemButton'
import Typography from '@mui/material/Typography'

import { PeerListHeader } from 'components/Shell/PeerListHeader'
import { PeerNameDisplay } from 'components/PeerNameDisplay'

import { Peer } from 'models/chat'

export const peerListWidth = 240

export interface PeerListProps extends PropsWithChildren {
  userId: string
  isPeerListOpen: boolean
  onPeerListClose: () => void
  peerList: Peer[]
}

export const PeerList = ({
  userId,
  isPeerListOpen,
  onPeerListClose,
  peerList,
}: PeerListProps) => {
  return (
    <MuiDrawer
      sx={{
        width: peerListWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: peerListWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="right"
      open={isPeerListOpen}
    >
      <PeerListHeader>
        <IconButton onClick={onPeerListClose} aria-label="Close peer list">
          <ChevronRightIcon />
        </IconButton>
      </PeerListHeader>
      <Divider />
      <List>
        <ListItemButton disableRipple={true}>
          <Typography>
            <PeerNameDisplay>{userId}</PeerNameDisplay> (you)
          </Typography>
        </ListItemButton>
        {peerList.map((peer: Peer) => (
          <ListItemButton key={peer.peerId} disableRipple={true}>
            <PeerNameDisplay>{peer.userId}</PeerNameDisplay>
          </ListItemButton>
        ))}
      </List>
      <Divider />
    </MuiDrawer>
  )
}
