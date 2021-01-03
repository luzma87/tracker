/* eslint-disable react/jsx-props-no-spreading */
import { withTheme } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import {
  CalendarAddBw,
  CalendarBw,
  CalendarDayBw,
  CalendarDeleteBw,
  CalendarEditBw,
  CalendarStarBw,
  CategoriesBw,
  ExchangeBw,
  LoginBw,
  LogoutBw,
  PadlockColor,
  PencilColor,
  PiggyBankBw,
  SaveBw,
  ShoppingCartBw,
  SpinnerColor,
  UserBw,
  XColor
} from '../../icons/components';

const icons = (props) => ({
  spinner: <SpinnerColor {...props} />,
  save: <SaveBw {...props} />,
  repeat: <ExchangeBw {...props} />,
  user: <UserBw {...props} />,
  login: <LoginBw {...props} />,
  logout: <LogoutBw {...props} />,
  money: <PiggyBankBw {...props} />,
  unlock: <PadlockColor {...props} />,
  store: <ShoppingCartBw {...props} />,
  delete: <XColor {...props} />,
  pencil: <PencilColor {...props} />,
  calendar: <CalendarBw {...props} />,
  categories: <CategoriesBw {...props} />,
  'calendar-times': <CalendarDeleteBw {...props} />,
  'calendar-edit': <CalendarEditBw {...props} />,
  'calendar-plus': <CalendarAddBw {...props} />,
  'calendar-day': <CalendarDayBw {...props} />,
  'calendar-star': <CalendarStarBw {...props} />,
});

const CustomIcon = ({
  icon, pulse, ...rest
}) => icons(rest)[icon] || `[icon:${icon}]`;

CustomIcon.defaultProps = {
  pulse: false,
};

CustomIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  pulse: PropTypes.bool,
};

export default withTheme(CustomIcon);

/*
<div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/dmitri13" title="dmitri13">dmitri13</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com></a></div>

Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
<div>Icons made by <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/smartline" title="Smartline">Smartline</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">xnimrodx</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
*/
