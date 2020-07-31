import { Person } from '../models';

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

passport.serializeUser((person: any, done) => {
    done(null, person.id);
});

passport.deserializeUser((id, done) => {
    Person.findById(id).then((person: any) => {
        done(null, {
            id: person.id
        });
    });
});

passport.use(
    'local',
    new LocalStrategy(
        {
            usernameField: 'name',
            passwordField: 'password'
        },
        async function (name, password, done) {
            const person: any = await Person.findOne({ name: name });
            if (!person) {
                return done(null, false, { message: 'Person does not exist.' });
            }
            if (person.password != password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, {
                id: person.id
            });
        }
    )
);

export default passport;
