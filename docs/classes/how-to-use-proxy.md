# 如何使用代理（科学上网）

## 前言

在中国大陆的网络环境下，某些国外的学术资源、代码托管服务和在线文档（例如 Google、GitHub、arXiv 以及一些第三方包管理镜像和云端 API）的访问速度或可用性可能会受到影响。为了保证科研与开发工作的连续性与效率，研究人员和工程师常在合规前提下使用代理工具以稳定访问这些资源。通过代理可以更方便地获取最新文献、下载依赖包、克隆开源仓库、进行代码协作与实验复现。

> [!NOTE]
> 本文档仅面向学术与开发用途，介绍常见的代理配置方法、使用场景和注意事项，不涉及政治内容或其他用途。

## 安装代理工具

**本教程以 `Clash Verge Rev` 为示例，便于演示与配置。**

### Windows

1. 访问 GitHub Release 页面：  
   [GitHub Release](https://github.com/clash-verge-rev/clash-verge-rev/releases/latest)
2. 下载与系统架构匹配的安装包。
3. 运行安装包并按照提示完成安装。

### macOS

1. 访问 GitHub Release 页面：  
   [GitHub Release](https://github.com/clash-verge-rev/clash-verge-rev/releases/latest)
2. 下载与系统架构匹配的磁盘映像（.dmg）。
3. 挂载映像并将应用拖入 /Applications 或 ~/Applications。

### Linux

#### Arch 系（示例）

1. 配置 archlinuxcn 源（编辑 /etc/pacman.conf）：

   ```text
   [archlinuxcn]
   Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
   Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
   Server = https://mirrors.hit.edu.cn/archlinuxcn/$arch
   Server = https://repo.huaweicloud.com/archlinuxcn/$arch
   ```

2. 在终端运行：

   ```bash
   sudo pacman -Sy archlinuxcn-keyring
   sudo pacman-key --lsign-key "farseerfc@archlinux.org"
   sudo pacman -S paru
   paru -S clash-verge-rev-bin
   ```

#### Debian / Ubuntu（示例）

1. 访问 GitHub Release 页面并下载对应的 .deb 包：  
   [GitHub Release](https://github.com/clash-verge-rev/clash-verge-rev/releases/latest)
2. 在终端运行：

   ```bash
   sudo apt install -y /path/to/clash-verge-rev.deb
   ```

#### RHEL / CentOS / Fedora（示例）

1. 访问 GitHub Release 页面并下载对应的 .rpm 包：  
   [GitHub Release](https://github.com/clash-verge-rev/clash-verge-rev/releases/latest)
2. 在终端运行：

   ```bash
   sudo dnf install -y /path/to/clash-verge-rev.rpm
   ```

   或（在老系统上）:

   ```bash
   sudo yum localinstall /path/to/clash-verge-rev.rpm
   ```

## 导入订阅

1. 点击左侧 Dock 的"订阅"
2. 将订阅地址复制进去
3. 点击导入

> [!TIP]
> 在 [Yanzhou-LTA/LTA-Private](https://github.com/Yanzhou-LTA/LTA-Private/blob/main/resources/Proxy.md) 中, 我们准备了一些公益节点, 使用须知请在那边查看

## 使用代理

### 选择节点

1. 点击左侧 Dock 的"代理"
2. ping 延迟(可选择"以延迟排序")
3. 单击选择节点

### 启用代理

1. 点击左侧 Dock 的"设置"
2. 打开 "系统代理" 和 "虚拟网卡"

## 最后

至此, 你已科学上网
