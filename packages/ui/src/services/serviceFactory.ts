import { AxiosInstance } from 'axios';
import {cbService} from './cbService'
import {kpService } from './kpService'
// Assuming Api is a type representing the expected type of services
type Api = AxiosInstance;

export interface Services {
    cbService: Api;
    kpService: Api;
}

const services: Services = { cbService, kpService };

const getService = (serviceName: keyof Services): Api => {
    return services[serviceName];
};

export const servicesFactory = {
    createService(serviceType: keyof Services) {
        return getService(serviceType);
    },
    serviceType: {
        enums: {
            services: Object.freeze({
                cbService: 'cbService',
                kpService: 'kpService'
            }),
        },
    },
};
