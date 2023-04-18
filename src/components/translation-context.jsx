//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import { createContext } from 'react';

/**
 * Represents the context that provides language translation for components.
 */
const TranslationContext = createContext(null);

if (process.env.NODE_ENV !== 'production') {
  TranslationContext.displayName = 'TranslationContext';
}

export default TranslationContext;
