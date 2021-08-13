import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
  ThemeProvider,
} from '@material-ui/core/styles'
import {
  Apps,
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
  Search,
} from '@material-ui/icons'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import React from 'react'
import { theme } from 'styles/theme'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    pageTitle: {
      marginBottom: theme.spacing(1),
    },
  }),
)

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  title: string
  children: React.ReactNode
}

export default function ResponsiveDrawer(props: Props) {
  const { window, title, children } = props
  const classes = useStyles()
  // const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [open, setOpen] = React.useState(true)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleClick = () => {
    setOpen(!open)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Operations
          </ListSubheader>
        }
      >
        <ListItem button>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="ダッシュボード" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="ユーザー" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocationOn />
          </ListItemIcon>
          <ListItemText primary="スポット" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Language />
          </ListItemIcon>
          <ListItemText primary="エリア" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <Category />
          </ListItemIcon>
          <ListItemText primary="カテゴリ" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" dense>
            <ListItem button>
              <ListItemText inset primary="大カテゴリ" />
            </ListItem>
            <ListItem button>
              <ListItemText inset primary="中カテゴリ" />
            </ListItem>
            <ListItem button>
              <ListItemText inset primary="小カテゴリ" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <Sms />
          </ListItemIcon>
          <ListItemText primary="口コミ" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalOffer />
          </ListItemIcon>
          <ListItemText primary="ハッシュタグ" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Notifications />
          </ListItemIcon>
          <ListItemText primary="お知らせ" />
        </ListItem>
      </List>
      <Divider />
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Management
          </ListSubheader>
        }
      >
        <ListItem button>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="アカウント管理" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <History />
          </ListItemIcon>
          <ListItemText primary="アクティビティ" />
        </ListItem>
      </List>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" elevation={0} className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Notifications />
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Apps />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            noWrap
            className={classes.pageTitle}
          >
            {title}
          </Typography>
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}
