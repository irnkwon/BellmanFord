# BellmanFord

## Design Details
- Edge List Representation
    - Since the graph can be large (up to 50,000 edges), using an edge list is memory-efficient
    - Each edge is represented as a tuple (u, v, w), where `u` is the source vertex, `v` is the destination vertex, and `w` is the weight of the edge
- Distance Array
    - Stores the shortest known distance from the source to each vertex
    - All distances are initialized to infinity, except for the source vertex, which is set to 0

## Steps
- Initialization
    - Set the distance to the source vertex as 0
    - Set the distance to all other vertices as infinity
- Edge Relaxation
    - Repeat `|V| - 1` times (where `|V|` is the number of vertices)
        - For each edge `(u, v, w)` in the edge list
            - If `distance[u] + w < distance[v]`, update `distance[v] = distance[u] + w`
- Negative Cycle Detection
    - Perform one more iteration over all edges
        - If any distance can still be updated, it indicates the presence of a negative weight cycle
        - Since the problem states there are no negative cycles, this step serves as a validation

## Runtime Analysis
- Initialization: O(V)
- Edge Relaxation:
    - The outer loop runs V - 1 times
    - Each iteration processes all E edges
    - Time complexity: O(V * E)
- Negative Cycle Detection: O(E)
- Total Time Complexity: O(V * E)
- With up to 10,000 vertices and 50,000 edges, the algorithm's time complexity becomes O(10,000 * 50,000) = O(5 × 10^8)
- This is acceptable for offline computations but may not be suitable for real-time applications