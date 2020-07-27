import { DATABASE } from '../secrets';
import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

export default mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
