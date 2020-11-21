export {};

declare global {
    const aws: AWS
}

interface AWS {
    getEnv: () => string;
    s3: AwsS3;
}

interface AwsS3 {
    getBuckets: () => string[];
}
