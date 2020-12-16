import React from 'react';
import PropTypes from 'prop-types';
import {
  IconCodepen,
  IconGitHub,
  IconLink,
  IconLinkedin,
  IconMedium,
  IconWaveLine,
} from '../icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'Link':
      return <IconLink />;
    case 'Codepen':
      return <IconCodepen />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Medium':
        return <IconMedium />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'WaveLine':
      return <IconWaveLine />;
    default:
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export { Icon };
