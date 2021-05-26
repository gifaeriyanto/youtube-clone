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
          '//yt3.ggpht.com/FokrhvqUDfKcI70TvFhbm-NYCO_qbaCAf7ImwbXZqmq3kFtRMxjx24GRan8_Zwe3ql-wEo690w=s88-c-k-c0x00ffffff-no-rj',
        link: '#',
      },
      {
        label: 'Sports',
        iconImage:
          '//yt3.ggpht.com/7pEnMBenda_jk32LIvQLyHKseE-G1UtUx0eXUr3sjV6KcRC5H_FSRZxT2votEuqwkjrSHHpF=s88-c-k-c0xffffffff-no-nd-rj',
        link: '#',
      },
      {
        label: 'Gaming',
        iconImage:
          '//yt3.ggpht.com/V1bmXP0p2liJXWKzZasQDCNof7knILr6RSjdQAPuRzjY0496wN92xZm66dHxZkfJR02yc3TH6lg=s88-c-k-c0x00ffffff-no-rj',
        link: '#',
      },
      {
        label: 'News',
        iconImage:
          '//yt3.ggpht.com/RMsRDfy7X7f7Wo3aZEofaZXAqMiyIi8UUZe188kwJ9DJTg8aEWDrqlVW8ktFyKhy9kUmgIR90So=s88-c-k-c0xffffffff-no-nd-rj',
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
          '//yt3.ggpht.com/fmOS9pbEO9CB6wbhvRsKFKv4h2z7_O3fFm9hgI14FHtxQa2WHlPPKQMPraiVA608d2jvJFyMrg=s88-c-k-c0xffffffff-no-nd-rj',
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
