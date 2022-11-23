## easy-e2e

快速上手的端对端测试示例

### 本地测试

```
pnpm init
pnpm test
```

### 部署

可以通过打包成镜像之后，通过 [K8s CronJob](https://kubernetes.io/zh-cn/docs/tasks/job/automated-tasks-with-cron-jobs/) 进行定时测试的部署。

### 参考文档

[使用k8s容器化运行端对端测试用例](https://niexiaotao.cn/2022/11/18/%E4%BD%BF%E7%94%A8k8s%E5%AE%B9%E5%99%A8%E5%8C%96%E8%BF%90%E8%A1%8C%E7%AB%AF%E5%AF%B9%E7%AB%AF%E6%B5%8B%E8%AF%95%E7%94%A8%E4%BE%8B/)