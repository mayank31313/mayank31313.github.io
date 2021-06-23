FROM ubuntu

RUN apt-get update \
    && apt-get install -y haproxy rsyslog \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir /run/haproxy
COPY haproxy.cfg /etc/haproxy/haproxy.cfg
COPY cert.pem /etc/haproxy/

EXPOSE 80
EXPOSE 443

CMD service rsyslog start && haproxy -f /etc/haproxy/haproxy.cfg && tail -F /var/log/haproxy.log