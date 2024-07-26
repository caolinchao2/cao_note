import{_ as a,o as e,c as s,Q as o}from"./chunks/framework.b5309610.js";const b=JSON.parse('{"title":"系统管理","description":"","frontmatter":{},"headers":[],"relativePath":"leadingEnd/Server/基本管理.md","filePath":"leadingEnd/Server/基本管理.md","lastUpdated":1720779672000}'),l={name:"leadingEnd/Server/基本管理.md"},p=o(`<h1 id="系统管理" tabindex="-1">系统管理 <a class="header-anchor" href="#系统管理" aria-label="Permalink to &quot;系统管理&quot;">​</a></h1><h2 id="一、rpm包" tabindex="-1">一、rpm包 <a class="header-anchor" href="#一、rpm包" aria-label="Permalink to &quot;一、rpm包&quot;">​</a></h2><ul><li><p>安装：<code>rpm -ivh 包全名</code></p><ul><li><code>-i</code> 安装</li><li><code>-v</code> 显示详细信息</li><li><code>-h</code> 显示进度</li></ul></li><li><p>升级：<code>rpm -Uvh 包全名</code></p></li><li><p>卸载：<code>rpm -e 包名</code></p></li><li><p>查询包：rpm -q 已安装加包名 未安装加包全名</p><ul><li><code>-qa</code> 查询所有安装包</li><li><code>-qi</code> 包名详细信息</li><li><code>-qp</code> 查询未安装包名</li><li><code>-ql</code> 查询包名安装位置 -p查询未安装</li><li><code>-qf</code> 系统文件名 查询系统文件属于哪个软件包</li><li><code>-qR 包名</code> -R查询软件包依赖性 -p查询未安装</li></ul></li><li><p>检验包：<code>rpm-V</code> 校验指定rpm包中的文件是否做了修改</p></li><li><p>rpm2cpio 包全名| \\ cpio -idv .文件绝对路径 提取安装包中的系统文件</p></li></ul><h2 id="二、yum包" tabindex="-1">二、yum包 <a class="header-anchor" href="#二、yum包" aria-label="Permalink to &quot;二、yum包&quot;">​</a></h2><p>设置网络：</p><p><code>vim /etc/sysconfig/network-scripts/ifcfg-eth0</code> 把<code>ONBOOT=no</code> 改为yes 启动网卡service network restart</p><p><code>vim /etc/yum.repos.d/CentOS-Base.repo</code> 网络yum源配置地址 <code>enabled=1</code> 生效</p><ul><li>获取可用软件列表：<code>yum list</code></li><li>搜索：<code>yum search</code></li><li>安装：<code>yum -y install </code></li><li>升级：<code>yum -y update</code></li><li>卸载：<code>yum -y remove</code></li><li>可用软件组：<code>yum grouplist</code></li><li>安装软件组：<code>yum groupinstall</code></li><li>卸载软件组：<code>yum groupremove</code></li></ul><p>/etc/rc.d/init.dtpd star 启动服务 /usr/local/apache2/bin/apache1 start 源码包启动 service httpd restart 启动服务</p><p>源码包保存位置 /usr/localc/ 软件包安装位置 /usr/local/ ./configure --prefix=/usr/local/apache2 指定安装目录 make 检测产生Makefile 如果没产生 执行make clean make install 源码包卸载 直接删除文件夹</p><h2 id="三、用户组管理" tabindex="-1">三、用户组管理 <a class="header-anchor" href="#三、用户组管理" aria-label="Permalink to &quot;三、用户组管理&quot;">​</a></h2><h3 id="用户信息" tabindex="-1">用户信息 <a class="header-anchor" href="#用户信息" aria-label="Permalink to &quot;用户信息&quot;">​</a></h3><p><code>/etc/passwd</code><br> 用户名称:密码标识:UID:GID初始组:用户说明:家目录:shell目录 uid： 0超级用户 1~499 系统用户（伪用户） 500-65535 普通用户</p><h3 id="查看密码文件" tabindex="-1">查看密码文件 <a class="header-anchor" href="#查看密码文件" aria-label="Permalink to &quot;查看密码文件&quot;">​</a></h3><p><code>/etc/shadow</code> 1用户名:2加密密码(!!或*没有密码):3密码最后修改日期1970.1.1后的多少 天:4两次密码修改间隔:5密码有效期:6密码到期前提示:7密码过期宽限天数 (0过期立即失效 -1永不失效):8账号失效时间(时间戳表示):9保留 date -d &quot;1970-01-01 16066 days&quot; 换算时间 echo $(($(date --date=&quot;2014/01/06&quot; +%s)/86400+1)) 换算时间戳 /etc/group 组名:组密码:GID:附加用户 /etc/gshadow 组名:组密码:组管理员名:组附加用户</p><p>/home/用户 普通用户家目录 700 /root/用户 超级用户家目录 550 ar/spool/mail/用户名/ 用户的邮箱 /etc/skel/ 用户模板目录 创建新用户默认将模板目录文件拷贝到家用户文件下</p><p>useradd -u UID -G附加组 -c 说明 -d 家目录 -s /bin/bash登录shell 用户名 /etc/default/useradd 用户默认值文件 /etc/login.defs 用户默认值密码文件 passwd -S 用户名 查询用户密码状态 passwd -l 锁定用户名 -u 解锁用户名 echo &quot;123&quot; |passwd --stdin lamp 指定lamp设置123密码 usermod 修改已有用户信息 -c修改说明 -G附加组 -L 锁定用户 -U 解锁用户 chage -l 列出用户详细密码状态 chage -d 0 hny 将密码修改时间为0 重新修改密码 userdel -r hny 删除用户同时删除家目录 id 用户 查看用户id su - root 切换超级用户 su - root -c &quot;命令&quot; 执行一个root命令</p><p>groupadd 添加组 groupmod 修改组 -n新组名 -g 修改组id（尽量删除重建组） groupdel 删除组</p><p>gpasswd -a 加到用户组 -d删除用户组 （直接改文件更好）</p><h2 id="四、权限管理" tabindex="-1">四、权限管理 <a class="header-anchor" href="#四、权限管理" aria-label="Permalink to &quot;四、权限管理&quot;">​</a></h2><p>mount -o remount,acl/ 临时把根目录重新挂载支持acl权限 /etc/fstab 修改默认文件支持acl权限</p><p>setfacl -m 添加acl权限 u:用户名:权限 目录 (u用户g组) getfacl 文件名 查看支持哪些权限acl命令</p><p>setfacl -m m:rx 文件名 mask修改最大权限</p><p>setfacl -x u:用户名 删除某个用户名acl权限 setfacl -x g:用户组 删除某个组acl权限 setfacl -b 文件名 删除整个文件夹acl权限</p><p>setfacl -m u:用户名:权限 -R 文件名 递归acl权限 针对现有的目录和目录下子文件 setfacl -m d:u:用户名:权限 -R 文件名 默认acl权限 只能赋予目录 不能赋予文件</p><p>设定setuid （只有能执行包含x权限的文件才能设置）针对二进制文件 普通用户使用该二进制文件会赋予root权限 chmod 4755 文件名 chmod u+s 文件名 取消setuid chmod 755 文件名 chmod u-s 文件名</p><p>设定setgid 针对文件和目录 文件会变成root组 新建目录会变成目录自己所属组 chmod 4755 文件名 chmod g+s 文件名 取消setuid chmod 755 文件名 chmod g-s 文件名</p><p>设置黏着位 (只有执行和写入才能设置)针对目录 谁创建的谁才能修改删除 别人无法删除只能读 chmod 1755 chmod o+t 取消黏着位 chmod 755 chmod o-t</p><p>chattr权限 <code>chattr [+-=][选项]</code> 文件或目录 误保险操作 +增加权限 -删除权限 =赋予权限 -i 文件:不允许添加修改 目录:只能修改目录下文件数据 不能添加修改(锁起来) -a 文件:可以增加 不能删除 目录:只能建立修改 不能删除(保护现有数据) 只能通过echo 内容 &gt;&gt; 文件 写入数据 lsattr 选项 文件名 -a 显示所有 -d显示目录</p><h2 id="五、sudo使用" tabindex="-1">五、sudo使用 <a class="header-anchor" href="#五、sudo使用" aria-label="Permalink to &quot;五、sudo使用&quot;">​</a></h2><p>visudo 用户 被管理地址=命令的绝对路劲 普通用户 sudo -l 查看可以用的sudo命令 sudo 命令绝对路劲 执行赋予的命令</p><h2 id="杀端口号" tabindex="-1">杀端口号 <a class="header-anchor" href="#杀端口号" aria-label="Permalink to &quot;杀端口号&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 查找pid</span></span>
<span class="line"><span style="color:#B392F0;">netstat</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-npl</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">9000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># -9 表示强迫停止</span></span>
<span class="line"><span style="color:#79B8FF;">kill</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-9</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pid&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 查找pid</span></span>
<span class="line"><span style="color:#6F42C1;">netstat</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-npl</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># -9 表示强迫停止</span></span>
<span class="line"><span style="color:#005CC5;">kill</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-9</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pid&#39;</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="六、文件系统查看命令" tabindex="-1">六、文件系统查看命令 <a class="header-anchor" href="#六、文件系统查看命令" aria-label="Permalink to &quot;六、文件系统查看命令&quot;">​</a></h2><p>df (文件+程序占用)</p><p>df 选项 挂载点 <code>-a</code> 显示所有 <code>-h</code>人性化 <code>-T</code>显示文件类型 <code>-m</code>以M单位 <code>-k</code>以kb单位</p><p>统计目录文件大小 (文件占用) du -a显示每个子文件 -h人性化 -s统计占用量 fsck 选项 设备文件名 -a不用显示用户自动修复 -y自动修复 dumpe2fs 分区设备文件名 显示磁盘状态</p><h2 id="七、查询于挂载" tabindex="-1">七、查询于挂载 <a class="header-anchor" href="#七、查询于挂载" aria-label="Permalink to &quot;七、查询于挂载&quot;">​</a></h2><p><code>mount -l</code> 显示已经挂载的设备 -l显示卷标 <code>mount -a</code> 依据/etc/fstab的内容自动挂载 mount -t -L -o 设备文件名 挂载点 -t文件类型 -L卷标名 -o特殊选项 exec/noexec 执行 不执行 remount重新挂载</p><p>挂载光盘 mount /dev/sr0 /mnt/cdrom umount 设备文件名或挂载点</p><p>挂载u盘 mount -t vfat /dev/sdb1 /mnt/usb</p><p>fdisk 设备文件绝对路劲 开始分区 d 删除分区 l显示分区文件类型 n新建分区 q不保存退出 w保存退出 partprobe 重新读取分区表信息 mkfs -t ext4 /dev/sdb1 格式化分区 mount /dev/sdb1 /disk1/ 建立挂载点</p><p>vi /etc/fstab 修改自动挂载文件 mount -o remount,rw /etc/fstab文件重新挂载读写权限</p><p>新建swap分区 修改分区 fdisk /dev/sdb 新建一个swap分区之后按t修改文件类型为82 mkswap /dev/sdb1 格式话swap分区 swapon /dev/sdb1 加入swap分区 swapoff /dev/sdb1 取消swap分区 vim /etc/fstab /dev/sdb1 swap swap defaults 0 0</p><p>free 命令 查看内存于swap分区使用状况</p>`,45),c=[p];function d(t,n,r,i,u,h){return e(),s("div",null,c)}const y=a(l,[["render",d]]);export{b as __pageData,y as default};
