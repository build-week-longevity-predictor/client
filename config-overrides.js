const {gray} = require('@ant-design/colors')
const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#25b864' },
  })
);


//https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

///node_modules/antd/lib/style/themes/default.less

// @primary-color: @blue-6;
// @info-color: @blue-6;
// @success-color: @green-6;
// @processing-color: @blue-6;
// @error-color: @red-6;
// @highlight-color: @red-6;
// @warning-color: @gold-6;
// @normal-color: #d9d9d9;
// @white: #fff;
// @black: #000;