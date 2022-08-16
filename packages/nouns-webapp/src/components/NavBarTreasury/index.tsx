import classes from './NavBarTreasury.module.css';
import { NavBarButtonStyle } from '../NavBarButton';
import clsx from 'clsx';

interface NavBarTreasuryProps {
  treasuryBalance: string;
  treasuryStyle: NavBarButtonStyle;
  treasuryBigNounBalance: string;
}

const NavBarTreasury: React.FC<NavBarTreasuryProps> = props => {
  const { treasuryBalance, treasuryStyle, treasuryBigNounBalance } = props;

  let treasuryStyleClass;
  switch (treasuryStyle) {
    case NavBarButtonStyle.WARM_INFO:
      treasuryStyleClass = classes.warmInfo;
      break;
    case NavBarButtonStyle.COOL_INFO:
      treasuryStyleClass = classes.coolInfo;
      break;
    case NavBarButtonStyle.WHITE_INFO:
    default:
      treasuryStyleClass = classes.whiteInfo;
      break;
  }


  return (
    <div className={`${classes.wrapper} ${treasuryStyleClass}`}>
      <div className={classes.button}>
        <div
          className="flex-row d-flex justify-content-around"
          style={{
            paddingTop: '1px',
          }}
        >
          <div
            className={clsx(
              classes.treasuryHeader,
              treasuryStyle === NavBarButtonStyle.WHITE_INFO ? classes.whiteTreasuryHeader : '',
            )}
          >
            Treasury
          </div>
          <div className={classes.treasuryBalance}>
            Ξ {Number(treasuryBalance).toLocaleString('en-US')}
          </div>
          {/* <div className={classes.treasuryBigNounBalance}>
            + {`${treasuryBigNounBalance} Nouns`}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavBarTreasury;
