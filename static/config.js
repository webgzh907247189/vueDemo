在linux下安装node

下载下来 复制到指定路径 cp -r xxx /gzh/yyy

xz -d node-v8.9.4-linux-x64.tar.xz  //变成tar包

tar -xvf node-v8.9.4-linux-x64.tar    //解压tar包




//建立软连接
ln -s /gzh/node-v8.9.4-linux-x64/bin/node /usr/bin/node   (建议完成，可以正常访问 node -v)

ln -s /gzh/node-v8.9.4-linux-x64/bin/npm /usr/bin/npm  (建议完成，可以正常访问 npm -v)
