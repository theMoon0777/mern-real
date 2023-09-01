import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// import avatar from "./logo.png";
// project imports
import Logo from 'ui-component/Logo';
import { MENU_OPEN } from 'store/actions';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} >
      <Logo />
    </ButtonBase>
  );
};

export default LogoSection;
