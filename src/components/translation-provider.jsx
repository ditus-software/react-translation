//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import TranslationContext from './translation-context';

/**
 * Represent a provider that provides translations for all reusable child
 * components in the component tree.
 *
 * @param {object} props The properties.
 * @returns {React.ReactElement} The component.
 */
function TranslationProvider(props) {
  const {
    children,
    translation,
  } = props;

  return (
    <TranslationContext.Provider value={translation}>
      {children}
    </TranslationContext.Provider>
  );
}

TranslationProvider.propTypes = {
  /**
   * Specifies the child components/component tree.
   */
  children: PropTypes.node,

  /**
   * Specifies the translation. Either an object containing the translations or
   * a function that results in an object containing the translations.
   */
  translation: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
};

export default TranslationProvider;

TranslationProvider.defaultProps = {
  children: null,
};
