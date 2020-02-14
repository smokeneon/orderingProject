const { override, fixBabelImports, addLessLoader } = require('customize-cra');
 module.exports = override(
       fixBabelImports('import', {
         libraryName: 'antd',
         libraryDirectory: 'es',
         style: true,
       }),
        addLessLoader({
           javascriptEnabled: true,
           modifyVars: { '@primary-color': '#D9272E' },
         }),
     );
    //  #FFBC0D
    // #D9272E