## 简介
在webpack打包阶段，根据指定的规则来合并输出文件夹。

## 安装
```
npm i folding-dir-webpack-plugin -D
```

## 使用
``` 
const FoldingDirWebpackPlugin = require('folding-dir-webpack-plugin');

// plugins节点。

module.exports = {
    // ...
    plugins: [
        new FoldingDirWebpackPlugin({
            // fileName: test.min/test.min.js
            // 将test.min.js文件夹的名称改成test/test.min.js
            exp: fileName => fileName.replace('.min/', '/'),

            // 插件处理完成的回调
            cb: compilation => {
                // webpack插件的compilation。
                // 可以做更多的自定义。
            }
        })
    ]
}
```