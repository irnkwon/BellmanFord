function bellmanFord(vertices, edges, source) {
    const distance = new Array(vertices).fill(Infinity);
    distance[source] = 0;

    for (let i = 0; i < vertices - 1; i++) {
        for (const [u, v, w] of edges) {
            if (distance[u] !== Infinity && distance[u] + w < distance[v]) {
                distance[v] = distance[u] + w;
            }
        }
    }

    for (const [u, v, w] of edges) {
        if (distance[u] !== Infinity && distance[u] + w < distance[v]) {
            console.log("Graph contains a negative weight cycle");
            return null;
        }
    }

    return distance;
}

const V = 5;
const edges = [
    [0, 1, -1],
    [0, 2, 4],
    [1, 2, 3],
    [1, 3, 2],
    [1, 4, 2],
    [3, 2, 5],
    [3, 1, 1],
    [4, 3, -3]
];
const source = 0;

const distances = bellmanFord(V, edges, source);

if (distances !== null) {
    console.log("Vertex Distance from Source:");
    for (let i = 0; i < distances.length; i++) {
        console.log(`Vertex ${i}: ${distances[i]}`);
    }
}