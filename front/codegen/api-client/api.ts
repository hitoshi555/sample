/* tslint:disable */
/* eslint-disable */
/**
 * classroom management
 * The classroom management API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface ClassRoom
 */
export interface ClassRoom {
    /**
     * 
     * @type {number}
     * @memberof ClassRoom
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof ClassRoom
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof ClassRoom
     */
    'description': string;
    /**
     * 
     * @type {number}
     * @memberof ClassRoom
     */
    'units': number;
    /**
     * 
     * @type {object}
     * @memberof ClassRoom
     */
    'period': object;
    /**
     * 
     * @type {object}
     * @memberof ClassRoom
     */
    'timeSlot': object;
    /**
     * 
     * @type {object}
     * @memberof ClassRoom
     */
    'weekday': object;
}
/**
 * 
 * @export
 * @interface ClassRoomWithTeachers
 */
export interface ClassRoomWithTeachers {
    /**
     * 
     * @type {number}
     * @memberof ClassRoomWithTeachers
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof ClassRoomWithTeachers
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof ClassRoomWithTeachers
     */
    'description': string;
    /**
     * 
     * @type {number}
     * @memberof ClassRoomWithTeachers
     */
    'units': number;
    /**
     * 
     * @type {object}
     * @memberof ClassRoomWithTeachers
     */
    'period': object;
    /**
     * 
     * @type {object}
     * @memberof ClassRoomWithTeachers
     */
    'timeSlot': object;
    /**
     * 
     * @type {object}
     * @memberof ClassRoomWithTeachers
     */
    'weekday': object;
    /**
     * 
     * @type {Array<Teacher>}
     * @memberof ClassRoomWithTeachers
     */
    'teacher': Array<Teacher> | null;
}
/**
 * 
 * @export
 * @interface RequestChangePassword
 */
