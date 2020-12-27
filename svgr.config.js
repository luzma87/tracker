const {
  identifier,
  jsxClosingElement,
  jsxElement,
  jsxIdentifier,
  jsxOpeningElement,
  jsxSpreadAttribute,
} = require('@babel/types');

module.exports = {
  icon: true,
  prettierConfig: { semi: true, singleQuote: true },
  // replaceAttrValues: { '#000': 'currentColor' },
  titleProp: true,
  outDir: 'src/icons/components/',
  // template: (
  //   { template },
  //   opts,
  //   {
  //     imports, componentName, props, jsx, exports,
  //   },
  // ) => template.ast`
  //     ${imports}
  //     import PropTypes from 'prop-types';
  //     import SvgIcon from '@material-ui/core/SvgIcon';

  //     const ${componentName} = ({ title, titleId, ...props }) => React.createElement(SvgIcon, props, ${jsx.children})

  //     ${componentName}.defaultProps = {
  //     title: null,
  //     titleId: null,
  //   };

  //   ${componentName}.propTypes = {
  //     title: PropTypes.string,
  //     titleId: PropTypes.string,
  //   };

  // ${exports}
  // `,
  // template: ({ template }, opts, { imports, componentName, props, jsx, exports }) => {
  //   const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  //   const viewBox = jsx.openingElement.attributes.find((att) => att.name.name === 'viewBox');
  //   const fill = jsx.openingElement.attributes.find((att) => att.name.name === 'fill');
  //   const stroke = jsx.openingElement.attributes.find((att) => att.name.name === 'stroke');
  //   const viewBoxValue = `${viewBox.value.value}`;
  //   const fillValue = fill ? `fill: "${fill.value.value}",` : '';
  //   const strokeValue = stroke ? `stroke: "${stroke.value.value}",` : '';

  //   let addedProps = `{ width: "1rem", height: "1rem", viewBox: "${viewBoxValue}", ${fillValue} ${strokeValue} }`;

  //   return typeScriptTpl.ast`
  //     ${imports}
  //     import PropTypes from 'prop-types';
  //     import SvgIcon from '@material-ui/core/SvgIcon';

  //     const ${componentName} = ({ title, titleId, ...props }) => React.createElement(SvgIcon,
  //       ${addedProps}, ${jsx.children});

  //       ${componentName}.defaultProps = {
  //         title: null,
  //         titleId: null,
  //       };

  //       ${componentName}.propTypes = {
  //         title: PropTypes.string,
  //         titleId: PropTypes.string,
  //       };

  //     ${exports};
  //   `;
  // },

  template: ({ template }, _, { componentName, jsx, exports }) => {
    const wrappedJsx = jsxElement(
      jsxOpeningElement(jsxIdentifier('SvgIcon'), [jsxSpreadAttribute(identifier('props'))]),
      jsxClosingElement(jsxIdentifier('SvgIcon')),
      [jsx],
      false,
    );

    return template.ast`
      import React from 'react';
      import PropTypes from 'prop-types';
      import SvgIcon from '@material-ui/core/SvgIcon';

      const ${componentName} = ({ title, titleId, ...props }) => ${wrappedJsx};

      ${componentName}.defaultProps = {
        title: null,
        titleId: null,
      };

      ${componentName}.propTypes = {
        title: PropTypes.string,
        titleId: PropTypes.string,
      };

      ${exports}
    `;
  },
};

// const ${componentName} = ({ title, titleId, ...props }) => React.createElement(SvgIcon, props, ${jsx.children})
// const ${componentName} = ({ title, titleId, ...props }) => ${jsx}
