export interface IConfig {
    mode: string,
}

export default (): IConfig => {
    const mode = process.env.NODE_ENV;
    switch (mode) {
        case "production":
            return {
                mode,
            }
        default:
            return {
                mode,
            }
    }
}
