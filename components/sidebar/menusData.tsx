import { IconType } from 'react-icons';
import { BiStation } from 'react-icons/bi';
import { FaFire, FaYoutube } from 'react-icons/fa';
import {
  MdAddCircle,
  MdAnnouncement,
  MdFlag,
  MdHelp,
  MdHistory,
  MdHome,
  MdSettings,
  MdSubscriptions,
  MdVideoLibrary,
} from 'react-icons/md';

export type TMENUS = {
  menus: {
    label: string;
    link: string;
    icon?: IconType;
    iconImage?: string;
    active?: boolean;
  }[];
  title?: string;
}[];

export const menusData: TMENUS = [
  {
    menus: [
      {
        label: 'Home',
        icon: MdHome,
        link: '/',
        active: true,
      },
      {
        label: 'Trending',
        icon: FaFire,
        link: '#',
      },
      {
        label: 'Subscription',
        icon: MdSubscriptions,
        link: '#',
      },
    ],
  },
  {
    menus: [
      {
        label: 'Library',
        icon: MdVideoLibrary,
        link: '#',
      },
      {
        label: 'History',
        icon: MdHistory,
        link: '#',
      },
    ],
  },
  {
    title: 'Best of youtube',
    menus: [
      {
        label: 'Music',
        iconImage:
          '//yt3.ggpht.com/m1NhuiHS_blVntPmWI3jkWYP9GYsnd9jEeEbsJvapSLYK5grq28UenyffytqyTm9g8KuHXLgSrA=s88-c-k-c0x00ffffff-no-rj',
        link: '#',
      },
      {
        label: 'Sports',
        iconImage:
          '//yt3.ggpht.com/xFktjpNOFh1mAdsJKwVUd1YsyfL5BJ4g75EEetGGGnFWAN3W9zEqamwaGyXhAPDZH3KrTYf5fg=s88-c-k-c0x00ffffff-no-rj',
        link: '#',
      },
      {
        label: 'Gaming',
        iconImage:
          '//yt3.ggpht.com/vZF-5iMtaB4LgDQdXbkRO9tppSN_H86Vof5pJtBB9aRl8VF4Zj8FTrpeoGtUMmvakFDZI-BOmg=s88-c-k-c0x00ffffff-no-rj',
        link: '#',
      },
      {
        label: 'Movies',
        iconImage:
          '//yt3.ggpht.com/6lo97rUTO7xhIBXZqLiaW2kA_eMBIEmqc27EqlKLyE4nAY-yzcKBG0Hs0YdUka3gJ629HcwgyzQ=s88-c-k-c0x00ffffff-no-rj',
        link: '#',
      },
      {
        label: 'News',
        iconImage:
          '//yt3.ggpht.com/bssm4mEw5OtrBUftn8rrcVTiM3mAImsDo8h-WZrUewuae1xiEYXhJod4Rud0TYnh3cGSiyW5aw=s88-c-k-c0x00ffffff-no-rj',
        link: '#',
      },
      {
        label: 'Live',
        iconImage:
          '//yt3.ggpht.com/8D6JlsnvwDZFMdcbjqVji82kggP3aXXbO-yBD0RFrKlp4G1zNt9wcqcVTSPnAI8GuUAbDYQwsg=s88-c-k-c0xffffffff-no-nd-rj',
        link: '#',
      },
      {
        label: '360° Video',
        iconImage:
          '//yt3.ggpht.com/cp2sWb0nIgaKQoGzXFUg7zdn4FvPGgReelKLHaKUcawZF3EhbXrTGbNV8z3Vxqlr13Dx97F6=s88-c-k-c0x00ffffff-no-rj',
        link: '#',
      },
    ],
  },
  {
    menus: [
      {
        label: 'Browse channels',
        icon: MdAddCircle,
        link: '#',
      },
    ],
  },
  {
    title: 'More from youtube',
    menus: [
      {
        label: 'YouTube Premium',
        icon: FaYoutube,
        link: '#',
      },
      {
        label: 'Live',
        icon: BiStation,
        link: '#',
      },
    ],
  },
  {
    menus: [
      {
        label: 'Settings',
        icon: MdSettings,
        link: '#',
      },
      {
        label: 'Report history',
        icon: MdFlag,
        link: '#',
      },
      {
        label: 'Help',
        icon: MdHelp,
        link: '#',
      },
      {
        label: 'Send feedback',
        icon: MdAnnouncement,
        link: '#',
      },
    ],
  },
];
