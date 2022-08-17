/* eslint-disable react/jsx-no-comment-textnodes */
import { Button, Row, Col } from 'react-bootstrap';
import { useAppSelector } from '../../hooks';
import classes from './Winner.module.css';
import ShortAddress from '../ShortAddress';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { isMobileScreen } from '../../utils/isMobile';

interface WinnerProps {
  winner: string;
  isNounders?: boolean;
  isNounsDAO?: boolean
}

const Winner: React.FC<WinnerProps> = props => {
  const { winner, isNounders, isNounsDAO } = props;
  const activeAccount = useAppSelector(state => state.account.activeAccount);

  const isCool = useAppSelector(state => state.application.isCoolBackground);
  const isMobile = isMobileScreen();

  const isWinnerYou =
    activeAccount !== undefined && activeAccount.toLocaleLowerCase() === winner.toLocaleLowerCase();

  const nonNounderNounContent = isWinnerYou ? (
    <Row className={classes.youSection}>
      <Col lg={4} className={classes.youCopy}>
        <h2
          className={classes.winnerContent}
          style={{
            color: isCool ? 'var(--brand-cool-dark-text)' : 'var(--brand-warm-dark-text)',
          }}
        >
          You
        </h2>
      </Col>
      {!isMobile && (
        <Col>
          <Link to="/lilgoblins">
            <Button className={classes.verifyButton}>What now?</Button>
          </Link>
        </Col>
      )}
    </Row>
  ) : (
   
    
    <ShortAddress size={40} address={winner} avatar={true}
     />
      
  );

  const nounsDAOContent = <h2>NounsDAO</h2>;
  const lilnounderNounContent = <h2>lilgoblinkings.eth</h2>;

  return (
    <>
      <Row className={clsx(classes.wrapper, classes.section)}>
        <Col xs={1} lg={12} className={classes.leftCol}>
          <h4
            style={{
              color: isCool ? 'var(--brand-cool-light-text)' : 'var(--brand-warm-light-text)',
            }}
          >
            Winner
          </h4>
        </Col>
        <Col xs="auto" lg={12}>
          <h2
            className={classes.winnerContent}
            style={{
              color: isCool ? 'var(--brand-cool-dark-text)' : 'var(--brand-warm-dark-text)',
            }}
          >
             
            {isNounders ? lilnounderNounContent : isNounsDAO ? nounsDAOContent : nonNounderNounContent}
          </h2>
        </Col>
      </Row>
      {isWinnerYou && isMobile && (
        <Row>
          <Link to="/lilgoblins">
            <Button className={classes.verifyButton}>What now?</Button>
          </Link>
        </Row>
      )}
    </>
  );
};

export default Winner;
