import { MONGODB_URI } from '../secrets';
import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

export default mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
