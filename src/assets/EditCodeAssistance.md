<!--
 * @Author: kelvin
 * @Date: 2021-04-05 20:18:57
 * @LastEditTime: 2021-04-05 20:30:02
 * @FilePath: /viewBooks/src/assets/EditCodeAssistance.md
 * @Description: 提交代码相关配置记录
-->
# 操作记录
## git-credential-osxkeychain wants to use your confidential information stored in "xxx" in your keychain.
### 解决方法
    space + command 打开 Keychain Access 
    在搜索栏中键入github， 找到对应的密码，重新输入

### Mac搜索终端，不能打开
    打开终端，输入
    sudo mdutil -a -i on