export interface RequestChangePassword {
    /**
     * 
     * @type {string}
     * @memberof RequestChangePassword
     */
    'studentId': string;
    /**
     * 
     * @type {string}
     * @memberof RequestChangePassword
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface RequestSelectClassroom
 */
export interface RequestSelectClassroom {
    /**
     * 
     * @type {number}
     * @memberof RequestSelectClassroom
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof RequestSelectClassroom
     */
    'studentId': string;
    /**
     * 
     * @type {object}
     * @memberof RequestSelectClassroom
     */
    'period': object;
    /**
     * 
     * @type {object}
     * @memberof RequestSelectClassroom
     */
    'timeSlot': object;
    /**
     * 
     * @type {object}
     * @memberof RequestSelectClassroom
     */
    'weekday': object;
}
/**
 * 
 * @export
 * @interface ResponseAllClassRoom
 */
export interface ResponseAllClassRoom {
    /**
     * 
     * @type {Array<ClassRoom>}
     * @memberof ResponseAllClassRoom
     */
    'classRooms': Array<ClassRoom>;
}
/**
 * 
 * @export
 * @interface ResponseChangePassword
 */
export interface ResponseChangePassword {
    /**
     * 
     * @type {string}
     * @memberof ResponseChangePassword
     */
    'studentId': string;
}
/**
 * 
 * @export
 * @interface ResponseLogin
 */
export interface ResponseLogin {
    /**
     * 
     * @type {string}
     * @memberof ResponseLogin
     */
    'access_token': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseLogin
     */
    'studentId': string;
}
/**
 * 
 * @export
 * @interface ResponseOneClassRoom
 */
export interface ResponseOneClassRoom {
    /**
     * 
     * @type {ClassRoomWithTeachers}
     * @memberof ResponseOneClassRoom
     */
    'classRoom': ClassRoomWithTeachers;
}
/**
 * 
 * @export
 * @interface ResponseSelectClassroom
 */
export interface ResponseSelectClassroom {
    /**
     * 
     * @type {string}
     * @memberof ResponseSelectClassroom
     */
    'resultText': string;
}
/**
 * 
 * @export
 * @interface Teacher
 */
export interface Teacher {
    /**
     * 
     * @type {number}
     * @memberof Teacher
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Teacher
     */
    'name': string;
    /**
     * 
     * @type {object}
     * @memberof Teacher
     */
    'position': object;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHash: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/hash`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHello: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetProfile: async (body: object, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('appControllerGetProfile', 'body', body)
            const localVarPath = `/profile`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerLogin: async (body: object, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('appControllerLogin', 'body', body)
            const localVarPath = `/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classRoomControllerGetAllClassRoom: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/class-room`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classRoomControllerGetOneClassRoom: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('classRoomControllerGetOneClassRoom', 'id', id)
            const localVarPath = `/class-room/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {RequestSelectClassroom} requestSelectClassroom 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classRoomControllerSelectClassRoom: async (requestSelectClassroom: RequestSelectClassroom, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestSelectClassroom' is not null or undefined
            assertParamExists('classRoomControllerSelectClassRoom', 'requestSelectClassroom', requestSelectClassroom)
            const localVarPath = `/class-room/select-class-room`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestSelectClassroom, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {RequestChangePassword} requestChangePassword 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerPostChangePassword: async (requestChangePassword: RequestChangePassword, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestChangePassword' is not null or undefined
            assertParamExists('usersControllerPostChangePassword', 'requestChangePassword', requestChangePassword)
            const localVarPath = `/users/change-password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(requestChangePassword, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetHash(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.appControllerGetHash(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.appControllerGetHash']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetHello(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.appControllerGetHello(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.appControllerGetHello']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetProfile(body: object, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.appControllerGetProfile(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.appControllerGetProfile']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerLogin(body: object, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseLogin>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.appControllerLogin(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.appControllerLogin']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async classRoomControllerGetAllClassRoom(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseAllClassRoom>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.classRoomControllerGetAllClassRoom(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.classRoomControllerGetAllClassRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async classRoomControllerGetOneClassRoom(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseOneClassRoom>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.classRoomControllerGetOneClassRoom(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.classRoomControllerGetOneClassRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {RequestSelectClassroom} requestSelectClassroom 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async classRoomControllerSelectClassRoom(requestSelectClassroom: RequestSelectClassroom, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseSelectClassroom>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.classRoomControllerSelectClassRoom(requestSelectClassroom, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.classRoomControllerSelectClassRoom']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {RequestChangePassword} requestChangePassword 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersControllerPostChangePassword(requestChangePassword: RequestChangePassword, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseChangePassword>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersControllerPostChangePassword(requestChangePassword, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.usersControllerPostChangePassword']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHash(options?: any): AxiosPromise<string> {
            return localVarFp.appControllerGetHash(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHello(options?: any): AxiosPromise<string> {
            return localVarFp.appControllerGetHello(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetProfile(body: object, options?: any): AxiosPromise<object> {
            return localVarFp.appControllerGetProfile(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerLogin(body: object, options?: any): AxiosPromise<ResponseLogin> {
            return localVarFp.appControllerLogin(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classRoomControllerGetAllClassRoom(options?: any): AxiosPromise<ResponseAllClassRoom> {
            return localVarFp.classRoomControllerGetAllClassRoom(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classRoomControllerGetOneClassRoom(id: number, options?: any): AxiosPromise<ResponseOneClassRoom> {
            return localVarFp.classRoomControllerGetOneClassRoom(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {RequestSelectClassroom} requestSelectClassroom 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classRoomControllerSelectClassRoom(requestSelectClassroom: RequestSelectClassroom, options?: any): AxiosPromise<ResponseSelectClassroom> {
            return localVarFp.classRoomControllerSelectClassRoom(requestSelectClassroom, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {RequestChangePassword} requestChangePassword 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerPostChangePassword(requestChangePassword: RequestChangePassword, options?: any): AxiosPromise<ResponseChangePassword> {
            return localVarFp.usersControllerPostChangePassword(requestChangePassword, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public appControllerGetHash(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).appControllerGetHash(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public appControllerGetHello(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).appControllerGetHello(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public appControllerGetProfile(body: object, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).appControllerGetProfile(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public appControllerLogin(body: object, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).appControllerLogin(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public classRoomControllerGetAllClassRoom(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).classRoomControllerGetAllClassRoom(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public classRoomControllerGetOneClassRoom(id: number, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).classRoomControllerGetOneClassRoom(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {RequestSelectClassroom} requestSelectClassroom 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public classRoomControllerSelectClassRoom(requestSelectClassroom: RequestSelectClassroom, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).classRoomControllerSelectClassRoom(requestSelectClassroom, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {RequestChangePassword} requestChangePassword 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public usersControllerPostChangePassword(requestChangePassword: RequestChangePassword, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).usersControllerPostChangePassword(requestChangePassword, options).then((request) => request(this.axios, this.basePath));
    }
}



