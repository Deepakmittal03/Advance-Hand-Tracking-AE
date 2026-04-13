/**
 * MediaPipe Camera helper: drives `hands.send` each frame.
 * Depends on global `Camera` from @mediapipe/camera_utils (loaded before this file).
 *
 * @param {HTMLVideoElement} videoElement
 * @param {Hands} hands
 * @param {{ width?: number, height?: number }} [options]
 * @returns {Camera}
 */
function startHandsCamera(videoElement, hands, options) {
    const width = (options && options.width) || 1280;
    const height = (options && options.height) || 720;

    const camera = new Camera(videoElement, {
        onFrame: async () => {
            await hands.send({ image: videoElement });
        },
        width,
        height,
        facingMode: 'user'
    });

    camera.start();
    return camera;
}
