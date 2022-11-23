# 如果需要本地部署，脚本需要按需修改
IMAGE_NAME=iconie/easy-e2e
IMAGE_TAG=latest

docker build -t $IMAGE_NAME:$IMAGE_TAG .