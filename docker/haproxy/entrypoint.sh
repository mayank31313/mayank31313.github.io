ip=${ip}

if [ $ip = "127.0.0.1" ]
then
    sed "s/IP_ADDRESS_BACKEND/192.168.46.2/g" /etc/haproxy/haproxy-backup.cfg > /etc/haproxy/haproxy.cfg
    sed -i "s/IP_ADDRESS_TUNNEL/192.168.46.3/g" /etc/haproxy/haproxy.cfg
    sed -i "s/IP_ADDRESS_STREAM/192.168.46.4/g" /etc/haproxy/haproxy.cfg
    sed -i "s/IP_ADDRESS_FRONTEND/127.0.0.1/g" /etc/haproxy/haproxy.cfg
    
else
    sed "s/IP_ADDRESS_[A-Z]\+/$ip/g" /etc/haproxy/haproxy-backup.cfg > /etc/haproxy/haproxy.cfg
fi

cat /etc/haproxy/haproxy.cfg
service rsyslog start && haproxy -f /etc/haproxy/haproxy.cfg && tail -F /var/log/haproxy.log