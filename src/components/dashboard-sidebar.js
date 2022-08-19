import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Cog as CogIcon } from "../icons/cog";
import { Lock as LockIcon } from "../icons/lock";
import { Selector as SelectorIcon } from "../icons/selector";
import { ShoppingBag as ShoppingBagIcon } from "../icons/shopping-bag";
import { User as UserIcon } from "../icons/user";
import { UserAdd as UserAddIcon } from "../icons/user-add";
import { Users as UsersIcon } from "../icons/users";
import { XCircle as XCircleIcon } from "../icons/x-circle";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";
import { DropdownNavItem } from "./dropdown-nav-item";
import BarChartIcon from "@mui/icons-material/BarChart";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ListAltIcon from "@mui/icons-material/ListAlt";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

const generalItems = [
  {
    href: "/",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/finance",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Fincance",
  },
  {
    href: "/analytics",
    icon: <BarChartIcon fontSize="small" />,
    title: "Analytics",
  },
];

const procurmentItems = [
  {
    href: "/supplier",
    icon: <UsersIcon fontSize="small" />,
    title: "Supplier",
  },
  {
    href: "/purchaserequest",
    icon: <UsersIcon fontSize="small" />,
    title: "Purchase Request",
  },
  {
    href: "/paymentrequest",
    icon: <UsersIcon fontSize="small" />,
    title: "Payment Request",
  },
];

const wareHouseItems = [
  {
    icon: <UsersIcon fontSize="small" />,
    title: 'Stock List',
    subMenu: [
      {
        href: "/rawmaterial",
        icon: <UsersIcon fontSize="small" />,
        title: "Raw Material",
      },
      {
        href: "/accessories",
        icon: <UsersIcon fontSize="small" />,
        title: "Accessories",
      },
      {
        href: "/finishedgoods",
        icon: <UsersIcon fontSize="small" />,
        title: "Finished Goods",
      },
    ]
  },
  {
    icon: <UsersIcon fontSize="small" />,
    title: 'Issued Items',
    subMenu: [
      {
        href: "/rawmaterial",
        icon: <UsersIcon fontSize="small" />,
        title: "Raw Material",
      },
      {
        href: "/accessories",
        icon: <UsersIcon fontSize="small" />,
        title: "Accessories",
      },
      {
        href: "/finishedgoods",
        icon: <UsersIcon fontSize="small" />,
        title: "Finished Goods",
      },
    ]
  },
]

const items = [
  {
    href: "/customers",
    icon: <UsersIcon fontSize="small" />,
    title: "Customers",
  },
  {
    href: "/products",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Products",
  },
  {
    href: "/orders",
    icon: <ShoppingCartIcon fontSize="small" />,
    title: "Orders",
  },
  {
    href: "/calendar",
    icon: <DateRangeIcon fontSize="small" />,
    title: "Calendar",
  },
  {
    href: "/kanban",
    icon: <ListAltIcon fontSize="small" />,
    title: "Kanban",
  },
  // {
  //   href: '/email',
  //   icon: (<EmailIcon fontSize="small" />),
  //   title: 'Email'
  // },
  // {
  //   href: '/chat',
  //   icon: (<ChatIcon fontSize="small" />),
  //   title: 'Chat'
  // },
  {
    href: "/account",
    icon: <UserIcon fontSize="small" />,
    title: "Account",
  },
  {
    href: "/settings",
    icon: <CogIcon fontSize="small" />,
    title: "Settings",
  },
  {
    href: "/login",
    icon: <LockIcon fontSize="small" />,
    title: "Login",
  },
  {
    href: "/register",
    icon: <UserAddIcon fontSize="small" />,
    title: "Register",
  },
  {
    href: "/404",
    icon: <XCircleIcon fontSize="small" />,
    title: "Error",
  },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

  // border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={ />}
    {...props}
  />
))

  (({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgb(17, 24, 39)',
    flexDirection: 'row-reverse',
    
    '& .MuiAccordionSummary-content': {
      // border: '1px solid red',
      marginTop: '-2vh',
      padding: '0'
      // marginLeft: theme.spacing(1),
    },
  }));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  // padding: theme.spacing(2),
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
  marginTop: '-2vh',
  backgroundColor: 'rgb(17, 24, 39)'
}));



export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="/" passHref>
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42,
                  }}
                />
              </a>
            </NextLink>
          </Box>
          {/* <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  Acme Inc
                </Typography>
                <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Your tier
                  {' '}
                  : Premium
                </Typography>
              </div>
              <SelectorIcon
                sx={{
                  color: 'neutral.500',
                  width: 14,
                  height: 14
                }}
              />
            </Box>
          </Box> */}
        </div>
        <Divider sx={{ borderColor: "#2D3748", my: 3, }} />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="menuTitle">GENERAL</Typography>
          {generalItems.map((item) => (
            <>
              <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
            </>
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748", my: 3, }} />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="menuTitle">PROCURMENT</Typography>
          {procurmentItems.map((item) => (
            <>
              <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
            </>
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748", my: 3, }} />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="menuTitle">Ware House</Typography>
          <Box sx={{marginTop: '2vh'}}>
            {wareHouseItems.map((item) => (
              <>
                <Accordion >
                  <AccordionSummary

                  >
                    <DropdownNavItem key={item.title} icon={item.icon} title={item.title} />
                    {/* <Typography>Accordion 1</Typography> */}
                  </AccordionSummary>
                  <AccordionDetails>
                    {item.subMenu?.map((subItem) => (
                      <>
                        <NavItem key={subItem.title} icon={subItem.icon} href={subItem.href} title={subItem.title}></NavItem>
                      </>
                    ))}
                  </AccordionDetails>
                </Accordion>
              </>
            ))}
          </Box>
        </Box>
        <Divider sx={{ borderColor: "#2D3748", my: 3, }} />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <>
              <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
            </>
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
        {/* <Box
          sx={{
            px: 2,
            py: 3
          }}
        >
          <Typography
            color="neutral.100"
            variant="subtitle2"
          >
            Need more features?
          </Typography>
          <Typography
            color="neutral.500"
            variant="body2"
          >
            Check out our Pro solution template.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              mt: 2,
              mx: 'auto',
              width: '160px',
              '& img': {
                width: '100%'
              }
            }}
          >
            <img
              alt="Go to pro"
              src="/static/images/sidebar_pro.png"
            />
          </Box>
          <NextLink
            href="https://material-kit-pro-react.devias.io/"
            passHref
          >
            <Button
              color="secondary"
              component="a"
              endIcon={(<OpenInNewIcon />)}
              fullWidth
              sx={{ mt: 2 }}
              variant="contained"
            >
              Pro Live Preview
            </Button>
          </NextLink>
        </Box> */}
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
