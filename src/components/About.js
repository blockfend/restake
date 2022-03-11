import {
  Modal
} from 'react-bootstrap'

function About(props) {
  return (
    <>
      <Modal show={props.show} onHide={() => props.onHide()}>
        <Modal.Header closeButton>
          <Modal.Title> About </Modal.Title>
        </Modal.Header>
        <Modal.Body className="small">
        <h5>Cool story bro, but can validators touch my funds?</h5>
          <p><strong> Absolutely not! ❌</strong> Validators do not get access to any of your wallet or funds in any form. Read on to understand how this works!</p>
          <h5>How REStake works</h5>
          <p>REStake makes use of a new feature in Cosmos blockchains called <a href="https://docs.cosmos.network/v0.44/modules/authz/" target="_blank" rel="noreferrer"> Authz </a>. This allows a validator (or any other wallet) to send certain pre-authorised transactions on your behalf.</p>
          <p>When you enable REStake you authorise the validator to send WithdrawDelegatorReward for any address, and Delegate for their own validator address. The validator cannot delegate to any other validators, and the authorisation expires automatically after one year and you can revoke at any time.</p>
          <h5>How to use REStake</h5>
          <ol>
            <li>Choose a network. Some don't support Authz yet but many do.</li>
            <li>Delegate to any validators who offers the REStake service.</li>
            <li>Enable REStake on the validators you want to compound rewards.</li>
            <li>Watch the countdown timer and profit!</li>
          </ol>
          <h5> Thanks </h5>
          <p>Eternally grateful to <a href="https://ecostake.com" target="_blank" rel="noreferrer">ECO Stake</a>🌱 for the amazing tech powering this platform and for keeping the platform open-sourced!</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default About
