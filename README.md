# NeDL Dockerfile Demo

## Getting Started

```bash
git clone https://github.com/keawade/nedl-dockerfile.git
cd nedl-dockerfile
npm ci
npm run start:watch
```

## Package Scripts and Helpful Commands

### `docker:build`

Build Docker image from a Dockerfile and context.

```bash
docker build . --tag nedl
```

- `docker build`: [Build an image from a Dockerfile.](https://docs.docker.com/engine/reference/commandline/build/)
- `.`: Context. In this case, path to our current directory.
- `--tag nedl`: Specifies image name. (Tag can optionally be specified but I have not done that here)

### `docker:run`

Creates a writeable container layer over the specified image and then starts it.

```bash
docker run --detach --publish 8080:8080 --name nedl-demo nedl:latest
```

- `docker run`: [Run a command in a new container.](https://docs.docker.com/engine/reference/commandline/run/)
- `--detach`: Runs container in the background.
- `--publish 8080:8080`: Publishes the container's internal port `8080` on our local machine's port `8080`.
- `--name nedl-demo`: Runs with the name `nedl-demo`. This name can later be referenced by other commands.
- `nedl:latest`: Runs the latest tag of the `nedl` image.

### `docker:stop`

Stop and remove running container.

```bash
docker stop nedl-demo && docker rm nedl-demo
```

- `docker stop`: [Stop one or more running containers.](https://docs.docker.com/engine/reference/commandline/stop/)
- `nedl-demo`: Reference to container. In this case, the name we provided to `docker run`.
- `docker rm`: [Remove one or more containers.](https://docs.docker.com/engine/reference/commandline/rm/)

### `docker:shell`

Open a shell in a running container.

```bash
docker exec --interactive --tty nedl-demo sh
```

- `docker exec`: [Run a command in a running container.](https://docs.docker.com/engine/reference/commandline/exec/)
- `--interactive`: Keep STDIN open even if not attached
- `--tty`: Allocate a psuedo-TTY
- `nedl-demo`: Reference to container. In this case, the name we provided to `docker run`.
- `sh`: Command we are running. In this case, the simple shell program `sh`. Note: The command must
  exist in the container to be run.

### Stop and remove all running containers

```bash
docker rm --force $(docker ps --all --quiet)
```

- `docker rm`: [Remove one or more containers.](https://docs.docker.com/engine/reference/commandline/rm/)
- `--force`: Force removal of running containers.
- `docker ps`: [List containers.](https://docs.docker.com/engine/reference/commandline/ps/)
- `--all`: Show all containers, not just running containers.
- `--quiet`: Only display numeric IDs (Which we can use to remove them).
