export {};

declare global {
    const aliyun: Aliyun
}

interface Aliyun {
    getEnv: () => string;
    oss: AliyunOss;
}

interface AliyunOss {
    getBuckets: () => string[];
}
