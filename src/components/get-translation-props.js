//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//

/**
 * Replaces prop values with values that are translated into the language
 * specified by the translation.
 *
 * @param {object} params The translation object containing the translation for
 * all components, the name of the component needing to be translated (which
 * should exist within the translation object), and the components props.
 * @returns {object} The props with certain props translated.
 */
function getTranslationProps(params) {
  const { translation, name, props } = params;

  // This method assumes that you will pass a value for translation, that the
  // translation contains a components object, which contains an object for each
  // component that supports translation, the name of the component as an
  // object, and within that, the default props that are translated. If any of
  // these are undefined, then it simply returns the props for the component as
  // passed in with no translations.
  if (
    !translation
    || !translation.components
    || !translation.components[name]
    || !translation.components[name].defaultProps
  ) {
    return props;
  }

  // Make a copy of the props.
  const output = { ...props };

  // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221
  const { defaultProps } = translation.components[name];

  // Replace any props having the same name that exist in the translation. Props
  // are only replaced if they don't have a value (i.e. undefined or null).
  // eslint-disable-next-line no-restricted-syntax
  for (const propName in defaultProps) {
    if (output[propName] === undefined || output[propName] === null) {
      output[propName] = defaultProps[propName];
    }
  }

  return output;
}

export default getTranslationProps;
