//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React, { useContext } from 'react';
import TranslationContext from './translation-context';

/**
 * Represents a hook that provides language translation for components.
 *
 * @returns {React.ReactElement} The component.
 */
function useTranslation() {
  const t = useContext(TranslationContext);

  if (process.env.NODE_ENV !== 'production') {
    React.useDebugValue(t);
  }

  return t;
}

export default useTranslation;
