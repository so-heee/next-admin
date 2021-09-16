import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import {
  History,
  LocationOn,
  Person,
  Language,
  Dashboard,
  AccountCircle,
  Category,
  Sms,
  Notifications,
  LocalOffer,
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons'
import Link from 'next/link'
import React from 'react'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
  }),
)

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
}

export default function LeftDrawer(props: Props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List
        dense
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Operations
          </ListSubheader>
        }
      >
        <Link href="/" passHref>
          <ListItem button>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="ダッシュボード2" />
          </ListItem>
        </Link>
        <Link href="/user" passHref>
          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="ユーザー" />
          </ListItem>
        </Link>
        <Link href="/spot" passHref>
          <ListItem button>
            <ListItemIcon>
              <LocationOn />
            </ListItemIcon>
            <ListItemText primary="スポット" />
          </ListItem>
        </Link>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <Language />
          </ListItemIcon>
          <ListItemText primary="エリア" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" dense>
            <Link href="/area/region" passHref>
              <ListItem button>
                <ListItemText inset primary="地域" />
              </ListItem>
            </Link>
            <Link href="/area/country" passHref>
              <ListItem button>
                <ListItemText inset primary="国" />
              </ListItem>
            </Link>
            <Link href="/area/city" passHref>
              <ListItem button>
                <ListItemText inset primary="都市" />
              </ListItem>
            </Link>
            <Link href="/area/district" passHref>
              <ListItem button>
                <ListItemText inset primary="独自エリア" />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <Category />
          </ListItemIcon>
          <ListItemText primary="カテゴリ" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" dense>
            <Link href="/category/large" passHref>
              <ListItem button>
                <ListItemText inset primary="大カテゴリ" />
              </ListItem>
            </Link>
            <Link href="/category/medium" passHref>
              <ListItem button>
                <ListItemText inset primary="中カテゴリ" />
              </ListItem>
            </Link>
            <Link href="/category/small" passHref>
              <ListItem button>
                <ListItemText inset primary="小カテゴリ" />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <Link href="/review" passHref>
          <ListItem button>
            <ListItemIcon>
              <Sms />
            </ListItemIcon>
            <ListItemText primary="口コミ" />
          </ListItem>
        </Link>
        <Link href="/hashtag" passHref>
          <ListItem button>
            <ListItemIcon>
              <LocalOffer />
            </ListItemIcon>
            <ListItemText primary="ハッシュタグ" />
          </ListItem>
        </Link>
        <Link href="/notification" passHref>
          <ListItem button>
            <ListItemIcon>
              <Notifications />
            </ListItemIcon>
            <ListItemText primary="お知らせ" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List
        dense
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Management
          </ListSubheader>
        }
      >
        <Link href="/admin/account" passHref>
          <ListItem button>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="アカウント管理" />
          </ListItem>
        </Link>
        <Link href="/admin/activity" passHref>
          <ListItem button>
            <ListItemIcon>
              <History />
            </ListItemIcon>
            <ListItemText primary="アクティビティ" />
          </ListItem>
        </Link>
      </List>
    </div>
  )
}
