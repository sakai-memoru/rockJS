dir Env: | out-string -stream | select-string node
echo "NODE_ENV = $Env:NODE_ENV"
