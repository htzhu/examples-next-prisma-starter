import {t} from '../trpc';

export const userRouter = t.router({
    getUsers: t.procedure.query(() => {

    }),
    createrUser: t.procedure
        .input()
        .mutation((req) => {

        }),
});
