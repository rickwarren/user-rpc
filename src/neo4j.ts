import neo4j from 'neo4j-driver';

const driver = neo4j.driver(
    'neo4j://localhost:7687',
    neo4j.auth.basic('neo4j', 'bitnami1'
));

export const session = driver.session()
