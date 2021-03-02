// 插件代码
class FoldingDirWebpackPlugin {
    constructor(options = {}) {
        this.options = options;

        // 插件处理完成的回调。
        this.cb = options.cb;

        // 文件夹折叠的规则。
        this.exp = options.exp;
    }
    
    apply(compiler) {
      // 在emit阶段插入钩子函数
      compiler.hooks.emit.tap('FoldingDirWebpackPlugin', (compilation) => {
        const {assets} = compilation;
        let newAssets = {};

        for (const key in assets) {
            let newKey = key;

            if(this.exp){
                if(typeof this.exp === 'string'){
                    newKey = key.replace(this.exp, '');
                }else if(typeof this.exp === 'function'){
                    newKey = this.exp(key);
                }
            }
            newAssets[newKey] = assets[key];
        }

        compilation.assets = newAssets;

        if(this.cb){
            this.cb(compilation);
        }
      });
    }
  }
  
  module.exports = FoldingDirWebpackPlugin;