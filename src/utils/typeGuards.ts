import {Err, Ok, Result} from '../types/Result.ts';

export function isOk<T>(result: Result<T, any>): result is Ok<T> {
    return result.type === 'OK';
}

export function isErr<E extends Error>(
    result: Result<any, E>,
): result is Err<E> {
    return result.type === 'ERROR';
}
