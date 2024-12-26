为了在 git push 时忽略 node_modules 文件夹，你可以通过以下步骤来配置 .gitignore 文件。这将确保 node_modules 不会被提交到 Git 仓库中
# 创建或编辑 .gitignore 文件
在你的项目根目录下创建一个名为 .gitignore 的文件（如果还没有的话）。
打开 .gitignore 文件并添加以下内容：
node_modules/
# 移除已跟踪的 node_modules 文件夹（如果有）
如果你之前已经将 node_modules 添加到了 Git 仓库中，你需要先移除它。可以使用以下命令
git rm -r --cached node_modules
# 提交更改
提交 .gitignore 文件和移除 node_modules 的更改：
git add .gitignore
git commit -m "Add node_modules to .gitignore"
# 推送更改
最后，将更改推送到远程仓库
git push origin main