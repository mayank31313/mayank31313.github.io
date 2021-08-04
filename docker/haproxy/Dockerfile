FROM ubuntu

RUN apt-get update \
    && apt-get install -y haproxy rsyslog openssl\
    && rm -rf /var/lib/apt/lists/*


RUN mkdir /run/haproxy
COPY haproxy.cfg /etc/haproxy/haproxy-backup.cfg
COPY cert.pem /etc/haproxy/cert.pem
COPY entrypoint.sh entrypoint.sh

ENV ip 127.0.0.1

EXPOSE 80
EXPOSE 443

ENTRYPOINT [ "bash", "entrypoint.sh" ]