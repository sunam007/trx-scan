import os from 'os';

export const getServerIp = () => {
    const interfaces = os.networkInterfaces();
    let ipAddress = '';

    for (const interfaceName in interfaces) {
        for (const iface of interfaces[interfaceName]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                ipAddress = iface.address;
                break;
            }
        }
        if (ipAddress) break;
    }

    return ipAddress;
};