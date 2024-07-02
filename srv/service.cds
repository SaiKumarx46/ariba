using db as s1 from '../db/schema';

service MyService {

    entity validation as projection on s1.validation;

}
 