import { Person } from '../../database/models';

export default {
    Query: {
        persons: (root, args, content, info) => {
            return Person.find({});
        },
        person: (root, { id }, content, info) => {
            if (Person.exists({ _id: id })) {
                return Person.findById(id);
            }
        }
    },
    Mutation: {
        create: (root, args, content, info) => {
            return Person.create(args);
        },
        update: (root, args, content, info) => {
            if (Person.exists({ _id: args.id })) {
                return Person.findByIdAndUpdate(
                    {
                        _id: args.id
                    },
                    args
                );
            }
        },
        delete: (root, args, content, info) => {
            if (Person.exists({ _id: args.id })) {
                return Person.findByIdAndDelete({
                    _id: args.id
                });
            }
        }
    }
};
