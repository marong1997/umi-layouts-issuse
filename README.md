# umi project

## Getting Started

复现步骤： 
1、当使用umirc文件 layout配置打开时，将routes文件的 '/'，components:'@/layouts'注释打开，访问/user/one路径， 点击to/user/detail/hhh 按钮，发现403（验证 access是正常的）
2、注释掉umirc文件 layout， 并将routes文件的的components:'@/layouts'注释， 访问/user/one路径时， 点击 to/user/detail/hhh按钮， 发现展示了 /user/detail/hhh页面， access失效