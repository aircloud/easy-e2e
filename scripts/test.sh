PWD=`pwd`
docker container run --rm --volume $PWD/work:/work --workdir /work iconie/easy-e2e:latest