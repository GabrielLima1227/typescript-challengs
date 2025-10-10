class Repository<T extends { id: number }> {
    private entities: T[] = [];

    add(entity: T): void {
        this.entities.push(entity);
    }

    findById(id: number): T | undefined {
        return this.entities.find(entity => entity.id === id);
    }
}