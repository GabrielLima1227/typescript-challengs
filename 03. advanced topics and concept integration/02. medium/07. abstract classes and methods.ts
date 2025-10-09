abstract class AbstractRepository {
    abstract save(data: any): void;
}

class UserRepository extends AbstractRepository {
    save(data: any): void {
        console.log("User data saved:", data);
    }   
}