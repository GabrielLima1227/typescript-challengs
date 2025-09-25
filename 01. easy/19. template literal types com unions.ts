type Status = 'loading' | 'success' | 'error';
type Module = 'user' | 'product';

type StatusModules = `${Module}-${Status}`;