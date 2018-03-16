# GFW Whitelist PAC

时间复杂度为 O(1) 的 GFW 白名单 PAC 列表。

## TODO

1. 学习 Python 写个脚本从 [dnsmasq-china-list](https://github.com/felixonmars/dnsmasq-china-list) 获取中国大陆域名列表，生成 PAC, 再配合 travis-ci 的 cron 任务每日自动更新到 gh-pages 分支，当然要先把当前这个分支重命名为 master.

## 致谢

参考了以下项目的源码：

- [gfwlist2pac](https://github.com/clowwindy/gfwlist2pac)
- [gfw_domain_whitelist](https://github.com/R0uter/gfw_domain_whitelist)
- [Flora_Pac](https://github.com/Leask/Flora_Pac)
- [GFWList2PAC](https://github.com/breakwa11/GFWList2PAC)
- [gfw_whitelist](https://github.com/breakwa11/gfw_whitelist)
- [dnsmasq-china-list](https://github.com/felixonmars/dnsmasq-china-list)
