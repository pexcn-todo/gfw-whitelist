var proxy = "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080;";
var direct = "DIRECT;";

// chinalist generate by: https://github.com/R0uter/gfw_domain_whitelist
var china_domains = {

};

// blockedlist generate by: pip install gfwlist2pac
var blocked_domains = {

};

var subnet_ips = [
[0, 4278190080],
[167772160, 4278190080],
[1681915904, 4290772992],
[2130706432, 4278190080],
[2851995648, 4294901760],
[2886729728, 4293918720],
[3221225472, 4294967288],
[3221225984, 4294967040],
[3227017984, 4294967040],
[3232235520, 4294901760],
[3323068416, 4294836224],
[3325256704, 4294967040],
[3405803776, 4294967040],
[3758096384, 3758096384]
]

var hasOwnProperty = Object.hasOwnProperty;

function is_ipv4(host) {
    var regex = /^\d+\.\d+\.\d+\.\d+$/g;
    return regex.test(host);
}

function is_china_domain(domain) {
    return !!(dnsDomainIs(domain, ".cn") || dnsDomainIs(domain, ".com.cn") || dnsDomainIs(domain, ".gov.cn"));
}

function match_domains(domain, domains) {
    var suffix;
    var pos = domain.lastIndexOf('.');
    for (;;) {
        suffix = domain.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return true;
        }
        if (pos <= 0) {
            return false;
        }
        pos = domain.lastIndexOf('.', pos - 1);
    }
}

function match_ips(ip, ips) {
    var left = 0;
    var right = ips.length;
    do {
        var mid = Math.floor((left + right) / 2);
        var ipf = (ip & ips[mid][1]) >>> 0;
        var m = (ips[mid][0] & ips[mid][1]) >>> 0;
        if (ipf == m) {
            return true;
        } else if (ipf > m) {
            left = mid + 1;
        } else {
            right = mid;
        }
    } while (left + 1 <= right);
    return false;
}

function FindProxyForURL(url, host) {
    if (typeof host === 'undefined'
        || isPlainHostName(host) === true
        || host === '127.0.0.1'
        || host === 'localhost') {
        return direct;
    }

    if (is_china_domain(host) === true) {
        return direct;
    }

    if (match_domains(host, china_domains) === true) {
        return direct;
    }

    if (match_domains(host, blocked_domains) === true) {
        return proxy;
    }

    if (is_ipv4(host) === true) {
        if (match_ips(host, subnet_ips) === true) {
            return direct;
        }
    }

    return proxy;
}
