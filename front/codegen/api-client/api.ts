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
     * @type {Array<Teacher>}
     * @memberof ClassRoomWithTeachers
     */
    'teacher': Array<Teacher> | null;
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
        async appControllerGetHello(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.appControllerGetHello(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.appControllerGetHello']?.[localVarOperationServerIndex]?.url;
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
        appControllerGetHello(options?: any): AxiosPromise<string> {
            return localVarFp.appControllerGetHello(options).then((request) => request(axios, basePath));
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
    public appControllerGetHello(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).appControllerGetHello(options).then((request) => request(this.axios, this.basePath));
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
}



