import React from 'react';
import Floating from './styles/Floating';
import CRMIcons from '../assets/keepintouchicons.png';
import CRMIcons2 from '../assets/iconstwokit.png';

export default function LearnMore() {
  return (
    <div className="pa3">
      <div>
        <Floating src={CRMIcons} className="mw-100 w-70-m w-40-l" />
        <h1>Keep in touch with your Network</h1>
        <p>We all have a hard time keeping in touch with the people we meet.</p>
        <p>
          With Kit you get friendly reminders to check in with the people you
          care about.
        </p>
      </div>
      <div>
        <Floating src={CRMIcons2} className="mw-100 w-70-m w-40-l" />
        <h1>Own your data</h1>
        <p>
          Imagine if all your data from the apps you use stayed on your own
          cloud.
        </p>
        <p>This is exactly where your data lives when using Kit. </p>
        <span className="b">Don't have your own server?</span>
        <p>
          No problem{' '}
          <a
            href="https://blockstack.org"
            className="black b no-underline bg-light-yellow pv1 ph2 hover-bg-yellow"
          >
            Blockstack
          </a>{' '}
          offers you a default private cloud folder.
        </p>
      </div>
    </div>
  );
}
