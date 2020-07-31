import { Person } from '../models';

export default {
    Query: {
        persons: (parent, args, context, info) => {
            return Person.find({});
        },
        person: (parent, { id }, context, info) => {
            if (Person.exists({ _id: id })) {
                return Person.findById(id);
            }
        }
    },
    Mutation: {
        create: (parent, args, context, info) => {
            return Person.create(args);
        },
        update: (parent, args, context, info) => {
            if (context.user) {
                console.log('Authorised: ', context.user);
            } else {
                console.log({ context });
            }
            if (Person.exists({ _id: args.id })) {
                return Person.findByIdAndUpdate(
                    {
                        _id: args.id
                    },
                    args
                );
            }
        },
        delete: (parent, args, context, info) => {
            if (Person.exists({ _id: args.id })) {
                return Person.findByIdAndDelete({
                    _id: args.id
                });
            }
        }
    }
};
