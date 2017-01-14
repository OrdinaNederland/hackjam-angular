# Angular hack-jam

Test this page using

```
docker build -t hackjam-ws . && \
docker run --name hackjam-ws-site -d -p 8080:80 hackjam-ws && \
open http://localhost:8080
```

And kill it using
```
docker rm -f hackjam-ws-site
```


