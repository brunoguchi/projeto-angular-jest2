/* eslint-disable no-prototype-builtins */
export class ActivatedRouteStub {
    private paramMap = new Map<string, string>();

    constructor(initialParams: any = { id: '123' }) {
        this.setarParamMap(initialParams);
    }

    get snapshot() {
        return {
            paramMap: this.paramMap
        };
    }

    setarParamMap(params: any) {
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                this.paramMap.set(key, params[key]);
            }
        }
    }
}
