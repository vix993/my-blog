import { useState } from "react";
import Link from "next/link";

import { makeStyles } from '@material-ui/core/styles';

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const Header = ({}) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <header className="w-screen h-20 flex items-center px-8 border-b-2 border-yellow-200 bg-yellow-500">
      <nav className="flex flex-row w-full h-full">
        <ul className="flex flex-row gap-4 ml-8 items-center">
          <li>
            <a href="https://github.com/vix993" target="_blank">
              <Icon component={GitHubIcon}></Icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/victor-nascimento-dev/"
              target="_blank"
            >
              <Icon component={LinkedInIcon}></Icon>
            </a>
          </li>
        </ul>
          <ul className="hidden sm:flex flex-row space-x-4 text-3xl gap-4 ml-auto mr-8">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className="ml-auto mr-0">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
          <div className="flex ml-auto h-full w-3/12 items-center p-2 justify-end">
          <Icon className="cursor-pointer text-3xl" aria-label="toggle menu" className="flex sm:hidden" component={MenuIcon} onClick={() => toggleDrawer()}></Icon>
          <Drawer open={drawerOpen} onClose={() => toggleDrawer()}>
          <List component="nav" className={classes.root}>
            <ListItem>
              <Link href="/">
                <a>Home</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </ListItem>
            <ListItem className="ml-auto mr-0">
              <Link href="/about">
                <a>About</a>
              </Link>
            </ListItem>
          </List>
          </Drawer>
          </div>
      </nav>
    </header>
  );
};
