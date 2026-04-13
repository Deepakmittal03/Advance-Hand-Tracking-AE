/**
 * MediaPipe Hands: model setup and results pipeline.
 * Depends on global `Hands` from @mediapipe/hands (loaded before this file).
 *
 * @param {(results: object) => void} onResults
 * @param {string} [baseUrl] CDN folder for wasm/data files
 * @returns {object} configured Hands instance
 */
function createMediapipeHands(onResults, baseUrl) {
    const root =
        baseUrl ||
        'https://cdn.jsdelivr.net/npm/@mediapipe/hands/';

    const hands = new Hands({
        locateFile: (file) => `${root}${file}`
    });

    hands.setOptions({
        maxNumHands: 2,
        modelComplexity: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.7
    });

    hands.onResults(onResults);
    return hands;
}
