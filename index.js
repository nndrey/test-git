import _ from "lodash";
import * as fsTrees from '@hexlet/immutable-fs-trees'
import path from 'path'
import * as yup from 'yup';

const user = {
    name: 'John',
    age: 25,
    password: 'secret',
};

const protectedProps = ['password'];

const protect = (user, protectedProps) => {
    const handler = {
        set: (target, prop, value) => {
            if (protectedProps.includes(prop)) {
                throw new Error(`Error: Access to ${prop} is restricted`)
            }
            target[prop] = value
            return true
        },
        get: (target, prop) => {
            if (protectedProps.includes(prop)) {
                throw new Error(`Error: Access to ${prop} is restricted`)
            }
            return target[prop]
        }
    }
    return new Proxy(user, handler)
}

const protectedUser = protect(user, protectedProps);
console.log(protectedUser.password);
