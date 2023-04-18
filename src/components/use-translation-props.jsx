//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import useTranslation from './use-translation';
import getTranslationProps from './get-translation-props';

/**
 * Called from within components to translate certain props to another language.
 *
 * @param {object} params The name of the component and the components props.
 * @returns {object} The props, but with certain props translated to another
 * language.
 */
function useTranslationProps(params) {
  const {
    name,
    props,
  } = params;

  const translation = useTranslation();
  const mergedProps = getTranslationProps({ translation, name, props });
  return mergedProps;
}

export default useTranslationProps;
